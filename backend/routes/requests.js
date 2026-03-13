const express = require('express');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const db = require('../db');

const router = express.Router();

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../uploads'),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { files: 10, fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Nur Bilder erlaubt'));
  }
});

function classifyCustomer(budget) {
  if (budget === 'über 50.000 €' || budget === '15.000 – 50.000 €') return 'A';
  if (budget === '5.000 – 15.000 €') return 'B';
  return 'C';
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendNotificationEmail(request) {
  const subject = `Neue Gartenanfrage von ${request.name}`;
  const text = `
Neue Gartenanfrage eingegangen:

Name:              ${request.name}
Telefon:           ${request.phone}
E-Mail:            ${request.email}
Ort:               ${request.city}
Postleitzahl:      ${request.zip}

Projektart:        ${request.project_type}
Projektgröße:      ${request.project_size}
Gewünschter Zeitpunkt: ${request.timing}
Budget:            ${request.budget}

Beschreibung:
${request.description || '(keine Angabe)'}

Hochgeladene Fotos: ${request.photos.length}

---
Diese E-Mail wurde automatisch durch das Anfrageformular generiert.
  `.trim();

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.NOTIFY_EMAIL || 'info@weinschenck-garten.de',
    subject,
    text,
  });
}

// POST /api/requests
router.post('/', upload.array('photos', 10), async (req, res) => {
  const { name, phone, email, city, zip, project_type, project_size, budget, timing, description } = req.body;

  if (!name || !phone || !email || !city || !zip || !project_type || !project_size || !budget || !timing) {
    return res.status(400).json({ error: 'Alle Pflichtfelder müssen ausgefüllt sein.' });
  }

  const photos = req.files ? req.files.map(f => f.filename) : [];
  const customer_class = classifyCustomer(budget);

  const request = db.createRequest({
    name, phone, email, city, zip,
    project_type, project_size, budget, timing,
    description: description || '',
    customer_class,
    photos
  });

  // E-Mail-Benachrichtigung – Fehler dürfen die Antwort nicht blockieren
  sendNotificationEmail(request).catch(err => {
    console.error('E-Mail-Versand fehlgeschlagen:', err.message);
  });

  res.status(201).json({ id: request.id, customer_class });
});

module.exports = router;
