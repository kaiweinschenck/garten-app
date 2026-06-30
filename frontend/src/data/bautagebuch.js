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
    id: 'musterhausen-pool',
    titel: 'Naturstein-Sitzmauer mit Pool-Umrandung',
    ort: 'Musterhausen',
    typ: 'Naturstein / Pool',
    zeitraum: 'März – September 2026',
    beschreibung:
      'Vom Erdaushub bis zur eingewachsenen Anlage: Dieses Projekt haben wir über ein halbes Jahr lückenlos in kurzen Clips begleitet.',
    phasen: [
      {
        titel: 'Erdaushub & Rohbau',
        videoSrc: '',
        poster: '',
      },
      {
        titel: 'Tragschicht & Fundament',
        videoSrc: '',
        poster: '',
      },
      {
        titel: 'Natursteinmauer',
        videoSrc: '',
        poster: '',
      },
      {
        titel: 'Bepflanzung & Finish',
        videoSrc: '',
        poster: '',
      },
    ],
  },
];
