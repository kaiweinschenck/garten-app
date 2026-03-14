import React, { useState, useRef } from 'react';

const PROJECT_TYPES = ['Gartengestaltung', 'Terrasse', 'Pflasterarbeiten', 'Einfahrt', 'Naturstein', 'Schwimmteich', 'Gartenumgestaltung'];
const PROJECT_SIZES = ['unter 20 m²', '20–50 m²', '50–100 m²', 'über 100 m²'];
const BUDGETS = ['unter 5.000 €', '5.000 – 15.000 €', '15.000 – 50.000 €', 'über 50.000 €'];
const TIMINGS = ['sofort', 'innerhalb 3 Monate', 'dieses Jahr', 'nächstes Jahr'];

const INITIAL_FORM = {
  name: '', phone: '', email: '', city: '', zip: '',
  project_type: '', project_size: '', budget: '', timing: '', description: ''
};

export default function RequestForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [photos, setPhotos] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [dsgvo, setDsgvo] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef();

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleFiles(e) {
    const files = Array.from(e.target.files);
    const remaining = 10 - photos.length;
    const toAdd = files.slice(0, remaining);
    setPhotos(p => [...p, ...toAdd]);
    setPreviews(p => [...p, ...toAdd.map(f => URL.createObjectURL(f))]);
  }

  function removePhoto(i) {
    setPhotos(p => p.filter((_, idx) => idx !== i));
    setPreviews(p => p.filter((_, idx) => idx !== i));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    photos.forEach(f => data.append('photos', f));

    try {
      const res = await fetch(
        'https://garten-app-git-main-weinschenckkj-1986s-projects.vercel.app/api/requests',
        { method: 'POST', body: data }
      );
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Fehler beim Senden');
      }
      setSuccess(true);
      setForm(INITIAL_FORM);
      setPhotos([]);
      setPreviews([]);
      setDsgvo(false);
      window.scrollTo(0, 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="container">
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2d5016' }}>✓</div>
          <h2>Vielen Dank.</h2>
          <p style={{ color: '#444', marginTop: '0.75rem', lineHeight: '1.6' }}>
            Ihre Anfrage wurde erfolgreich übermittelt. Ich melde mich schnellstmöglich bei Ihnen.
          </p>
          <button
            className="btn btn-primary"
            style={{ marginTop: '2rem' }}
            onClick={() => setSuccess(false)}
          >
            Weitere Anfrage stellen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Gartenanfrage stellen</h1>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>Füllen Sie das Formular aus — wir melden uns bei Ihnen.</p>

        {error && <div className="alert-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <h3>Kontaktdaten</h3>
          <div className="form-group">
            <label>Name *</label>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Vor- und Nachname" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Telefon *</label>
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+49 ..." />
            </div>
            <div className="form-group">
              <label>E-Mail *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="ihre@email.de" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Ort *</label>
              <input name="city" value={form.city} onChange={handleChange} required placeholder="Stadt" />
            </div>
            <div className="form-group">
              <label>Postleitzahl *</label>
              <input name="zip" value={form.zip} onChange={handleChange} required placeholder="12345" />
            </div>
          </div>

          <h3 style={{ marginTop: '1.5rem' }}>Projektdetails</h3>
          <div className="form-group">
            <label>Projektart *</label>
            <select name="project_type" value={form.project_type} onChange={handleChange} required>
              <option value="">Bitte wählen</option>
              {PROJECT_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Projektgröße *</label>
              <select name="project_size" value={form.project_size} onChange={handleChange} required>
                <option value="">Bitte wählen</option>
                {PROJECT_SIZES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Gewünschter Zeitpunkt *</label>
              <select name="timing" value={form.timing} onChange={handleChange} required>
                <option value="">Bitte wählen</option>
                {TIMINGS.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Budget *</label>
            <select name="budget" value={form.budget} onChange={handleChange} required>
              <option value="">Bitte wählen</option>
              {BUDGETS.map(b => <option key={b}>{b}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Beschreibung</label>
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Beschreiben Sie Ihren Wunsch..." />
          </div>

          <h3 style={{ marginTop: '1.5rem' }}>Fotos (max. 10)</h3>
          <div className="form-group">
            <div className="upload-area" onClick={() => fileRef.current.click()}>
              <input ref={fileRef} type="file" multiple accept="image/*" onChange={handleFiles} />
              <p>Klicken oder Bilder hierher ziehen</p>
              <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.25rem' }}>
                {photos.length}/10 Bilder ausgewählt
              </p>
            </div>
            {previews.length > 0 && (
              <div className="photo-grid">
                {previews.map((src, i) => (
                  <div className="photo-thumb" key={i}>
                    <img src={src} alt="" />
                    <button type="button" onClick={() => removePhoto(i)}>✕</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="form-group dsgvo-group">
            <label className="dsgvo-label">
              <input
                type="checkbox"
                checked={dsgvo}
                onChange={e => setDsgvo(e.target.checked)}
                required
              />
              <span>
                Ich habe die{' '}
                <a href="https://www.weinschenck-garten.de/datenschutz" target="_blank" rel="noopener noreferrer">
                  Datenschutzerklärung
                </a>{' '}
                gelesen und stimme der Verarbeitung meiner personenbezogenen Daten zur Bearbeitung meiner Anfrage zu. *
              </span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Wird gesendet...' : 'Anfrage absenden'}
          </button>
        </form>
      </div>
    </div>
  );
}
