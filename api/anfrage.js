const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      telefon,
      email,
      ort,
      postleitzahl,
      projektart,
      projektgroesse,
      zeitpunkt,
      budget,
      beschreibung,
    } = req.body;

    await resend.emails.send({
      from: 'Gartenanfrage <onboarding@resend.dev>',
      to: 'info@weinschenck-garten.de',
      subject: 'Neue Gartenanfrage',
      html: `
        <h2>Neue Gartenanfrage</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${name || '–'}</td></tr>
          <tr><td><strong>Telefon</strong></td><td>${telefon || '–'}</td></tr>
          <tr><td><strong>E-Mail</strong></td><td>${email || '–'}</td></tr>
          <tr><td><strong>Ort</strong></td><td>${ort || '–'}</td></tr>
          <tr><td><strong>Postleitzahl</strong></td><td>${postleitzahl || '–'}</td></tr>
          <tr><td><strong>Projektart</strong></td><td>${projektart || '–'}</td></tr>
          <tr><td><strong>Projektgröße</strong></td><td>${projektgroesse || '–'}</td></tr>
          <tr><td><strong>Gewünschter Zeitpunkt</strong></td><td>${zeitpunkt || '–'}</td></tr>
          <tr><td><strong>Budget</strong></td><td>${budget || '–'}</td></tr>
          <tr><td><strong>Beschreibung</strong></td><td>${beschreibung || '–'}</td></tr>
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
