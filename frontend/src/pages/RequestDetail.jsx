import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const STATUSES = ['neu', 'geprüft', 'Termin vereinbart', 'Angebot erstellt'];

export default function RequestDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [req, setReq] = useState(null);
  const [saving, setSaving] = useState(false);

  function token() { return localStorage.getItem('admin_token'); }

  async function load() {
    const res = await fetch(`/api/admin/requests/${id}`, {
      headers: { Authorization: `Bearer ${token()}` }
    });
    if (res.status === 401) { localStorage.removeItem('admin_token'); navigate('/admin/login'); return; }
    if (res.status === 404) { navigate('/admin'); return; }
    setReq(await res.json());
  }

  useEffect(() => { load(); }, [id]);

  async function updateStatus(status) {
    setSaving(true);
    await fetch(`/api/admin/requests/${id}/status`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token()}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    setReq(r => ({ ...r, status }));
    setSaving(false);
  }

  async function deleteRequest() {
    if (!confirm('Anfrage wirklich löschen?')) return;
    await fetch(`/api/admin/requests/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token()}` }
    });
    navigate('/admin');
  }

  if (!req) return <div className="container"><p style={{ color: '#888', marginTop: '2rem' }}>Lädt...</p></div>;

  return (
    <div className="container">
      <Link to="/admin" className="nav-back">← Zurück</Link>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ marginBottom: '0.25rem' }}>{req.name}</h2>
            <span className={`badge badge-${req.customer_class}`}>{req.customer_class}-Kunde</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <select
              value={req.status}
              onChange={e => updateStatus(e.target.value)}
              disabled={saving}
              style={{ padding: '0.5rem', borderRadius: '8px', border: '1.5px solid #ddd', fontWeight: 600 }}
            >
              {STATUSES.map(s => <option key={s}>{s}</option>)}
            </select>
            <button className="btn btn-danger" onClick={deleteRequest}>Löschen</button>
          </div>
        </div>

        <div className="detail-grid">
          <div>
            <h3>Kontakt</h3>
            <div className="detail-field"><span>Telefon</span><strong>{req.phone}</strong></div>
            <div className="detail-field"><span>E-Mail</span><strong>{req.email}</strong></div>
            <div className="detail-field"><span>Ort</span><strong>{req.city} {req.zip}</strong></div>
          </div>
          <div>
            <h3>Projekt</h3>
            <div className="detail-field"><span>Art</span><strong>{req.project_type}</strong></div>
            <div className="detail-field"><span>Größe</span><strong>{req.project_size}</strong></div>
            <div className="detail-field"><span>Budget</span><strong>{req.budget}</strong></div>
            <div className="detail-field"><span>Zeitpunkt</span><strong>{req.timing}</strong></div>
          </div>
        </div>

        {req.description && (
          <div style={{ marginTop: '1.25rem' }}>
            <h3>Beschreibung</h3>
            <p style={{ color: '#555', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{req.description}</p>
          </div>
        )}

        <div style={{ marginTop: '0.75rem', color: '#aaa', fontSize: '0.8rem' }}>
          Eingegangen: {new Date(req.created_at).toLocaleString('de-DE')}
        </div>
      </div>

      {req.photos.length > 0 && (
        <div className="card">
          <h3>Fotos ({req.photos.length})</h3>
          <div className="photo-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
            {req.photos.map((f, i) => (
              <a key={i} href={`/uploads/${f}`} target="_blank" rel="noreferrer">
                <div style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: '8px' }}>
                  <img src={`/uploads/${f}`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
