# Weinschenck GreenCalc – Kalkulationsdatenbank

**Lohnkostensatz:** 75,00 €/h (Vollkostenansatz inkl. Nebenkosten)  
**MwSt-Satz:** 19 %  
**Stand:** Juni 2026  

**Formel Herstellkosten:**
```
HK = (Menge × Material €/Einh)
   + (Menge × Maschine €/Einh)
   + (Menge × AZ_min/60 × Lohnkostensatz)
```

**Pflegeregel:**  
Neue Positionen werden ausschließlich in dieser Datei erfasst.  
`npm run update-prices` überträgt die Daten in die App.

---

## Spaltenformat

Alle Tabellen haben folgende Spalten:

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|

- **ID** – eindeutige Positionsnummer (Präfix je Gewerk: E=Erde, T=Tragschicht, BP=Betonpflaster, …)
- **Bezeichnung** – kurzer Leistungstext für die App-Anzeige
- **Einheit** – m², m³, lfm, Stk, h, Psch, Tag
- **Material €/Einh** – Netto-Materialpreis je Einheit (Lieferantenpreis)
- **AZ min/Einh** – Arbeitszeit in Minuten je Einheit (REFA-Richtwert)
- **Maschine €/Einh** – Maschinenkosten je Einheit (Miete + Kraftstoff anteilig)
- **Tags** – Suchbegriffe kommasepariert (Kleinschreibung)

---

## GEWERK: ERDARBEITEN

### Bodenarbeiten

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| E001 | Oberboden auskoffern 20 cm, maschinell | m² | 0,00 | 10 | 2,50 | auskoffern, oberboden, maschinell |
| E002 | Oberboden auskoffern 30 cm, maschinell | m² | 0,00 | 14 | 3,20 | auskoffern, oberboden, maschinell |
| E003 | Oberboden auskoffern 40 cm, maschinell | m² | 0,00 | 18 | 4,00 | auskoffern, oberboden, maschinell |
| E004 | Bodenaushub maschinell abtragen | m³ | 0,00 | 12 | 6,50 | aushub, bagger, maschinell |
| E005 | Bodenaushub händisch abtragen | m³ | 0,00 | 90 | 0,00 | aushub, händisch |
| E006 | Aushub laden und abfahren | m³ | 5,00 | 10 | 8,00 | aushub, transport, lkw |
| E007 | Aushub entsorgen Bodenklasse Z0 | m³ | 28,00 | 5 | 0,00 | entsorgung, aushub, z0 |
| E008 | Aushub entsorgen Bodenklasse Z1.1 | m³ | 58,00 | 5 | 0,00 | entsorgung, aushub, z1 |
| E009 | Aushub entsorgen Bodenklasse Z1.2 | m³ | 90,00 | 5 | 0,00 | entsorgung, aushub, z1 |
| E010 | Aushub entsorgen Bodenklasse Z2 | m³ | 165,00 | 5 | 0,00 | entsorgung, aushub, z2 |
| E011 | Planum herstellen und verdichten | m² | 0,00 | 4 | 1,00 | planum, planieren, verdichten |
| E012 | Oberfläche planieren und abziehen | m² | 0,00 | 3 | 0,80 | planieren, abziehen |
| E013 | Hinterfüllen mit Recyclingschotter | m³ | 16,00 | 15 | 2,50 | hinterfüllen, schotter, verfüllen |
| E014 | Böschung anlegen 1:1 | m² | 0,00 | 8 | 1,50 | böschung, anlegen |
| E015 | Mutterboden sieben und lagern | m³ | 0,00 | 25 | 3,00 | sieben, mutterboden, lagern |

---

## GEWERK: PFLASTERBAU

### Tragschicht & Bettung

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| T001 | Geotextil/Vlies 100 g/m² verlegen | m² | 0,90 | 3 | 0,00 | geotextil, vlies, trennvlies |
| T002 | Geotextil/Vlies 150 g/m² verlegen | m² | 1,40 | 3 | 0,00 | geotextil, vlies |
| T003 | Geotextil/Vlies 300 g/m² verlegen | m² | 2,20 | 4 | 0,00 | geotextil, vlies |
| T004 | Schotter 0/32 einbauen 15 cm | m² | 8,00 | 8 | 2,00 | schotter, tragschicht, 0/32 |
| T005 | Schotter 0/32 einbauen 20 cm | m² | 10,00 | 10 | 2,50 | schotter, tragschicht, 0/32 |
| T006 | Schotter 0/32 einbauen 25 cm | m² | 12,50 | 12 | 3,00 | schotter, tragschicht, 0/32 |
| T007 | Schotter 0/45 einbauen 20 cm | m² | 9,50 | 10 | 2,50 | schotter, tragschicht, 0/45 |
| T008 | Schotter 0/45 einbauen 30 cm | m² | 14,00 | 14 | 3,50 | schotter, tragschicht, 0/45 |
| T009 | Recycling-Schotter 0/45 einbauen 20 cm | m² | 7,50 | 10 | 2,50 | recycling, schotter, tragschicht |
| T010 | Tragschicht verdichten (Rüttelplatte) | m² | 0,00 | 3 | 1,20 | verdichten, rüttelplatte, tragschicht |
| T011 | Frostschutzschicht 20 cm einbauen | m² | 9,50 | 10 | 2,50 | frostschutz, tragschicht |
| T012 | Frostschutzschicht 30 cm einbauen | m² | 13,50 | 13 | 3,00 | frostschutz, tragschicht |
| T013 | Magerbeton C8/10 einbauen 10 cm | m² | 15,00 | 20 | 1,50 | magerbeton, beton, unterbeton |
| T014 | Magerbeton C8/10 einbauen 15 cm | m² | 21,00 | 25 | 2,00 | magerbeton, beton, unterbeton |
| T015 | Splittbettung 0/5 herstellen 3 cm | m² | 2,80 | 5 | 0,00 | splitt, bettung, 0/5 |
| T016 | Splittbettung 0/8 herstellen 4 cm | m² | 3,60 | 6 | 0,00 | splitt, bettung, 0/8 |
| T017 | Sandbettung herstellen 3 cm | m² | 2,20 | 5 | 0,00 | sand, bettung |
| T018 | Sandbettung herstellen 5 cm | m² | 3,50 | 6 | 0,00 | sand, bettung |
| T019 | Mörtelbettung herstellen 3 cm | m² | 4,50 | 10 | 0,00 | mörtel, bettung, mörtelbett |
| T020 | Bettung abziehen, abrichten, wässern | m² | 0,00 | 4 | 0,00 | bettung, abziehen, abrichten |

### Betonpflaster & Klinker

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| BP001 | Betonpflaster 10×10×8 cm (Mosaikoptik) | m² | 22,00 | 55 | 0,50 | betonpflaster, mosaik, 10x10 |
| BP002 | Betonpflaster 20×10×6 cm | m² | 12,00 | 28 | 0,50 | betonpflaster, 20x10 |
| BP003 | Betonpflaster 20×10×8 cm | m² | 14,00 | 28 | 0,50 | betonpflaster, 20x10 |
| BP004 | Betonpflaster 20×10×10 cm (Schwerlast) | m² | 18,00 | 30 | 0,50 | betonpflaster, schwerlast |
| BP005 | Betonpflaster Verbundform 6 cm | m² | 13,00 | 30 | 0,50 | verbundpflaster, betonpflaster |
| BP006 | Betonpflaster Verbundform 8 cm | m² | 16,00 | 32 | 0,50 | verbundpflaster, betonpflaster |
| BP007 | Großsteinklinker Beton 15×15×8 cm | m² | 24,00 | 42 | 0,50 | klinker, großpflaster |
| BP008 | Betonpflaster großformatig 60×40×6 cm | m² | 28,00 | 38 | 0,80 | betonpflaster, großformat |
| BP009 | Klinker Waalformat 21×5×6,5 cm | m² | 32,00 | 55 | 0,50 | klinker, waalformat |
| BP010 | Klinker Langformat 29×9×5,2 cm | m² | 28,00 | 48 | 0,50 | klinker, langformat |
| BP011 | Betonsteinpflaster Antik/Rustikal | m² | 26,00 | 45 | 0,50 | betonpflaster, antik, rustikal |
| BP012 | Pflaster aufreißen und stapeln | m² | 0,00 | 18 | 0,80 | aufreißen, rückbau, pflaster |
| BP013 | Altpflaster wieder verlegen | m² | 0,00 | 35 | 0,50 | altpflaster, recycling, wieder |

### Platten & Beläge

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| PL001 | Betonplatten 40×40×4 cm | m² | 14,00 | 30 | 0,50 | betonplatten, terrasse |
| PL002 | Betonplatten 50×50×5 cm | m² | 18,00 | 28 | 0,50 | betonplatten, terrasse |
| PL003 | Betonplatten 60×40×5 cm | m² | 20,00 | 30 | 0,50 | betonplatten, terrasse |
| PL004 | Betonplatten 80×40×6 cm | m² | 24,00 | 32 | 0,50 | betonplatten, terrasse, großformat |
| PL005 | Feinsteinzeug 60×60×2 cm outdoor | m² | 45,00 | 45 | 0,50 | feinsteinzeug, fliesen, outdoor |
| PL006 | Feinsteinzeug 60×60×3 cm outdoor | m² | 52,00 | 48 | 0,50 | feinsteinzeug, fliesen, outdoor |
| PL007 | Feinsteinzeug 80×80×2 cm outdoor | m² | 58,00 | 52 | 0,50 | feinsteinzeug, großformat, outdoor |
| PL008 | Feinsteinzeug 120×60×2 cm outdoor | m² | 68,00 | 58 | 0,80 | feinsteinzeug, großformat, outdoor |
| PL009 | WPC-Terrassendiele verlegen | m² | 55,00 | 35 | 0,00 | wpc, holz, terrasse, dielen |
| PL010 | Holzterrassendielen Bangkirai | m² | 65,00 | 40 | 0,00 | bangkirai, holz, terrasse, dielen |
| PL011 | Platten aus Lieferbestand wieder verlegen | m² | 0,00 | 35 | 0,50 | altplatten, recycling, wiederverlegung |

### Naturstein

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| NS001 | Granit Pflaster 8/11 cm | m² | 55,00 | 60 | 0,80 | granit, naturstein, pflaster |
| NS002 | Granit Großpflaster 14/18 cm | m² | 72,00 | 65 | 0,80 | granit, naturstein, großpflaster |
| NS003 | Granit Platten geflammt 40×40 | m² | 68,00 | 55 | 0,80 | granit, naturstein, platten |
| NS004 | Granit Platten poliert 60×60 | m² | 88,00 | 60 | 0,80 | granit, naturstein, platten, poliert |
| NS005 | Sandstein Platten 40×40 | m² | 48,00 | 50 | 0,50 | sandstein, naturstein, platten |
| NS006 | Sandstein Platten gesägt 60×40 | m² | 58,00 | 55 | 0,50 | sandstein, naturstein, platten |
| NS007 | Schiefer Platten 40×40 | m² | 58,00 | 55 | 0,50 | schiefer, naturstein, platten |
| NS008 | Basalt Platten 40×40 | m² | 75,00 | 58 | 0,80 | basalt, naturstein, platten |
| NS009 | Trittplatten Naturstein setzen | Stk | 28,00 | 20 | 0,00 | trittplatte, naturstein, einzeln |
| NS010 | Naturstein Opus-Incertum (Bruchstein) | m² | 62,00 | 80 | 0,80 | bruchstein, mosaik, naturstein |

### Schneiden & Sondertechniken

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| SC001 | Nassschneiden Betonpflaster 6 cm | lfm | 0,50 | 6 | 1,50 | nassschneiden, schnitt, pflaster |
| SC002 | Nassschneiden Betonpflaster 8–10 cm | lfm | 0,80 | 8 | 2,00 | nassschneiden, schnitt, pflaster |
| SC003 | Nassschneiden Betonplatten 5 cm | lfm | 0,80 | 8 | 2,00 | nassschneiden, schnitt, platten |
| SC004 | Nassschneiden Feinsteinzeug | lfm | 1,20 | 10 | 2,50 | nassschneiden, schnitt, feinsteinzeug |
| SC005 | Nassschneiden Naturstein bis 4 cm | lfm | 1,50 | 12 | 3,00 | nassschneiden, schnitt, naturstein |
| SC006 | Nassschneiden Naturstein 5–8 cm | lfm | 2,20 | 16 | 3,50 | nassschneiden, schnitt, naturstein |
| SC007 | Schräg-/Formschnitt Aufschlag | Stk | 0,50 | 5 | 1,00 | schrägschnitt, formschnitt |
| SC008 | Abrütteln Pflasterfläche | m² | 0,00 | 2 | 1,20 | abrütteln, rüttelplatte, verdichten |
| SC009 | Abkehren nach Abrütteln | m² | 0,60 | 2 | 0,00 | abkehren, kehren, pflaster |
| SC010 | Absanden, 2. Rütteldurchgang | m² | 0,50 | 3 | 1,20 | absanden, rütteln, pflaster |

### Einfassungen & Borde

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| EF001 | Betonbord 100/20/6 cm mit Betonrücken | lfm | 5,00 | 16 | 0,50 | betonbord, bord, einfassung |
| EF002 | Betonbord 100/25/8 cm mit Betonrücken | lfm | 6,50 | 18 | 0,50 | betonbord, bord, einfassung |
| EF003 | Betonbord 100/30/8 cm mit Betonrücken | lfm | 8,00 | 20 | 0,50 | betonbord, bord, einfassung |
| EF004 | Tiefbord 100/30/15 cm setzen | lfm | 9,50 | 22 | 0,50 | tiefbord, bord, einfassung |
| EF005 | Tiefbord 100/30/18 cm setzen | lfm | 11,00 | 25 | 0,50 | tiefbord, bord, einfassung |
| EF006 | Granitzeile 8×8×30 cm setzen | lfm | 9,00 | 20 | 0,00 | granitzeile, naturstein, einfassung |
| EF007 | Granitzeile 10×10×30 cm setzen | lfm | 12,00 | 22 | 0,00 | granitzeile, naturstein, einfassung |
| EF008 | Granitzeile 12×12×30 cm setzen | lfm | 16,00 | 25 | 0,00 | granitzeile, naturstein, einfassung |
| EF009 | Porphyr Zeile setzen | lfm | 14,00 | 22 | 0,00 | porphyr, naturstein, einfassung |
| EF010 | Stahlband 3 mm einsetzen | lfm | 3,80 | 10 | 0,00 | stahlband, stahl, einfassung |
| EF011 | Stahlband 5 mm hochkant | lfm | 5,50 | 12 | 0,00 | stahlband, stahl, einfassung |
| EF012 | Cortenstahl 3 mm setzen | lfm | 18,00 | 15 | 0,00 | cortenstahl, stahl, einfassung, rost |
| EF013 | Kunststoff-Rasenkante 5 cm | lfm | 2,20 | 7 | 0,00 | rasenkante, kunststoff, einfassung |
| EF014 | Kunststoff-Rasenkante 10 cm | lfm | 3,50 | 8 | 0,00 | rasenkante, kunststoff, einfassung |
| EF015 | Rückenstütze Beton herstellen | lfm | 3,00 | 12 | 0,00 | rückenstütze, beton, bord |
| EF016 | Betonbord aufreißen und entsorgen | lfm | 2,00 | 8 | 0,50 | rückbau, aufreißen, bord |

### Verfugung

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| VF001 | Quarzsand einkehren | m² | 0,60 | 3 | 0,00 | quarzsand, fuge, einkehren |
| VF002 | Brechsand 0/2 einkehren | m² | 0,90 | 3 | 0,00 | brechsand, fuge, einkehren |
| VF003 | Zementstabilisierter Fugensand trocken | m² | 2,80 | 5 | 0,00 | fugensand, zement, verfugung |
| VF004 | Pflasterfugenmörtel Typ I | m² | 6,50 | 12 | 0,00 | fugenmörtel, verfugung, wassergebunden |
| VF005 | Pflasterfugenmörtel Typ II (Polymer) | m² | 8,50 | 15 | 0,00 | fugenmörtel, polymer, verfugung |
| VF006 | Epoxidharzfugenmörtel (2K) | m² | 20,00 | 22 | 0,00 | epoxid, 2k, harz, verfugung |
| VF007 | Wasserdurchlässiger Fugenmörtel | m² | 10,00 | 16 | 0,00 | drainpflaster, wasserdurchlässig, fuge |
| VF008 | Fugenmörtel Feinsteinzeug/Platten | m² | 6,00 | 14 | 0,00 | fugenmörtel, feinsteinzeug, platten |
| VF009 | Silikon-Anschlussfuge | lfm | 2,00 | 5 | 0,00 | silikon, fuge, anschluss |
| VF010 | Fugen auskratzen (Vorbereitung) | m² | 0,00 | 8 | 0,00 | fugen, auskratzen, vorbereitung |
| VF011 | Naturstein-Fugenmörtel | m² | 9,50 | 18 | 0,00 | fugenmörtel, naturstein |
| VF012 | Bewegungsfuge Bitumenband | lfm | 3,50 | 6 | 0,00 | bewegungsfuge, bitumen, fuge |

### Entwässerung & Drainage

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| EN001 | Drainage DN100 PP verlegen | lfm | 7,00 | 18 | 2,00 | drainage, dn100, entwässerung |
| EN002 | Drainage DN150 PP verlegen | lfm | 11,00 | 22 | 2,50 | drainage, dn150, entwässerung |
| EN003 | Drainagematte 8 mm verlegen | m² | 5,50 | 7 | 0,00 | drainagematte, drainage |
| EN004 | Drainagematte 15 mm verlegen | m² | 7,50 | 8 | 0,00 | drainagematte, drainage |
| EN005 | Entwässerungsrinne ACO DN100 | lfm | 22,00 | 25 | 2,00 | rinne, aco, entwässerung, dn100 |
| EN006 | Entwässerungsrinne ACO DN150 | lfm | 32,00 | 30 | 2,50 | rinne, aco, entwässerung, dn150 |
| EN007 | Entwässerungsrinne Beetbord-System | lfm | 18,00 | 20 | 1,50 | rinne, beetbord, entwässerung |
| EN008 | Gully DN300 setzen und anschließen | Stk | 42,00 | 45 | 3,00 | gully, dn300, entwässerung |
| EN009 | Schlammfang DN300 setzen | Stk | 78,00 | 60 | 3,00 | schlammfang, schacht |
| EN010 | Revisionsschacht DN315 setzen | Stk | 120,00 | 75 | 3,50 | revisionsschacht, schacht, dn315 |
| EN011 | Rigolenkörper setzen | Stk | 85,00 | 60 | 3,00 | rigole, rigolenkörper, schacht |
| EN012 | Drainage an Vorfluter anschließen | Psch | 25,00 | 45 | 0,00 | anschluss, vorfluter, drainage |

---

## GEWERK: MASCHINEN & GERÄTE

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| MA001 | Minibagger 1,5 t – Bedienen | h | 0,00 | 60 | 55,00 | minibagger, bagger, maschine |
| MA002 | Minibagger 2,5 t – Bedienen | h | 0,00 | 60 | 68,00 | minibagger, bagger, maschine |
| MA003 | Minibagger 4,0 t – Bedienen | h | 0,00 | 60 | 78,00 | minibagger, bagger, maschine |
| MA004 | Radlader 2–3 t – Bedienen | h | 0,00 | 60 | 72,00 | radlader, maschine |
| MA005 | Bobcat/Kompaktlader – Bedienen | h | 0,00 | 60 | 65,00 | bobcat, kompaktlader, maschine |
| MA006 | Rüttelplatte 80 kg | h | 0,00 | 60 | 6,00 | rüttelplatte, verdichten, maschine |
| MA007 | Rüttelplatte 250 kg | h | 0,00 | 60 | 12,00 | rüttelplatte, verdichten, maschine |
| MA008 | Rüttelstampfer | h | 0,00 | 60 | 8,00 | rüttelstampfer, verdichten, maschine |
| MA009 | Sprinter/Kleintransporter | h | 0,00 | 60 | 28,00 | sprinter, transport, fahrzeug |
| MA010 | LKW 3,5 t Kipper | h | 0,00 | 60 | 48,00 | lkw, kipper, transport, fahrzeug |
| MA011 | Anhänger 3,5 t | Tag | 0,00 | 0 | 45,00 | anhänger, transport |
| MA012 | Betonmischer 150 l | h | 0,00 | 60 | 3,50 | betonmischer, beton, maschine |
| MA013 | An-/Abfahrt Maschinenverladung | Psch | 85,00 | 60 | 0,00 | anfahrt, transport, verladung |

---

## GEWERK: GRÜNARBEITEN

### Pflanzarbeiten

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| P001 | Staude pflanzen (0,5 l Topf) | Stk | 5,50 | 7 | 0,00 | staude, pflanzen, beet |
| P002 | Staude pflanzen (1–2 l Topf) | Stk | 8,00 | 10 | 0,00 | staude, pflanzen, beet |
| P003 | Rose pflanzen (3–5 l Container) | Stk | 12,00 | 15 | 0,00 | rose, pflanzen |
| P004 | Strauch pflanzen bis 40 cm | Stk | 8,50 | 15 | 0,00 | strauch, pflanzen |
| P005 | Strauch pflanzen bis 60 cm | Stk | 14,00 | 20 | 0,00 | strauch, pflanzen |
| P006 | Strauch pflanzen 60–120 cm | Stk | 26,00 | 28 | 0,00 | strauch, pflanzen |
| P007 | Strauch pflanzen über 120 cm | Stk | 45,00 | 40 | 0,50 | strauch, pflanzen, groß |
| P008 | Hecke pflanzen einreihig bis 60 cm | lfm | 14,00 | 20 | 0,00 | hecke, pflanzen |
| P009 | Hecke pflanzen einreihig bis 120 cm | lfm | 22,00 | 28 | 0,00 | hecke, pflanzen |
| P010 | Hecke pflanzen zweireihig | lfm | 32,00 | 40 | 0,00 | hecke, pflanzen, zweireihig |
| P011 | Baum pflanzen bis 3 m (Bal.) | Stk | 85,00 | 60 | 3,00 | baum, pflanzen, ballenware |
| P012 | Baum pflanzen 3–6 m (Bal.) | Stk | 180,00 | 90 | 5,00 | baum, pflanzen, groß, ballenware |
| P013 | Baum pflanzen StU 14–16 cm (Bal.) | Stk | 280,00 | 120 | 8,00 | baum, hochstamm, ballenware |
| P014 | Pflanzpfahl 2,5 m setzen | Stk | 6,50 | 12 | 0,00 | pfahl, baum, stütze |
| P015 | Dreibock setzen | Stk | 18,00 | 25 | 0,00 | dreibock, baum, stütze |
| P016 | Beet anlegen inkl. Substrat 20 cm | m² | 22,00 | 35 | 0,80 | beet, substrat, anlegen |
| P017 | Pflanzerde einarbeiten 15 cm | m² | 8,50 | 10 | 0,80 | pflanzerde, substrat, einarbeiten |
| P018 | Zwiebeln pflanzen | Stk | 0,40 | 2 | 0,00 | zwiebeln, pflanzen, beet |
| P019 | Kletterpflanze pflanzen und anleiten | Stk | 14,00 | 20 | 0,00 | kletterpflanze, pflanzen, anleiten |
| P020 | Bewässerungskorb einbauen | Stk | 12,00 | 10 | 0,00 | bewässerungskorb, baum, pflanzkorb |

### Rasenflächen

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| R001 | Rasen ansäen – Fein-Rasen | m² | 1,20 | 4 | 0,30 | rasen, ansäen, feinrasen |
| R002 | Rasen ansäen – Gebrauchs-Rasen | m² | 0,90 | 4 | 0,30 | rasen, ansäen, gebrauchsrasen |
| R003 | Rasen ansäen – Schatten-Rasen | m² | 1,40 | 4 | 0,30 | rasen, ansäen, schattenrasen |
| R004 | Rollrasen legen Standard | m² | 7,50 | 6 | 0,30 | rollrasen, rasen |
| R005 | Rollrasen legen Premium Sport | m² | 12,00 | 7 | 0,30 | rollrasen, sport, premium |
| R006 | Rasenfläche mähen | m² | 0,00 | 2 | 0,40 | mähen, rasen, pflege |
| R007 | Rasenkanten stechen | lfm | 0,00 | 3 | 0,00 | rasenkante, stechen, pflege |
| R008 | Rasen vertikutieren | m² | 0,00 | 2 | 0,50 | vertikutieren, rasen, pflege |
| R009 | Rasen belüften (Aerifizieren) | m² | 0,00 | 2 | 0,50 | aerifizieren, belüften, rasen |
| R010 | Rasen nachsäen | m² | 0,80 | 3 | 0,00 | nachsäen, rasen, reparatur |
| R011 | Rasen düngen (Langzeitdünger) | m² | 0,55 | 1 | 0,00 | düngen, rasen, langzeitdünger |
| R012 | Magerrasen/Blumenwiese ansäen | m² | 1,80 | 5 | 0,30 | magerrasen, blumenwiese, wildblumen |

### Gehölzpflege

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| G001 | Heckenschnitt bis 1 m Höhe | lfm | 0,00 | 8 | 0,50 | heckenschnitt, hecke, pflege |
| G002 | Heckenschnitt 1–2 m Höhe | lfm | 0,00 | 12 | 0,80 | heckenschnitt, hecke, pflege |
| G003 | Heckenschnitt 2–3 m Höhe | lfm | 0,00 | 18 | 1,00 | heckenschnitt, hecke, pflege |
| G004 | Heckenschnitt über 3 m | lfm | 0,00 | 28 | 1,50 | heckenschnitt, hoch, pflege |
| G005 | Strauch schneiden/formen klein | Stk | 0,00 | 15 | 0,50 | strauch, schneiden, pflege |
| G006 | Strauch schneiden/formen groß | Stk | 0,00 | 30 | 1,00 | strauch, schneiden, pflege |
| G007 | Baum schneiden bis 3 m | Stk | 0,00 | 30 | 0,50 | baum, schneiden, pflege |
| G008 | Baum schneiden bis 5 m | Stk | 0,00 | 50 | 1,00 | baum, schneiden, pflege |
| G009 | Totholz aus Krone entfernen | h | 0,00 | 60 | 1,00 | totholz, baumkrone, pflege |
| G010 | Gehölz roden bis 15 cm Stammumfang | Stk | 0,00 | 20 | 3,00 | roden, gehölz, bagger |
| G011 | Gehölz roden bis 60 cm Stammumfang | Stk | 0,00 | 35 | 8,00 | roden, gehölz, bagger |
| G012 | Baumstumpf fräsen bis 40 cm | Stk | 0,00 | 45 | 15,00 | stumpffräsen, baumstumpf |
| G013 | Schnittgut häckseln | m³ | 0,00 | 15 | 5,00 | häckseln, grünschnitt, häcksler |
| G014 | Grünschnittentsorgung | m³ | 18,00 | 10 | 0,00 | entsorgung, grünschnitt, häckselgut |

### Mulch & Schüttgüter

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| MU001 | Rindenmulch 5 cm ausbringen | m² | 3,80 | 5 | 0,50 | rindenmulch, mulch |
| MU002 | Rindenmulch 8 cm ausbringen | m² | 6,00 | 7 | 0,50 | rindenmulch, mulch |
| MU003 | Holzhackschnitzel 8 cm | m² | 2,80 | 5 | 0,50 | hackschnitzel, mulch |
| MU004 | Kies/Split 8–16 mm, 5 cm | m² | 8,50 | 7 | 0,80 | kies, splitt, schüttgut |
| MU005 | Kies/Split 8–16 mm, 8 cm | m² | 13,00 | 9 | 0,80 | kies, splitt, schüttgut |
| MU006 | Lava-Granulat 8–16 mm, 5 cm | m² | 13,00 | 7 | 0,80 | lava, granulat, mulch |
| MU007 | Kompost einarbeiten 5 cm | m² | 4,50 | 6 | 0,80 | kompost, bodenverbesserung |
| MU008 | Unkrautvlies verlegen | m² | 1,10 | 4 | 0,00 | unkrautvlies, vlies, beet |
| MU009 | Dekorsteine 20–60 cm setzen | Stk | 35,00 | 20 | 2,00 | dekorsteine, naturstein |

---

## GEWERK: BEWÄSSERUNG

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| BW001 | Tropfschlauch 16 mm verlegen | lfm | 1,80 | 5 | 0,00 | tropfschlauch, bewässerung, tröpfchen |
| BW002 | Tropfschlauch 20 mm verlegen | lfm | 2,50 | 5 | 0,00 | tropfschlauch, bewässerung |
| BW003 | Versenkregner setzen (Rasen) | Stk | 22,00 | 22 | 0,00 | versenkregner, sprinkler, rasen |
| BW004 | Sprühdüse setzen (Beet) | Stk | 12,00 | 15 | 0,00 | sprühdüse, bewässerung, beet |
| BW005 | PE-Rohr 25 mm verlegen | lfm | 1,60 | 8 | 0,00 | pe-rohr, zuleitung, bewässerung |
| BW006 | PE-Rohr 32 mm verlegen | lfm | 2,20 | 10 | 0,00 | pe-rohr, hauptleitung, bewässerung |
| BW007 | Steuerventil DN20 einbauen | Stk | 35,00 | 30 | 0,00 | ventil, steuerventil, bewässerung |
| BW008 | Ventilkasten/Schacht einbauen | Stk | 55,00 | 45 | 0,00 | ventilkasten, schacht, bewässerung |
| BW009 | Steuereinheit einrichten | Stk | 120,00 | 60 | 0,00 | steuerung, programm, bewässerung |
| BW010 | Anschluss an Wasserzähler | Stk | 45,00 | 40 | 0,00 | wasserzähler, anschluss, bewässerung |
| BW011 | Bewässerung winterfest machen | Psch | 0,00 | 45 | 0,00 | winterfest, ausblasen, bewässerung |
| BW012 | Bewässerung Inbetriebnahme | Psch | 0,00 | 30 | 0,00 | inbetriebnahme, frühjahr, bewässerung |

---

## GEWERK: GARTENHAUS (HOLZBAU)

### Ständerwerk & Beplankung

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| GH001 | Eckständer KVH 100/100 mm | lfm | 8,50 | 15 | 0,00 | eckständer, kvh, holzständer, rahmen |
| GH002 | Wandständer KVH 60/120 mm | lfm | 5,20 | 12 | 0,00 | wandständer, kvh, holzständer, rahmen |
| GH003 | Schwelle/Fußschwelle KVH 60/120 mm, imprägniert | lfm | 6,80 | 14 | 0,00 | schwelle, fußschwelle, kvh, imprägniert |
| GH004 | Rähm/Kopfschwelle KVH 60/120 mm | lfm | 5,20 | 12 | 0,00 | rähm, kopfschwelle, kvh |
| GH005 | Dachbalken KVH 60/200 mm | lfm | 9,50 | 16 | 0,00 | dachbalken, sparren, kvh |
| GH006 | OSB-Beplankung 22 mm verlegen | m² | 14,00 | 12 | 0,00 | osb, beplankung, wand |
| GH007 | Fenster-/Türlaibung verkleiden | lfm | 6,00 | 18 | 0,00 | laibung, fenster, tür |

### Öffnungen

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| GH010 | Fenster Kunststoff 100×100 cm einbauen | Stk | 320,00 | 90 | 0,00 | fenster, einbau, öffnung |
| GH011 | Tür Holz einflügelig einbauen | Stk | 650,00 | 120 | 0,00 | tür, einbau, öffnung |

### Flachdach-Gründach

| ID | Bezeichnung | Einheit | Material €/Einh | AZ min/Einh | Maschine €/Einh | Tags |
|----|-------------|---------|-----------------|-------------|-----------------|------|
| GH020 | Dachschalung OSB 22 mm | m² | 15,00 | 10 | 0,00 | dachschalung, osb, flachdach |
| GH021 | Gefälledämmung EPS im Mittel 60–160 mm | m² | 28,00 | 8 | 0,00 | dämmung, gefälledämmung, eps, flachdach |
| GH022 | Abdichtung/Wurzelschutzbahn verlegen | m² | 18,00 | 10 | 0,00 | abdichtung, wurzelschutz, bahn, flachdach |
| GH023 | Dränageplatte 25 mm verlegen | m² | 9,00 | 6 | 0,00 | dränage, drainage, flachdach |
| GH024 | Filtervlies verlegen | m² | 2,20 | 4 | 0,00 | filtervlies, vlies, gründach |
| GH025 | Extensivsubstrat 10 cm einbauen | m² | 14,00 | 8 | 1,50 | substrat, extensiv, gründach |
| GH026 | Sedum-Vegetationsmatte verlegen | m² | 16,00 | 6 | 0,00 | sedum, vegetation, gründach, dachbegrünung |
| GH027 | Attika/Blechabdeckung montieren | lfm | 24,00 | 20 | 0,00 | attika, blechabdeckung, flachdach |

---

*Ende PREISE.md – Weinschenck GreenCalc 26*
