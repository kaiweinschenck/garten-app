const { Resend } = require('resend');
const formidable = require('formidable');

const resend = new Resend(process.env.RESEND_API_KEY);

function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: true, maxFileSize: 10 * 1024 * 1024 });
    form.parse(req, (err, fields) => {
      if (err) {
        console.error('[formidable] Parsing-Fehler:', err);
        return reject(err);
      }
      console.log('[formidable] Felder geparst:', JSON.stringify(fields));
      resolve(fields);
    });
  });
}

// formidable v3 liefert Felder als Arrays → ersten Wert nehmen
function get(fields, key) {
  const val = fields[key];
  if (val === undefined || val === null) return '–';
  return Array.isArray(val) ? (val[0] || '–') : val;
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const fields = await parseForm(req);

    const name         = get(fields, 'name');
    const phone        = get(fields, 'phone');
    const email        = get(fields, 'email');
    const city         = get(fields, 'city');
    const zip          = get(fields, 'zip');
    const project_type = get(fields, 'project_type');
    const project_size = get(fields, 'project_size');
    const timing       = get(fields, 'timing');
    const budget       = get(fields, 'budget');
    const description  = get(fields, 'description');

    console.log('[resend] Sende E-Mail für:', name, email);

    const { data, error } = await resend.emails.send({
      from: 'Gartenanfrage <onboarding@resend.dev>',
      to: 'weinschenckkj@gmail.com',
      subject: 'Neue Gartenanfrage',
      html: `
        <h2>Neue Gartenanfrage</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${phone}</td></tr>
          <tr><td><strong>E-Mail</strong></td><td>${email}</td></tr>
          <tr><td><strong>Ort</strong></td><td>${city}</td></tr>
          <tr><td><strong>Postleitzahl</strong></td><td>${zip}</td></tr>
          <tr><td><strong>Projektart</strong></td><td>${project_type}</td></tr>
          <tr><td><strong>Projektgröße</strong></td><td>${project_size}</td></tr>
          <tr><td><strong>Gewünschter Zeitpunkt</strong></td><td>${timing}</td></tr>
          <tr><td><strong>Budget</strong></td><td>${budget}</td></tr>
          <tr><td><strong>Beschreibung</strong></td><td>${description}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error('[resend] API-Fehler:', JSON.stringify(error));
      // Echten Resend-Fehler zurückgeben (hilft beim Debuggen)
      return res.status(500).json({
        success: false,
        error: error.message || JSON.stringify(error),
      });
    }

    console.log('[resend] Erfolgreich gesendet, ID:', data?.id);

    return res.status(200).json({
      success: true,
      message: 'Anfrage erfolgreich gesendet',
    });

  } catch (err) {
    console.error('[handler] Unerwarteter Fehler:', err?.message, err?.stack);
    return res.status(500).json({
      success: false,
      error: err?.message || 'Unbekannter Serverfehler',
    });
  }
}

// config MUSS am handler selbst hängen, BEVOR module.exports gesetzt wird
handler.config = {
  api: {
    bodyParser: false,
  },
};

module.exports = handler;
