// Single Source of Truth für die öffentliche Bautagebuch-Galerie.
//
// Neues Video hinzufügen:
// 1. Clip (mp4, am besten H.264, < 15 MB) nach frontend/public/videos/<projekt-id>/ legen
// 2. videoSrc im jeweiligen Phasen-Eintrag auf den Pfad setzen, z.B. "/videos/musterhausen-pool/02-tragschicht.mp4"
// 3. Optional: poster auf ein Vorschaubild setzen (jpg/webp im selben Ordner)
//
// Solange videoSrc leer ("") ist, zeigt die Galerie automatisch eine "Video folgt"-Kachel an.

export const PROJEKTE = [
  {
    id: 'berg-2026-30-06',
    titel: 'Naturstein-Anlage Berg',
    ort: 'Berg',
    typ: 'Naturstein / Pflaster',
    zeitraum: 'Juni 2026',
    beschreibung:
      'Vom ersten Spatenstich bis zur fertigen Anlage: Granit-Randeinfassung, Schottertragschicht und Natursteinböschung – lückenlos in kurzen Clips dokumentiert.',
    phasen: [
      {
        titel: 'Erdaushub & Absteckung',
        videoSrc: '',
        poster: '',
      },
      {
        titel: 'Tragschicht & Randeinfassung',
        videoSrc: '',
        poster: '/videos/berg-2026-30-06/phase-tragschicht.jpg',
      },
      {
        titel: 'Natursteinböschung',
        videoSrc: '',
        poster: '',
      },
      {
        titel: 'Finish & Einwachsen',
        videoSrc: '',
        poster: '',
      },
    ],
  },
];
