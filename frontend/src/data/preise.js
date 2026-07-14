/**
 * GreenCalc 26 – Kalkulationsdatenbank
 *
 * WICHTIG: Diese Datei wird aus PREISE.md generiert.
 * Neue Positionen NICHT hier eintragen – nur in PREISE.md pflegen.
 * Regenerieren mit: node scripts/update-prices.js (im Projekt-Root)
 *
 * Stand: 14.7.2026 · 18 Kategorien · 216 Positionen
 */

export const LOHNKOSTENSATZ_DEFAULT = 75.00; // €/h (Vollkostenansatz inkl. Nebenkosten)
export const MWST_SATZ = 0.19;

export const KATEGORIEN = [

  // ═════════════════════════════════════════════════════════
  // GEWERK: Erdarbeiten – Bodenarbeiten
  // ═════════════════════════════════════════════════════════
  {
    id: 'bodenarbeiten',
    name: 'Bodenarbeiten',
    gewerk: 'Erdarbeiten',
    positionen: [
      { id: 'E001', bezeichnung: 'Oberboden auskoffern 20 cm, maschinell', einheit: 'm²', materialpreis: 0.00, az_min: 10, maschinenkosten: 2.50 },
      { id: 'E002', bezeichnung: 'Oberboden auskoffern 30 cm, maschinell', einheit: 'm²', materialpreis: 0.00, az_min: 14, maschinenkosten: 3.20 },
      { id: 'E003', bezeichnung: 'Oberboden auskoffern 40 cm, maschinell', einheit: 'm²', materialpreis: 0.00, az_min: 18, maschinenkosten: 4.00 },
      { id: 'E004', bezeichnung: 'Bodenaushub maschinell abtragen', einheit: 'm³', materialpreis: 0.00, az_min: 12, maschinenkosten: 6.50 },
      { id: 'E005', bezeichnung: 'Bodenaushub händisch abtragen', einheit: 'm³', materialpreis: 0.00, az_min: 90, maschinenkosten: 0.00 },
      { id: 'E006', bezeichnung: 'Aushub laden und abfahren', einheit: 'm³', materialpreis: 5.00, az_min: 10, maschinenkosten: 8.00 },
      { id: 'E007', bezeichnung: 'Aushub entsorgen Bodenklasse Z0', einheit: 'm³', materialpreis: 28.00, az_min: 5, maschinenkosten: 0.00 },
      { id: 'E008', bezeichnung: 'Aushub entsorgen Bodenklasse Z1.1', einheit: 'm³', materialpreis: 58.00, az_min: 5, maschinenkosten: 0.00 },
      { id: 'E009', bezeichnung: 'Aushub entsorgen Bodenklasse Z1.2', einheit: 'm³', materialpreis: 90.00, az_min: 5, maschinenkosten: 0.00 },
      { id: 'E010', bezeichnung: 'Aushub entsorgen Bodenklasse Z2', einheit: 'm³', materialpreis: 165.00, az_min: 5, maschinenkosten: 0.00 },
      { id: 'E011', bezeichnung: 'Planum herstellen und verdichten', einheit: 'm²', materialpreis: 0.00, az_min: 4, maschinenkosten: 1.00 },
      { id: 'E012', bezeichnung: 'Oberfläche planieren und abziehen', einheit: 'm²', materialpreis: 0.00, az_min: 3, maschinenkosten: 0.80 },
      { id: 'E013', bezeichnung: 'Hinterfüllen mit Recyclingschotter', einheit: 'm³', materialpreis: 16.00, az_min: 15, maschinenkosten: 2.50 },
      { id: 'E014', bezeichnung: 'Böschung anlegen 1:1', einheit: 'm²', materialpreis: 0.00, az_min: 8, maschinenkosten: 1.50 },
      { id: 'E015', bezeichnung: 'Mutterboden sieben und lagern', einheit: 'm³', materialpreis: 0.00, az_min: 25, maschinenkosten: 3.00 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Pflasterbau – Tragschicht & Bettung
  // ═════════════════════════════════════════════════════════
  {
    id: 'tragschicht_bettung',
    name: 'Tragschicht & Bettung',
    gewerk: 'Pflasterbau',
    positionen: [
      { id: 'T001', bezeichnung: 'Geotextil/Vlies 100 g/m² verlegen', einheit: 'm²', materialpreis: 0.90, az_min: 3, maschinenkosten: 0.00 },
      { id: 'T002', bezeichnung: 'Geotextil/Vlies 150 g/m² verlegen', einheit: 'm²', materialpreis: 1.40, az_min: 3, maschinenkosten: 0.00 },
      { id: 'T003', bezeichnung: 'Geotextil/Vlies 300 g/m² verlegen', einheit: 'm²', materialpreis: 2.20, az_min: 4, maschinenkosten: 0.00 },
      { id: 'T004', bezeichnung: 'Schotter 0/32 einbauen 15 cm', einheit: 'm²', materialpreis: 8.00, az_min: 8, maschinenkosten: 2.00 },
      { id: 'T005', bezeichnung: 'Schotter 0/32 einbauen 20 cm', einheit: 'm²', materialpreis: 10.00, az_min: 10, maschinenkosten: 2.50 },
      { id: 'T006', bezeichnung: 'Schotter 0/32 einbauen 25 cm', einheit: 'm²', materialpreis: 12.50, az_min: 12, maschinenkosten: 3.00 },
      { id: 'T007', bezeichnung: 'Schotter 0/45 einbauen 20 cm', einheit: 'm²', materialpreis: 9.50, az_min: 10, maschinenkosten: 2.50 },
      { id: 'T008', bezeichnung: 'Schotter 0/45 einbauen 30 cm', einheit: 'm²', materialpreis: 14.00, az_min: 14, maschinenkosten: 3.50 },
      { id: 'T009', bezeichnung: 'Recycling-Schotter 0/45 einbauen 20 cm', einheit: 'm²', materialpreis: 7.50, az_min: 10, maschinenkosten: 2.50 },
      { id: 'T010', bezeichnung: 'Tragschicht verdichten (Rüttelplatte)', einheit: 'm²', materialpreis: 0.00, az_min: 3, maschinenkosten: 1.20 },
      { id: 'T011', bezeichnung: 'Frostschutzschicht 20 cm einbauen', einheit: 'm²', materialpreis: 9.50, az_min: 10, maschinenkosten: 2.50 },
      { id: 'T012', bezeichnung: 'Frostschutzschicht 30 cm einbauen', einheit: 'm²', materialpreis: 13.50, az_min: 13, maschinenkosten: 3.00 },
      { id: 'T013', bezeichnung: 'Magerbeton C8/10 einbauen 10 cm', einheit: 'm²', materialpreis: 15.00, az_min: 20, maschinenkosten: 1.50 },
      { id: 'T014', bezeichnung: 'Magerbeton C8/10 einbauen 15 cm', einheit: 'm²', materialpreis: 21.00, az_min: 25, maschinenkosten: 2.00 },
      { id: 'T015', bezeichnung: 'Splittbettung 0/5 herstellen 3 cm', einheit: 'm²', materialpreis: 2.80, az_min: 5, maschinenkosten: 0.00 },
      { id: 'T016', bezeichnung: 'Splittbettung 0/8 herstellen 4 cm', einheit: 'm²', materialpreis: 3.60, az_min: 6, maschinenkosten: 0.00 },
      { id: 'T017', bezeichnung: 'Sandbettung herstellen 3 cm', einheit: 'm²', materialpreis: 2.20, az_min: 5, maschinenkosten: 0.00 },
      { id: 'T018', bezeichnung: 'Sandbettung herstellen 5 cm', einheit: 'm²', materialpreis: 3.50, az_min: 6, maschinenkosten: 0.00 },
      { id: 'T019', bezeichnung: 'Mörtelbettung herstellen 3 cm', einheit: 'm²', materialpreis: 4.50, az_min: 10, maschinenkosten: 0.00 },
      { id: 'T020', bezeichnung: 'Bettung abziehen, abrichten, wässern', einheit: 'm²', materialpreis: 0.00, az_min: 4, maschinenkosten: 0.00 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Pflasterbau – Betonpflaster & Klinker
  // ═════════════════════════════════════════════════════════
  {
    id: 'betonpflaster_klinker',
    name: 'Betonpflaster & Klinker',
    gewerk: 'Pflasterbau',
    positionen: [
      { id: 'BP001', bezeichnung: 'Betonpflaster 10×10×8 cm (Mosaikoptik)', einheit: 'm²', materialpreis: 22.00, az_min: 55, maschinenkosten: 0.50 },
      { id: 'BP002', bezeichnung: 'Betonpflaster 20×10×6 cm', einheit: 'm²', materialpreis: 12.00, az_min: 28, maschinenkosten: 0.50 },
      { id: 'BP003', bezeichnung: 'Betonpflaster 20×10×8 cm', einheit: 'm²', materialpreis: 14.00, az_min: 28, maschinenkosten: 0.50 },
      { id: 'BP004', bezeichnung: 'Betonpflaster 20×10×10 cm (Schwerlast)', einheit: 'm²', materialpreis: 18.00, az_min: 30, maschinenkosten: 0.50 },
      { id: 'BP005', bezeichnung: 'Betonpflaster Verbundform 6 cm', einheit: 'm²', materialpreis: 13.00, az_min: 30, maschinenkosten: 0.50 },
      { id: 'BP006', bezeichnung: 'Betonpflaster Verbundform 8 cm', einheit: 'm²', materialpreis: 16.00, az_min: 32, maschinenkosten: 0.50 },
      { id: 'BP007', bezeichnung: 'Großsteinklinker Beton 15×15×8 cm', einheit: 'm²', materialpreis: 24.00, az_min: 42, maschinenkosten: 0.50 },
      { id: 'BP008', bezeichnung: 'Betonpflaster großformatig 60×40×6 cm', einheit: 'm²', materialpreis: 28.00, az_min: 38, maschinenkosten: 0.80 },
      { id: 'BP009', bezeichnung: 'Klinker Waalformat 21×5×6,5 cm', einheit: 'm²', materialpreis: 32.00, az_min: 55, maschinenkosten: 0.50 },
      { id: 'BP010', bezeichnung: 'Klinker Langformat 29×9×5,2 cm', einheit: 'm²', materialpreis: 28.00, az_min: 48, maschinenkosten: 0.50 },
      { id: 'BP011', bezeichnung: 'Betonsteinpflaster Antik/Rustikal', einheit: 'm²', materialpreis: 26.00, az_min: 45, maschinenkosten: 0.50 },
      { id: 'BP012', bezeichnung: 'Pflaster aufreißen und stapeln', einheit: 'm²', materialpreis: 0.00, az_min: 18, maschinenkosten: 0.80 },
      { id: 'BP013', bezeichnung: 'Altpflaster wieder verlegen', einheit: 'm²', materialpreis: 0.00, az_min: 35, maschinenkosten: 0.50 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Pflasterbau – Platten & Beläge
  // ═════════════════════════════════════════════════════════
  {
    id: 'platten_belaege',
    name: 'Platten & Beläge',
    gewerk: 'Pflasterbau',
    positionen: [
      { id: 'PL001', bezeichnung: 'Betonplatten 40×40×4 cm', einheit: 'm²', materialpreis: 14.00, az_min: 30, maschinenkosten: 0.50 },
      { id: 'PL002', bezeichnung: 'Betonplatten 50×50×5 cm', einheit: 'm²', materialpreis: 18.00, az_min: 28, maschinenkosten: 0.50 },
      { id: 'PL003', bezeichnung: 'Betonplatten 60×40×5 cm', einheit: 'm²', materialpreis: 20.00, az_min: 30, maschinenkosten: 0.50 },
      { id: 'PL004', bezeichnung: 'Betonplatten 80×40×6 cm', einheit: 'm²', materialpreis: 24.00, az_min: 32, maschinenkosten: 0.50 },
      { id: 'PL005', bezeichnung: 'Feinsteinzeug 60×60×2 cm outdoor', einheit: 'm²', materialpreis: 45.00, az_min: 45, maschinenkosten: 0.50 },
      { id: 'PL006', bezeichnung: 'Feinsteinzeug 60×60×3 cm outdoor', einheit: 'm²', materialpreis: 52.00, az_min: 48, maschinenkosten: 0.50 },
      { id: 'PL007', bezeichnung: 'Feinsteinzeug 80×80×2 cm outdoor', einheit: 'm²', materialpreis: 58.00, az_min: 52, maschinenkosten: 0.50 },
      { id: 'PL008', bezeichnung: 'Feinsteinzeug 120×60×2 cm outdoor', einheit: 'm²', materialpreis: 68.00, az_min: 58, maschinenkosten: 0.80 },
      { id: 'PL009', bezeichnung: 'WPC-Terrassendiele verlegen', einheit: 'm²', materialpreis: 55.00, az_min: 35, maschinenkosten: 0.00 },
      { id: 'PL010', bezeichnung: 'Holzterrassendielen Bangkirai', einheit: 'm²', materialpreis: 65.00, az_min: 40, maschinenkosten: 0.00 },
      { id: 'PL011', bezeichnung: 'Platten aus Lieferbestand wieder verlegen', einheit: 'm²', materialpreis: 0.00, az_min: 35, maschinenkosten: 0.50 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Pflasterbau – Naturstein
  // ═════════════════════════════════════════════════════════
  {
    id: 'naturstein',
    name: 'Naturstein',
    gewerk: 'Pflasterbau',
    positionen: [
      { id: 'NS001', bezeichnung: 'Granit Pflaster 8/11 cm', einheit: 'm²', materialpreis: 55.00, az_min: 60, maschinenkosten: 0.80 },
      { id: 'NS002', bezeichnung: 'Granit Großpflaster 14/18 cm', einheit: 'm²', materialpreis: 72.00, az_min: 65, maschinenkosten: 0.80 },
      { id: 'NS003', bezeichnung: 'Granit Platten geflammt 40×40', einheit: 'm²', materialpreis: 68.00, az_min: 55, maschinenkosten: 0.80 },
      { id: 'NS004', bezeichnung: 'Granit Platten poliert 60×60', einheit: 'm²', materialpreis: 88.00, az_min: 60, maschinenkosten: 0.80 },
      { id: 'NS005', bezeichnung: 'Sandstein Platten 40×40', einheit: 'm²', materialpreis: 48.00, az_min: 50, maschinenkosten: 0.50 },
      { id: 'NS006', bezeichnung: 'Sandstein Platten gesägt 60×40', einheit: 'm²', materialpreis: 58.00, az_min: 55, maschinenkosten: 0.50 },
      { id: 'NS007', bezeichnung: 'Schiefer Platten 40×40', einheit: 'm²', materialpreis: 58.00, az_min: 55, maschinenkosten: 0.50 },
      { id: 'NS008', bezeichnung: 'Basalt Platten 40×40', einheit: 'm²', materialpreis: 75.00, az_min: 58, maschinenkosten: 0.80 },
      { id: 'NS009', bezeichnung: 'Trittplatten Naturstein setzen', einheit: 'Stk', materialpreis: 28.00, az_min: 20, maschinenkosten: 0.00 },
      { id: 'NS010', bezeichnung: 'Naturstein Opus-Incertum (Bruchstein)', einheit: 'm²', materialpreis: 62.00, az_min: 80, maschinenkosten: 0.80 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Pflasterbau – Schneiden & Sondertechniken
  // ═════════════════════════════════════════════════════════
  {
    id: 'schneiden_sondertechniken',
    name: 'Schneiden & Sondertechniken',
    gewerk: 'Pflasterbau',
    positionen: [
      { id: 'SC001', bezeichnung: 'Nassschneiden Betonpflaster 6 cm', einheit: 'lfm', materialpreis: 0.50, az_min: 6, maschinenkosten: 1.50 },
      { id: 'SC002', bezeichnung: 'Nassschneiden Betonpflaster 8–10 cm', einheit: 'lfm', materialpreis: 0.80, az_min: 8, maschinenkosten: 2.00 },
      { id: 'SC003', bezeichnung: 'Nassschneiden Betonplatten 5 cm', einheit: 'lfm', materialpreis: 0.80, az_min: 8, maschinenkosten: 2.00 },
      { id: 'SC004', bezeichnung: 'Nassschneiden Feinsteinzeug', einheit: 'lfm', materialpreis: 1.20, az_min: 10, maschinenkosten: 2.50 },
      { id: 'SC005', bezeichnung: 'Nassschneiden Naturstein bis 4 cm', einheit: 'lfm', materialpreis: 1.50, az_min: 12, maschinenkosten: 3.00 },
      { id: 'SC006', bezeichnung: 'Nassschneiden Naturstein 5–8 cm', einheit: 'lfm', materialpreis: 2.20, az_min: 16, maschinenkosten: 3.50 },
      { id: 'SC007', bezeichnung: 'Schräg-/Formschnitt Aufschlag', einheit: 'Stk', materialpreis: 0.50, az_min: 5, maschinenkosten: 1.00 },
      { id: 'SC008', bezeichnung: 'Abrütteln Pflasterfläche', einheit: 'm²', materialpreis: 0.00, az_min: 2, maschinenkosten: 1.20 },
      { id: 'SC009', bezeichnung: 'Abkehren nach Abrütteln', einheit: 'm²', materialpreis: 0.60, az_min: 2, maschinenkosten: 0.00 },
      { id: 'SC010', bezeichnung: 'Absanden, 2. Rütteldurchgang', einheit: 'm²', materialpreis: 0.50, az_min: 3, maschinenkosten: 1.20 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Pflasterbau – Einfassungen & Borde
  // ═════════════════════════════════════════════════════════
  {
    id: 'einfassungen_borde',
    name: 'Einfassungen & Borde',
    gewerk: 'Pflasterbau',
    positionen: [
      { id: 'EF001', bezeichnung: 'Betonbord 100/20/6 cm mit Betonrücken', einheit: 'lfm', materialpreis: 5.00, az_min: 16, maschinenkosten: 0.50 },
      { id: 'EF002', bezeichnung: 'Betonbord 100/25/8 cm mit Betonrücken', einheit: 'lfm', materialpreis: 6.50, az_min: 18, maschinenkosten: 0.50 },
      { id: 'EF003', bezeichnung: 'Betonbord 100/30/8 cm mit Betonrücken', einheit: 'lfm', materialpreis: 8.00, az_min: 20, maschinenkosten: 0.50 },
      { id: 'EF004', bezeichnung: 'Tiefbord 100/30/15 cm setzen', einheit: 'lfm', materialpreis: 9.50, az_min: 22, maschinenkosten: 0.50 },
      { id: 'EF005', bezeichnung: 'Tiefbord 100/30/18 cm setzen', einheit: 'lfm', materialpreis: 11.00, az_min: 25, maschinenkosten: 0.50 },
      { id: 'EF006', bezeichnung: 'Granitzeile 8×8×30 cm setzen', einheit: 'lfm', materialpreis: 9.00, az_min: 20, maschinenkosten: 0.00 },
      { id: 'EF007', bezeichnung: 'Granitzeile 10×10×30 cm setzen', einheit: 'lfm', materialpreis: 12.00, az_min: 22, maschinenkosten: 0.00 },
      { id: 'EF008', bezeichnung: 'Granitzeile 12×12×30 cm setzen', einheit: 'lfm', materialpreis: 16.00, az_min: 25, maschinenkosten: 0.00 },
      { id: 'EF009', bezeichnung: 'Porphyr Zeile setzen', einheit: 'lfm', materialpreis: 14.00, az_min: 22, maschinenkosten: 0.00 },
      { id: 'EF010', bezeichnung: 'Stahlband 3 mm einsetzen', einheit: 'lfm', materialpreis: 3.80, az_min: 10, maschinenkosten: 0.00 },
      { id: 'EF011', bezeichnung: 'Stahlband 5 mm hochkant', einheit: 'lfm', materialpreis: 5.50, az_min: 12, maschinenkosten: 0.00 },
      { id: 'EF012', bezeichnung: 'Cortenstahl 3 mm setzen', einheit: 'lfm', materialpreis: 18.00, az_min: 15, maschinenkosten: 0.00 },
      { id: 'EF013', bezeichnung: 'Kunststoff-Rasenkante 5 cm', einheit: 'lfm', materialpreis: 2.20, az_min: 7, maschinenkosten: 0.00 },
      { id: 'EF014', bezeichnung: 'Kunststoff-Rasenkante 10 cm', einheit: 'lfm', materialpreis: 3.50, az_min: 8, maschinenkosten: 0.00 },
      { id: 'EF015', bezeichnung: 'Rückenstütze Beton herstellen', einheit: 'lfm', materialpreis: 3.00, az_min: 12, maschinenkosten: 0.00 },
      { id: 'EF016', bezeichnung: 'Betonbord aufreißen und entsorgen', einheit: 'lfm', materialpreis: 2.00, az_min: 8, maschinenkosten: 0.50 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Pflasterbau – Verfugung
  // ═════════════════════════════════════════════════════════
  {
    id: 'verfugung',
    name: 'Verfugung',
    gewerk: 'Pflasterbau',
    positionen: [
      { id: 'VF001', bezeichnung: 'Quarzsand einkehren', einheit: 'm²', materialpreis: 0.60, az_min: 3, maschinenkosten: 0.00 },
      { id: 'VF002', bezeichnung: 'Brechsand 0/2 einkehren', einheit: 'm²', materialpreis: 0.90, az_min: 3, maschinenkosten: 0.00 },
      { id: 'VF003', bezeichnung: 'Zementstabilisierter Fugensand trocken', einheit: 'm²', materialpreis: 2.80, az_min: 5, maschinenkosten: 0.00 },
      { id: 'VF004', bezeichnung: 'Pflasterfugenmörtel Typ I', einheit: 'm²', materialpreis: 6.50, az_min: 12, maschinenkosten: 0.00 },
      { id: 'VF005', bezeichnung: 'Pflasterfugenmörtel Typ II (Polymer)', einheit: 'm²', materialpreis: 8.50, az_min: 15, maschinenkosten: 0.00 },
      { id: 'VF006', bezeichnung: 'Epoxidharzfugenmörtel (2K)', einheit: 'm²', materialpreis: 20.00, az_min: 22, maschinenkosten: 0.00 },
      { id: 'VF007', bezeichnung: 'Wasserdurchlässiger Fugenmörtel', einheit: 'm²', materialpreis: 10.00, az_min: 16, maschinenkosten: 0.00 },
      { id: 'VF008', bezeichnung: 'Fugenmörtel Feinsteinzeug/Platten', einheit: 'm²', materialpreis: 6.00, az_min: 14, maschinenkosten: 0.00 },
      { id: 'VF009', bezeichnung: 'Silikon-Anschlussfuge', einheit: 'lfm', materialpreis: 2.00, az_min: 5, maschinenkosten: 0.00 },
      { id: 'VF010', bezeichnung: 'Fugen auskratzen (Vorbereitung)', einheit: 'm²', materialpreis: 0.00, az_min: 8, maschinenkosten: 0.00 },
      { id: 'VF011', bezeichnung: 'Naturstein-Fugenmörtel', einheit: 'm²', materialpreis: 9.50, az_min: 18, maschinenkosten: 0.00 },
      { id: 'VF012', bezeichnung: 'Bewegungsfuge Bitumenband', einheit: 'lfm', materialpreis: 3.50, az_min: 6, maschinenkosten: 0.00 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Pflasterbau – Entwässerung & Drainage
  // ═════════════════════════════════════════════════════════
  {
    id: 'entwaesserung_drainage',
    name: 'Entwässerung & Drainage',
    gewerk: 'Pflasterbau',
    positionen: [
      { id: 'EN001', bezeichnung: 'Drainage DN100 PP verlegen', einheit: 'lfm', materialpreis: 7.00, az_min: 18, maschinenkosten: 2.00 },
      { id: 'EN002', bezeichnung: 'Drainage DN150 PP verlegen', einheit: 'lfm', materialpreis: 11.00, az_min: 22, maschinenkosten: 2.50 },
      { id: 'EN003', bezeichnung: 'Drainagematte 8 mm verlegen', einheit: 'm²', materialpreis: 5.50, az_min: 7, maschinenkosten: 0.00 },
      { id: 'EN004', bezeichnung: 'Drainagematte 15 mm verlegen', einheit: 'm²', materialpreis: 7.50, az_min: 8, maschinenkosten: 0.00 },
      { id: 'EN005', bezeichnung: 'Entwässerungsrinne ACO DN100', einheit: 'lfm', materialpreis: 22.00, az_min: 25, maschinenkosten: 2.00 },
      { id: 'EN006', bezeichnung: 'Entwässerungsrinne ACO DN150', einheit: 'lfm', materialpreis: 32.00, az_min: 30, maschinenkosten: 2.50 },
      { id: 'EN007', bezeichnung: 'Entwässerungsrinne Beetbord-System', einheit: 'lfm', materialpreis: 18.00, az_min: 20, maschinenkosten: 1.50 },
      { id: 'EN008', bezeichnung: 'Gully DN300 setzen und anschließen', einheit: 'Stk', materialpreis: 42.00, az_min: 45, maschinenkosten: 3.00 },
      { id: 'EN009', bezeichnung: 'Schlammfang DN300 setzen', einheit: 'Stk', materialpreis: 78.00, az_min: 60, maschinenkosten: 3.00 },
      { id: 'EN010', bezeichnung: 'Revisionsschacht DN315 setzen', einheit: 'Stk', materialpreis: 120.00, az_min: 75, maschinenkosten: 3.50 },
      { id: 'EN011', bezeichnung: 'Rigolenkörper setzen', einheit: 'Stk', materialpreis: 85.00, az_min: 60, maschinenkosten: 3.00 },
      { id: 'EN012', bezeichnung: 'Drainage an Vorfluter anschließen', einheit: 'Psch', materialpreis: 25.00, az_min: 45, maschinenkosten: 0.00 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Maschinen & Geräte
  // ═════════════════════════════════════════════════════════
  {
    id: 'maschinen_geraete',
    name: 'Maschinen & Geräte',
    gewerk: 'Maschinen & Geräte',
    positionen: [
      { id: 'MA001', bezeichnung: 'Minibagger 1,5 t – Bedienen', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 55.00 },
      { id: 'MA002', bezeichnung: 'Minibagger 2,5 t – Bedienen', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 68.00 },
      { id: 'MA003', bezeichnung: 'Minibagger 4,0 t – Bedienen', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 78.00 },
      { id: 'MA004', bezeichnung: 'Radlader 2–3 t – Bedienen', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 72.00 },
      { id: 'MA005', bezeichnung: 'Bobcat/Kompaktlader – Bedienen', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 65.00 },
      { id: 'MA006', bezeichnung: 'Rüttelplatte 80 kg', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 6.00 },
      { id: 'MA007', bezeichnung: 'Rüttelplatte 250 kg', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 12.00 },
      { id: 'MA008', bezeichnung: 'Rüttelstampfer', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 8.00 },
      { id: 'MA009', bezeichnung: 'Sprinter/Kleintransporter', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 28.00 },
      { id: 'MA010', bezeichnung: 'LKW 3,5 t Kipper', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 48.00 },
      { id: 'MA011', bezeichnung: 'Anhänger 3,5 t', einheit: 'Tag', materialpreis: 0.00, az_min: 0, maschinenkosten: 45.00 },
      { id: 'MA012', bezeichnung: 'Betonmischer 150 l', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 3.50 },
      { id: 'MA013', bezeichnung: 'An-/Abfahrt Maschinenverladung', einheit: 'Psch', materialpreis: 85.00, az_min: 60, maschinenkosten: 0.00 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Grünarbeiten – Pflanzarbeiten
  // ═════════════════════════════════════════════════════════
  {
    id: 'pflanzarbeiten',
    name: 'Pflanzarbeiten',
    gewerk: 'Grünarbeiten',
    positionen: [
      { id: 'P001', bezeichnung: 'Staude pflanzen (0,5 l Topf)', einheit: 'Stk', materialpreis: 5.50, az_min: 7, maschinenkosten: 0.00 },
      { id: 'P002', bezeichnung: 'Staude pflanzen (1–2 l Topf)', einheit: 'Stk', materialpreis: 8.00, az_min: 10, maschinenkosten: 0.00 },
      { id: 'P003', bezeichnung: 'Rose pflanzen (3–5 l Container)', einheit: 'Stk', materialpreis: 12.00, az_min: 15, maschinenkosten: 0.00 },
      { id: 'P004', bezeichnung: 'Strauch pflanzen bis 40 cm', einheit: 'Stk', materialpreis: 8.50, az_min: 15, maschinenkosten: 0.00 },
      { id: 'P005', bezeichnung: 'Strauch pflanzen bis 60 cm', einheit: 'Stk', materialpreis: 14.00, az_min: 20, maschinenkosten: 0.00 },
      { id: 'P006', bezeichnung: 'Strauch pflanzen 60–120 cm', einheit: 'Stk', materialpreis: 26.00, az_min: 28, maschinenkosten: 0.00 },
      { id: 'P007', bezeichnung: 'Strauch pflanzen über 120 cm', einheit: 'Stk', materialpreis: 45.00, az_min: 40, maschinenkosten: 0.50 },
      { id: 'P008', bezeichnung: 'Hecke pflanzen einreihig bis 60 cm', einheit: 'lfm', materialpreis: 14.00, az_min: 20, maschinenkosten: 0.00 },
      { id: 'P009', bezeichnung: 'Hecke pflanzen einreihig bis 120 cm', einheit: 'lfm', materialpreis: 22.00, az_min: 28, maschinenkosten: 0.00 },
      { id: 'P010', bezeichnung: 'Hecke pflanzen zweireihig', einheit: 'lfm', materialpreis: 32.00, az_min: 40, maschinenkosten: 0.00 },
      { id: 'P011', bezeichnung: 'Baum pflanzen bis 3 m (Bal.)', einheit: 'Stk', materialpreis: 85.00, az_min: 60, maschinenkosten: 3.00 },
      { id: 'P012', bezeichnung: 'Baum pflanzen 3–6 m (Bal.)', einheit: 'Stk', materialpreis: 180.00, az_min: 90, maschinenkosten: 5.00 },
      { id: 'P013', bezeichnung: 'Baum pflanzen StU 14–16 cm (Bal.)', einheit: 'Stk', materialpreis: 280.00, az_min: 120, maschinenkosten: 8.00 },
      { id: 'P014', bezeichnung: 'Pflanzpfahl 2,5 m setzen', einheit: 'Stk', materialpreis: 6.50, az_min: 12, maschinenkosten: 0.00 },
      { id: 'P015', bezeichnung: 'Dreibock setzen', einheit: 'Stk', materialpreis: 18.00, az_min: 25, maschinenkosten: 0.00 },
      { id: 'P016', bezeichnung: 'Beet anlegen inkl. Substrat 20 cm', einheit: 'm²', materialpreis: 22.00, az_min: 35, maschinenkosten: 0.80 },
      { id: 'P017', bezeichnung: 'Pflanzerde einarbeiten 15 cm', einheit: 'm²', materialpreis: 8.50, az_min: 10, maschinenkosten: 0.80 },
      { id: 'P018', bezeichnung: 'Zwiebeln pflanzen', einheit: 'Stk', materialpreis: 0.40, az_min: 2, maschinenkosten: 0.00 },
      { id: 'P019', bezeichnung: 'Kletterpflanze pflanzen und anleiten', einheit: 'Stk', materialpreis: 14.00, az_min: 20, maschinenkosten: 0.00 },
      { id: 'P020', bezeichnung: 'Bewässerungskorb einbauen', einheit: 'Stk', materialpreis: 12.00, az_min: 10, maschinenkosten: 0.00 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Grünarbeiten – Rasenflächen
  // ═════════════════════════════════════════════════════════
  {
    id: 'rasenflaechen',
    name: 'Rasenflächen',
    gewerk: 'Grünarbeiten',
    positionen: [
      { id: 'R001', bezeichnung: 'Rasen ansäen – Fein-Rasen', einheit: 'm²', materialpreis: 1.20, az_min: 4, maschinenkosten: 0.30 },
      { id: 'R002', bezeichnung: 'Rasen ansäen – Gebrauchs-Rasen', einheit: 'm²', materialpreis: 0.90, az_min: 4, maschinenkosten: 0.30 },
      { id: 'R003', bezeichnung: 'Rasen ansäen – Schatten-Rasen', einheit: 'm²', materialpreis: 1.40, az_min: 4, maschinenkosten: 0.30 },
      { id: 'R004', bezeichnung: 'Rollrasen legen Standard', einheit: 'm²', materialpreis: 7.50, az_min: 6, maschinenkosten: 0.30 },
      { id: 'R005', bezeichnung: 'Rollrasen legen Premium Sport', einheit: 'm²', materialpreis: 12.00, az_min: 7, maschinenkosten: 0.30 },
      { id: 'R006', bezeichnung: 'Rasenfläche mähen', einheit: 'm²', materialpreis: 0.00, az_min: 2, maschinenkosten: 0.40 },
      { id: 'R007', bezeichnung: 'Rasenkanten stechen', einheit: 'lfm', materialpreis: 0.00, az_min: 3, maschinenkosten: 0.00 },
      { id: 'R008', bezeichnung: 'Rasen vertikutieren', einheit: 'm²', materialpreis: 0.00, az_min: 2, maschinenkosten: 0.50 },
      { id: 'R009', bezeichnung: 'Rasen belüften (Aerifizieren)', einheit: 'm²', materialpreis: 0.00, az_min: 2, maschinenkosten: 0.50 },
      { id: 'R010', bezeichnung: 'Rasen nachsäen', einheit: 'm²', materialpreis: 0.80, az_min: 3, maschinenkosten: 0.00 },
      { id: 'R011', bezeichnung: 'Rasen düngen (Langzeitdünger)', einheit: 'm²', materialpreis: 0.55, az_min: 1, maschinenkosten: 0.00 },
      { id: 'R012', bezeichnung: 'Magerrasen/Blumenwiese ansäen', einheit: 'm²', materialpreis: 1.80, az_min: 5, maschinenkosten: 0.30 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Grünarbeiten – Gehölzpflege
  // ═════════════════════════════════════════════════════════
  {
    id: 'gehoelzpflege',
    name: 'Gehölzpflege',
    gewerk: 'Grünarbeiten',
    positionen: [
      { id: 'G001', bezeichnung: 'Heckenschnitt bis 1 m Höhe', einheit: 'lfm', materialpreis: 0.00, az_min: 8, maschinenkosten: 0.50 },
      { id: 'G002', bezeichnung: 'Heckenschnitt 1–2 m Höhe', einheit: 'lfm', materialpreis: 0.00, az_min: 12, maschinenkosten: 0.80 },
      { id: 'G003', bezeichnung: 'Heckenschnitt 2–3 m Höhe', einheit: 'lfm', materialpreis: 0.00, az_min: 18, maschinenkosten: 1.00 },
      { id: 'G004', bezeichnung: 'Heckenschnitt über 3 m', einheit: 'lfm', materialpreis: 0.00, az_min: 28, maschinenkosten: 1.50 },
      { id: 'G005', bezeichnung: 'Strauch schneiden/formen klein', einheit: 'Stk', materialpreis: 0.00, az_min: 15, maschinenkosten: 0.50 },
      { id: 'G006', bezeichnung: 'Strauch schneiden/formen groß', einheit: 'Stk', materialpreis: 0.00, az_min: 30, maschinenkosten: 1.00 },
      { id: 'G007', bezeichnung: 'Baum schneiden bis 3 m', einheit: 'Stk', materialpreis: 0.00, az_min: 30, maschinenkosten: 0.50 },
      { id: 'G008', bezeichnung: 'Baum schneiden bis 5 m', einheit: 'Stk', materialpreis: 0.00, az_min: 50, maschinenkosten: 1.00 },
      { id: 'G009', bezeichnung: 'Totholz aus Krone entfernen', einheit: 'h', materialpreis: 0.00, az_min: 60, maschinenkosten: 1.00 },
      { id: 'G010', bezeichnung: 'Gehölz roden bis 15 cm Stammumfang', einheit: 'Stk', materialpreis: 0.00, az_min: 20, maschinenkosten: 3.00 },
      { id: 'G011', bezeichnung: 'Gehölz roden bis 60 cm Stammumfang', einheit: 'Stk', materialpreis: 0.00, az_min: 35, maschinenkosten: 8.00 },
      { id: 'G012', bezeichnung: 'Baumstumpf fräsen bis 40 cm', einheit: 'Stk', materialpreis: 0.00, az_min: 45, maschinenkosten: 15.00 },
      { id: 'G013', bezeichnung: 'Schnittgut häckseln', einheit: 'm³', materialpreis: 0.00, az_min: 15, maschinenkosten: 5.00 },
      { id: 'G014', bezeichnung: 'Grünschnittentsorgung', einheit: 'm³', materialpreis: 18.00, az_min: 10, maschinenkosten: 0.00 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Grünarbeiten – Mulch & Schüttgüter
  // ═════════════════════════════════════════════════════════
  {
    id: 'mulch_schuettgueter',
    name: 'Mulch & Schüttgüter',
    gewerk: 'Grünarbeiten',
    positionen: [
      { id: 'MU001', bezeichnung: 'Rindenmulch 5 cm ausbringen', einheit: 'm²', materialpreis: 3.80, az_min: 5, maschinenkosten: 0.50 },
      { id: 'MU002', bezeichnung: 'Rindenmulch 8 cm ausbringen', einheit: 'm²', materialpreis: 6.00, az_min: 7, maschinenkosten: 0.50 },
      { id: 'MU003', bezeichnung: 'Holzhackschnitzel 8 cm', einheit: 'm²', materialpreis: 2.80, az_min: 5, maschinenkosten: 0.50 },
      { id: 'MU004', bezeichnung: 'Kies/Split 8–16 mm, 5 cm', einheit: 'm²', materialpreis: 8.50, az_min: 7, maschinenkosten: 0.80 },
      { id: 'MU005', bezeichnung: 'Kies/Split 8–16 mm, 8 cm', einheit: 'm²', materialpreis: 13.00, az_min: 9, maschinenkosten: 0.80 },
      { id: 'MU006', bezeichnung: 'Lava-Granulat 8–16 mm, 5 cm', einheit: 'm²', materialpreis: 13.00, az_min: 7, maschinenkosten: 0.80 },
      { id: 'MU007', bezeichnung: 'Kompost einarbeiten 5 cm', einheit: 'm²', materialpreis: 4.50, az_min: 6, maschinenkosten: 0.80 },
      { id: 'MU008', bezeichnung: 'Unkrautvlies verlegen', einheit: 'm²', materialpreis: 1.10, az_min: 4, maschinenkosten: 0.00 },
      { id: 'MU009', bezeichnung: 'Dekorsteine 20–60 cm setzen', einheit: 'Stk', materialpreis: 35.00, az_min: 20, maschinenkosten: 2.00 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Bewässerung
  // ═════════════════════════════════════════════════════════
  {
    id: 'bewaesserung',
    name: 'Bewässerung',
    gewerk: 'Bewässerung',
    positionen: [
      { id: 'BW001', bezeichnung: 'Tropfschlauch 16 mm verlegen', einheit: 'lfm', materialpreis: 1.80, az_min: 5, maschinenkosten: 0.00 },
      { id: 'BW002', bezeichnung: 'Tropfschlauch 20 mm verlegen', einheit: 'lfm', materialpreis: 2.50, az_min: 5, maschinenkosten: 0.00 },
      { id: 'BW003', bezeichnung: 'Versenkregner setzen (Rasen)', einheit: 'Stk', materialpreis: 22.00, az_min: 22, maschinenkosten: 0.00 },
      { id: 'BW004', bezeichnung: 'Sprühdüse setzen (Beet)', einheit: 'Stk', materialpreis: 12.00, az_min: 15, maschinenkosten: 0.00 },
      { id: 'BW005', bezeichnung: 'PE-Rohr 25 mm verlegen', einheit: 'lfm', materialpreis: 1.60, az_min: 8, maschinenkosten: 0.00 },
      { id: 'BW006', bezeichnung: 'PE-Rohr 32 mm verlegen', einheit: 'lfm', materialpreis: 2.20, az_min: 10, maschinenkosten: 0.00 },
      { id: 'BW007', bezeichnung: 'Steuerventil DN20 einbauen', einheit: 'Stk', materialpreis: 35.00, az_min: 30, maschinenkosten: 0.00 },
      { id: 'BW008', bezeichnung: 'Ventilkasten/Schacht einbauen', einheit: 'Stk', materialpreis: 55.00, az_min: 45, maschinenkosten: 0.00 },
      { id: 'BW009', bezeichnung: 'Steuereinheit einrichten', einheit: 'Stk', materialpreis: 120.00, az_min: 60, maschinenkosten: 0.00 },
      { id: 'BW010', bezeichnung: 'Anschluss an Wasserzähler', einheit: 'Stk', materialpreis: 45.00, az_min: 40, maschinenkosten: 0.00 },
      { id: 'BW011', bezeichnung: 'Bewässerung winterfest machen', einheit: 'Psch', materialpreis: 0.00, az_min: 45, maschinenkosten: 0.00 },
      { id: 'BW012', bezeichnung: 'Bewässerung Inbetriebnahme', einheit: 'Psch', materialpreis: 0.00, az_min: 30, maschinenkosten: 0.00 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Gartenhaus (holzbau) – Ständerwerk & Beplankung
  // ═════════════════════════════════════════════════════════
  {
    id: 'staenderwerk_beplankung',
    name: 'Ständerwerk & Beplankung',
    gewerk: 'Gartenhaus (holzbau)',
    positionen: [
      { id: 'GH001', bezeichnung: 'Eckständer KVH 100/100 mm', einheit: 'lfm', materialpreis: 8.50, az_min: 15, maschinenkosten: 0.00 },
      { id: 'GH002', bezeichnung: 'Wandständer KVH 60/120 mm', einheit: 'lfm', materialpreis: 5.20, az_min: 12, maschinenkosten: 0.00 },
      { id: 'GH003', bezeichnung: 'Schwelle/Fußschwelle KVH 60/120 mm, imprägniert', einheit: 'lfm', materialpreis: 6.80, az_min: 14, maschinenkosten: 0.00 },
      { id: 'GH004', bezeichnung: 'Rähm/Kopfschwelle KVH 60/120 mm', einheit: 'lfm', materialpreis: 5.20, az_min: 12, maschinenkosten: 0.00 },
      { id: 'GH005', bezeichnung: 'Dachbalken KVH 60/200 mm', einheit: 'lfm', materialpreis: 9.50, az_min: 16, maschinenkosten: 0.00 },
      { id: 'GH006', bezeichnung: 'OSB-Beplankung 22 mm verlegen', einheit: 'm²', materialpreis: 14.00, az_min: 12, maschinenkosten: 0.00 },
      { id: 'GH007', bezeichnung: 'Fenster-/Türlaibung verkleiden', einheit: 'lfm', materialpreis: 6.00, az_min: 18, maschinenkosten: 0.00 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Gartenhaus (holzbau) – Öffnungen
  // ═════════════════════════════════════════════════════════
  {
    id: 'oeffnungen',
    name: 'Öffnungen',
    gewerk: 'Gartenhaus (holzbau)',
    positionen: [
      { id: 'GH010', bezeichnung: 'Fenster Kunststoff 100×100 cm einbauen', einheit: 'Stk', materialpreis: 320.00, az_min: 90, maschinenkosten: 0.00 },
      { id: 'GH011', bezeichnung: 'Tür Holz einflügelig einbauen', einheit: 'Stk', materialpreis: 650.00, az_min: 120, maschinenkosten: 0.00 },
    ],
  },

  // ═════════════════════════════════════════════════════════
  // GEWERK: Gartenhaus (holzbau) – Flachdach-Gründach
  // ═════════════════════════════════════════════════════════
  {
    id: 'flachdach_gruendach',
    name: 'Flachdach-Gründach',
    gewerk: 'Gartenhaus (holzbau)',
    positionen: [
      { id: 'GH020', bezeichnung: 'Dachschalung OSB 22 mm', einheit: 'm²', materialpreis: 15.00, az_min: 10, maschinenkosten: 0.00 },
      { id: 'GH021', bezeichnung: 'Gefälledämmung EPS im Mittel 60–160 mm', einheit: 'm²', materialpreis: 28.00, az_min: 8, maschinenkosten: 0.00 },
      { id: 'GH022', bezeichnung: 'Abdichtung/Wurzelschutzbahn verlegen', einheit: 'm²', materialpreis: 18.00, az_min: 10, maschinenkosten: 0.00 },
      { id: 'GH023', bezeichnung: 'Dränageplatte 25 mm verlegen', einheit: 'm²', materialpreis: 9.00, az_min: 6, maschinenkosten: 0.00 },
      { id: 'GH024', bezeichnung: 'Filtervlies verlegen', einheit: 'm²', materialpreis: 2.20, az_min: 4, maschinenkosten: 0.00 },
      { id: 'GH025', bezeichnung: 'Extensivsubstrat 10 cm einbauen', einheit: 'm²', materialpreis: 14.00, az_min: 8, maschinenkosten: 1.50 },
      { id: 'GH026', bezeichnung: 'Sedum-Vegetationsmatte verlegen', einheit: 'm²', materialpreis: 16.00, az_min: 6, maschinenkosten: 0.00 },
      { id: 'GH027', bezeichnung: 'Attika/Blechabdeckung montieren', einheit: 'lfm', materialpreis: 24.00, az_min: 20, maschinenkosten: 0.00 },
    ],
  },

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
