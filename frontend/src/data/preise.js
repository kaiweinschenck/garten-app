export const LOHNKOSTENSATZ_DEFAULT = 45.00; // €/h
export const MWST_SATZ = 0.19;

export const KATEGORIEN = [
  {
    id: 'pflanz',
    name: 'Pflanzarbeiten',
    positionen: [
      { id: 'P001', bezeichnung: 'Staude pflanzen', einheit: 'Stk', materialpreis: 6.50, az_min: 8 },
      { id: 'P002', bezeichnung: 'Rose pflanzen', einheit: 'Stk', materialpreis: 12.00, az_min: 15 },
      { id: 'P003', bezeichnung: 'Strauch pflanzen bis 60 cm', einheit: 'Stk', materialpreis: 15.00, az_min: 20 },
      { id: 'P004', bezeichnung: 'Strauch pflanzen 60–120 cm', einheit: 'Stk', materialpreis: 28.00, az_min: 30 },
      { id: 'P005', bezeichnung: 'Strauch pflanzen über 120 cm', einheit: 'Stk', materialpreis: 48.00, az_min: 45 },
      { id: 'P006', bezeichnung: 'Hecke pflanzen, einreihig', einheit: 'lfm', materialpreis: 18.00, az_min: 25 },
      { id: 'P007', bezeichnung: 'Baum pflanzen bis 3 m Stammumfang', einheit: 'Stk', materialpreis: 85.00, az_min: 60 },
      { id: 'P008', bezeichnung: 'Baum pflanzen 3–6 m Stammumfang', einheit: 'Stk', materialpreis: 180.00, az_min: 90 },
      { id: 'P009', bezeichnung: 'Beet anlegen inkl. Substrat', einheit: 'm²', materialpreis: 22.00, az_min: 35 },
    ],
  },
  {
    id: 'boden',
    name: 'Bodenarbeiten',
    positionen: [
      { id: 'B001', bezeichnung: 'Boden lockern/umgraben', einheit: 'm²', materialpreis: 0, az_min: 8 },
      { id: 'B002', bezeichnung: 'Substrat einbauen 20 cm', einheit: 'm²', materialpreis: 8.50, az_min: 12 },
      { id: 'B003', bezeichnung: 'Mutterboden abschieben', einheit: 'm²', materialpreis: 0, az_min: 5 },
      { id: 'B004', bezeichnung: 'Boden planieren', einheit: 'm²', materialpreis: 0, az_min: 6 },
      { id: 'B005', bezeichnung: 'Aushub entsorgen', einheit: 'm³', materialpreis: 45.00, az_min: 20 },
      { id: 'B006', bezeichnung: 'Schotterbett 15 cm einbauen', einheit: 'm²', materialpreis: 7.50, az_min: 10 },
    ],
  },
  {
    id: 'rasen',
    name: 'Rasenflächen',
    positionen: [
      { id: 'R001', bezeichnung: 'Rasen säen', einheit: 'm²', materialpreis: 1.20, az_min: 4 },
      { id: 'R002', bezeichnung: 'Rollrasen legen', einheit: 'm²', materialpreis: 8.50, az_min: 6 },
      { id: 'R003', bezeichnung: 'Rasen mähen', einheit: 'm²', materialpreis: 0, az_min: 2 },
      { id: 'R004', bezeichnung: 'Rasen vertikutieren + nachsäen', einheit: 'm²', materialpreis: 0.80, az_min: 3 },
      { id: 'R005', bezeichnung: 'Rasen düngen', einheit: 'm²', materialpreis: 0.60, az_min: 1 },
    ],
  },
  {
    id: 'wege',
    name: 'Wegebau & Pflaster',
    positionen: [
      { id: 'W001', bezeichnung: 'Schotterweg anlegen 10 cm', einheit: 'm²', materialpreis: 12.00, az_min: 20 },
      { id: 'W002', bezeichnung: 'Beton-Pflaster verlegen', einheit: 'm²', materialpreis: 22.00, az_min: 35 },
      { id: 'W003', bezeichnung: 'Naturstein-Pflaster verlegen', einheit: 'm²', materialpreis: 48.00, az_min: 50 },
      { id: 'W004', bezeichnung: 'Randstein setzen', einheit: 'lfm', materialpreis: 8.50, az_min: 15 },
      { id: 'W005', bezeichnung: 'Fugensand einkehren', einheit: 'm²', materialpreis: 1.50, az_min: 5 },
      { id: 'W006', bezeichnung: 'Gehwegplatten verlegen', einheit: 'm²', materialpreis: 28.00, az_min: 40 },
    ],
  },
  {
    id: 'gehoelz',
    name: 'Gehölzpflege',
    positionen: [
      { id: 'G001', bezeichnung: 'Heckenschnitt bis 1 m Höhe', einheit: 'lfm', materialpreis: 0, az_min: 8 },
      { id: 'G002', bezeichnung: 'Heckenschnitt 1–2 m Höhe', einheit: 'lfm', materialpreis: 0, az_min: 12 },
      { id: 'G003', bezeichnung: 'Heckenschnitt über 2 m Höhe', einheit: 'lfm', materialpreis: 0, az_min: 18 },
      { id: 'G004', bezeichnung: 'Strauch schneiden/formen', einheit: 'Stk', materialpreis: 0, az_min: 20 },
      { id: 'G005', bezeichnung: 'Baum schneiden bis 5 m', einheit: 'Stk', materialpreis: 0, az_min: 45 },
      { id: 'G006', bezeichnung: 'Gehölz roden bis 60 cm', einheit: 'Stk', materialpreis: 0, az_min: 30 },
      { id: 'G007', bezeichnung: 'Totholz entfernen', einheit: 'Stk', materialpreis: 0, az_min: 25 },
    ],
  },
  {
    id: 'mulch',
    name: 'Mulch & Schüttgüter',
    positionen: [
      { id: 'M001', bezeichnung: 'Rindenmulch ausbringen 5 cm', einheit: 'm²', materialpreis: 3.80, az_min: 5 },
      { id: 'M002', bezeichnung: 'Kies/Split 5 cm', einheit: 'm²', materialpreis: 9.00, az_min: 8 },
      { id: 'M003', bezeichnung: 'Lava-Granulat 5 cm', einheit: 'm²', materialpreis: 14.00, az_min: 8 },
      { id: 'M004', bezeichnung: 'Kompost ausbringen 5 cm', einheit: 'm²', materialpreis: 4.50, az_min: 6 },
    ],
  },
  {
    id: 'bewaesserung',
    name: 'Bewässerung',
    positionen: [
      { id: 'BW001', bezeichnung: 'Tropfschlauch verlegen', einheit: 'lfm', materialpreis: 2.80, az_min: 6 },
      { id: 'BW002', bezeichnung: 'Sprinkler setzen', einheit: 'Stk', materialpreis: 18.00, az_min: 20 },
      { id: 'BW003', bezeichnung: 'Steuereinheit einbauen', einheit: 'Stk', materialpreis: 120.00, az_min: 60 },
      { id: 'BW004', bezeichnung: 'Wasserhahn anschließen', einheit: 'Stk', materialpreis: 25.00, az_min: 30 },
    ],
  },
];

export function allePositionen() {
  return KATEGORIEN.flatMap(k => k.positionen.map(p => ({ ...p, kategorie: k.name })));
}

export function suchePositionen(query) {
  if (!query.trim()) return allePositionen();
  const q = query.toLowerCase();
  return allePositionen().filter(p => p.bezeichnung.toLowerCase().includes(q) || p.kategorie.toLowerCase().includes(q));
}

export function calcHerstellkosten(menge, materialpreis, az_min, lohnkostensatz) {
  const material = menge * materialpreis;
  const lohn = menge * (az_min / 60) * lohnkostensatz;
  return { material, lohn, total: material + lohn };
}

export function calcAngebot(positionen, markup, lohnkostensatz) {
  const hk = positionen.reduce((sum, p) => {
    return sum + calcHerstellkosten(p.menge, p.materialpreis, p.az_min, lohnkostensatz).total;
  }, 0);
  const netto = hk * (1 + markup / 100);
  const mwst = netto * MWST_SATZ;
  const brutto = netto + mwst;
  return { hk, netto, mwst, brutto };
}

export function eur(val) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val);
}
