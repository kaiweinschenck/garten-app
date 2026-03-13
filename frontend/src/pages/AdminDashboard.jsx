import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BUDGETS = ['', 'unter 5.000 €', '5.000 – 15.000 €', '15.000 – 50.000 €', 'über 50.000 €'];
const PROJECT_TYPES = ['', 'Gartengestaltung', 'Terrasse', 'Pflasterarbeiten', 'Einfahrt', 'Naturstein', 'Schwimmteich', 'Gartenumgestaltung'];
const STATUSES = ['', 'neu', 'geprüft', 'Termin vereinbart', 'Angebot erstellt'];

function statusClass(s) {
  if (s === 'neu') return 'status-neu';
  if (s === 'geprüft') return 'status-gepruft';
  if (s === 'Termin vereinbart') return 'status-termin';
  if (s === 'Angebot erstellt') return 'status-angebot';
  return '';
}

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);
  const [filters, setFilters] = useState({ budget: '', city: '', project_type: '', status: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function token() { return localStorage.getItem('admin_token'); }

  async function load() {
    setLoading(true);
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([k, v]) => { if (v) params.append(k, v); });
    try {
      const res = await fetch(`/api/admin/requests?${params}`, {
        headers: { Authorization: `Bearer ${token()}` }
      });
      if (res.status === 401) { localStorage.removeItem('admin_token'); navigate('/admin/login'); return; }
      setRequests(await res.json());
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, [filters]);

  function handleFilter(e) {
    setFilters(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function logout() {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  }

  const counts = { A: 0, B: 0, C: 0 };
  requests.forEach(r => counts[r.customer_class]++);

  return (
    <div className="container" style={{ maxWidth: 1000 }}>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button className="btn btn-secondary" onClick={logout}>Abmelden</button>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <div className="card" style={{ flex: 1, padding: '1rem', textAlign: 'center', minWidth: 120 }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#166534' }}>{counts.A}</div>
          <div className="badge badge-A">A-Kunden</div>
          <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.25rem' }}>über 15.000 €</div>
        </div>
        <div className="card" style={{ flex: 1, padding: '1rem', textAlign: 'center', minWidth: 120 }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#854d0e' }}>{counts.B}</div>
          <div className="badge badge-B">B-Kunden</div>
          <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.25rem' }}>5.000 – 15.000 €</div>
        </div>
        <div className="card" style={{ flex: 1, padding: '1rem', textAlign: 'center', minWidth: 120 }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#991b1b' }}>{counts.C}</div>
          <div className="badge badge-C">C-Kunden</div>
          <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '0.25rem' }}>unter 5.000 €</div>
        </div>
        <div className="card" style={{ flex: 1, padding: '1rem', textAlign: 'center', minWidth: 120 }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>{requests.length}</div>
          <div style={{ color: '#666', fontSize: '0.85rem' }}>Gesamt</div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <select name="budget" value={filters.budget} onChange={handleFilter}>
          <option value="">Alle Budgets</option>
          {BUDGETS.slice(1).map(b => <option key={b}>{b}</option>)}
        </select>
        <select name="project_type" value={filters.project_type} onChange={handleFilter}>
          <option value="">Alle Projektarten</option>
          {PROJECT_TYPES.slice(1).map(t => <option key={t}>{t}</option>)}
        </select>
        <select name="status" value={filters.status} onChange={handleFilter}>
          <option value="">Alle Status</option>
          {STATUSES.slice(1).map(s => <option key={s}>{s}</option>)}
        </select>
        <input
          name="city"
          value={filters.city}
          onChange={handleFilter}
          placeholder="Ort / PLZ suchen"
        />
      </div>

      {/* List */}
      {loading ? (
        <p style={{ color: '#888', textAlign: 'center', padding: '2rem' }}>Lädt...</p>
      ) : requests.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', color: '#888', padding: '2rem' }}>
          Keine Anfragen gefunden.
        </div>
      ) : (
        <div className="request-list">
          {requests.map(r => (
            <Link key={r.id} to={`/admin/request/${r.id}`} className="request-card">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                <span className={`badge badge-${r.customer_class}`}>{r.customer_class}</span>
                <span style={{ fontSize: '0.75rem', color: '#999' }}>#{r.id}</span>
              </div>
              <div className="request-card-info">
                <h3>{r.name}</h3>
                <div className="request-card-meta">
                  {r.project_type} · {r.city} {r.zip} · {r.project_size}
                </div>
                <div className="request-card-meta" style={{ marginTop: '0.2rem' }}>{r.budget}</div>
              </div>
              <div className="request-card-right">
                <span className={`status-badge ${statusClass(r.status)}`}>{r.status}</span>
                <span style={{ fontSize: '0.75rem', color: '#aaa' }}>
                  {new Date(r.created_at).toLocaleDateString('de-DE')}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
