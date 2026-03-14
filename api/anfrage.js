const { Resend } = require('resend');
const formidable = require('formidable');

const resend = new Resend(process.env.RESEND_API_KEY);

function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields) => {
      if (err) reject(err);
      else resolve(fields);
    });
  });
}

function field(fields, key) {
  const val = fields[key];
  if (!val) return '–';
  return Array.isArray(val) ? val[0] : val;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const fields = await parseForm(req);

    await resend.emails.send({
      from: 'Gartenanfrage <onboarding@resend.dev>',
      to: 'info@weinschenck-garten.de',
      subject: 'Neue Gartenanfrage',
      html: `
        <h2>Neue Gartenanfrage</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${field(fields, 'name')}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${field(fields, 'phone')}</td></tr>
          <tr><td><strong>E-Mail</strong></td><td>${field(fields, 'email')}</td></tr>
          <tr><td><strong>Ort</strong></td><td>${field(fields, 'city')}</td></tr>
          <tr><td><strong>Postleitzahl</strong></td><td>${field(fields, 'zip')}</td></tr>
          <tr><td><strong>Projektart</strong></td><td>${field(fields, 'project_type')}</td></tr>
          <tr><td><strong>Projektgröße</strong></td><td>${field(fields, 'project_size')}</td></tr>
          <tr><td><strong>Gewünschter Zeitpunkt</strong></td><td>${field(fields, 'timing')}</td></tr>
          <tr><td><strong>Budget</strong></td><td>${field(fields, 'budget')}</td></tr>
          <tr><td><strong>Beschreibung</strong></td><td>${field(fields, 'description')}</td></tr>
        </table>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Anfrage erfolgreich gesendet',
    });
  } catch (error) {
    console.error('Fehler beim Senden:', error);
    return res.status(500).json({
      success: false,
      error: 'Serverfehler beim Senden der E-Mail',
    });
  }
};
