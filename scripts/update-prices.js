#!/usr/bin/env node
/**
 * update-prices.js
 * Parses PREISE.md and regenerates frontend/src/data/preise.js
 *
 * Aufruf: node scripts/update-prices.js
 *         (aus dem Projekt-Root heraus)
 */

const fs = require('fs');
const path = require('path');

const mdPath  = path.join(__dirname, '..', 'PREISE.md');
const outPath = path.join(__dirname, '..', 'frontend', 'src', 'data', 'preise.js');

const md    = fs.readFileSync(mdPath, 'utf8');
const lines = md.split('\n');

// ── Hilfsfunktionen ─────────────────────────────────────────────────────────

function slugify(str) {
  const map = { ä: 'ae', ö: 'oe', ü: 'ue', Ä: 'Ae', Ö: 'Oe', Ü: 'Ue', ß: 'ss' };
  return str
    .replace(/[äöüÄÖÜß]/g, c => map[c] || c)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}

function parseNum(str) {
  if (!str) return 0;
  return parseFloat(str.replace(',', '.')) || 0;
}

function toTitleCase(str) {
  // "ERDARBEITEN" → "Erdarbeiten",  "MASCHINEN & GERÄTE" → "Maschinen & Geräte"
  return str
    .replace(/[äöüÄÖÜß]/g, c => c)
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

// ── Parser ───────────────────────────────────────────────────────────────────

const kategorien = [];
let currentGewerk = null;
let currentKat    = null;
let inTable       = false;

for (const raw of lines) {
  const line = raw.trimEnd();
  const t    = line.trim();

  // Section: ## GEWERK: XXX
  if (t.startsWith('## GEWERK:')) {
    currentGewerk = toTitleCase(t.replace('## GEWERK:', '').trim());
    currentKat    = null;
    inTable       = false;
    continue;
  }

  // Subsection: ### Kategorie
  if (t.startsWith('### ')) {
    const katName = t.replace('###', '').trim();
    currentKat = {
      id: slugify(katName),
      name: katName,
      gewerk: currentGewerk,
      positionen: [],
    };
    kategorien.push(currentKat);
    inTable = false;
    continue;
  }

  // Table header row
  if (t.startsWith('| ID |') || t.startsWith('| ID|')) {
    inTable = true;
    continue;
  }

  // Table separator row (|---|...)
  if (t.startsWith('|') && t.replace(/[\|\- ]/g, '') === '') {
    continue;
  }
  if (t.startsWith('|--')) {
    continue;
  }

  // Table data row
  if (inTable && t.startsWith('|') && currentGewerk) {
    // For gewerks without a ### subheading (Maschinen, Bewässerung)
    if (!currentKat) {
      currentKat = {
        id: slugify(currentGewerk),
        name: currentGewerk,
        gewerk: currentGewerk,
        positionen: [],
      };
      kategorien.push(currentKat);
    }

    const cols = t.split('|').map(s => s.trim()).filter(s => s !== '');
    // Expected: ID | Bezeichnung | Einheit | Material | AZ | Maschine | Tags
    if (cols.length < 6) continue;

    const [id, bezeichnung, einheit, mat, az, maschine] = cols;
    if (!id || !bezeichnung || id === 'ID') continue;

    currentKat.positionen.push({
      id:              id.trim(),
      bezeichnung:     bezeichnung.trim(),
      einheit:         einheit.trim(),
      materialpreis:   parseNum(mat),
      az_min:          parseInt(az) || 0,
      maschinenkosten: parseNum(maschine),
    });
    continue;
  }

  // Blank line or horizontal rule → reset table
  if (t === '' || t === '---') {
    if (t === '---') inTable = false;
    if (t === '')    inTable = false;
  }
}

// ── Code-Generator ───────────────────────────────────────────────────────────

function esc(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

const katBlocks = kategorien.map(k => {
  const pos = k.positionen.map(p =>
    `      { id: '${esc(p.id)}', bezeichnung: '${esc(p.bezeichnung)}', einheit: '${esc(p.einheit)}', materialpreis: ${p.materialpreis.toFixed(2)}, az_min: ${p.az_min}, maschinenkosten: ${p.maschinenkosten.toFixed(2)} },`
  ).join('\n');

  const bar = '═'.repeat(57);
  return `  // ${bar}
  // GEWERK: ${k.gewerk}${k.name !== k.gewerk ? ' – ' + k.name : ''}
  // ${bar}
  {
    id: '${slugify(k.name)}',
    name: '${esc(k.name)}',
    gewerk: '${esc(k.gewerk)}',
    positionen: [
${pos}
    ],
  },`;
}).join('\n\n');

const totalPos = kategorien.reduce((s, k) => s + k.positionen.length, 0);

const output = `/**
 * GreenCalc 26 – Kalkulationsdatenbank
 *
 * WICHTIG: Diese Datei wird aus PREISE.md generiert.
 * Neue Positionen NICHT hier eintragen – nur in PREISE.md pflegen.
 * Regenerieren mit: node scripts/update-prices.js (im Projekt-Root)
 *
 * Stand: ${new Date().toLocaleDateString('de-DE')} · ${kategorien.length} Kategorien · ${totalPos} Positionen
 */

export const LOHNKOSTENSATZ_DEFAULT = 75.00; // €/h (Vollkostenansatz inkl. Nebenkosten)
export const MWST_SATZ = 0.19;

export const KATEGORIEN = [

${katBlocks}

];

// ── Hilfsfunktionen ─────────────────────────────────────────────────────────

export function allePositionen() {
  return KATEGORIEN.flatMap(k =>
    k.positionen.map(p => ({ ...p, kategorie: k.name, gewerk: k.gewerk }))
  );
}

export function suchePositionen(query, gewerk = 'alle') {
  let list = allePositionen();
  if (gewerk !== 'alle') list = list.filter(p => p.gewerk === gewerk);
  if (!query.trim()) return list;
  const q = query.toLowerCase();
  return list.filter(p =>
    p.bezeichnung.toLowerCase().includes(q) ||
    p.kategorie.toLowerCase().includes(q) ||
    p.gewerk.toLowerCase().includes(q) ||
    p.einheit.toLowerCase().includes(q)
  );
}

export function gewerke() {
  return [...new Set(KATEGORIEN.map(k => k.gewerk))];
}

/**
 * Herstellkosten-Formel:
 * HK = (Menge × Material) + (Menge × Maschine) + (Menge × AZ_min/60 × Lohnkostensatz)
 */
export function calcHerstellkosten(menge, materialpreis, az_min, lohnkostensatz, maschinenkosten = 0) {
  const material = menge * materialpreis;
  const maschine = menge * maschinenkosten;
  const lohn     = menge * (az_min / 60) * lohnkostensatz;
  return { material, maschine, lohn, total: material + maschine + lohn };
}

export function calcAngebot(positionen, markup, lohnkostensatz) {
  const hk = positionen.reduce((sum, p) =>
    sum + calcHerstellkosten(p.menge, p.materialpreis, p.az_min, lohnkostensatz, p.maschinenkosten || 0).total, 0);
  const netto  = hk * (1 + markup / 100);
  const mwst   = netto * MWST_SATZ;
  const brutto = netto + mwst;
  return { hk, netto, mwst, brutto };
}

export function eur(val) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val ?? 0);
}
`;

fs.writeFileSync(outPath, output, 'utf8');
console.log(`✓ preise.js aktualisiert: ${kategorien.length} Kategorien, ${totalPos} Positionen`);
