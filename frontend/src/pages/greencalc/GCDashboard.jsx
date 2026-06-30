import { Link, useNavigate } from 'react-router-dom';
import { useGC } from '../../context/GreenCalcContext';
import { calcAngebot, eur } from '../../data/preise';

function greeting() {
  const h = new Date().getHours();
  if (h < 11) return 'Guten Morgen';
  if (h < 14) return 'Guten Mittag';
  if (h < 18) return 'Guten Nachmittag';
  return 'Guten Abend';
}

const WOCHENTAGE = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
const MONATE = ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];

function dateStr() {
  const d = new Date();
  return `${WOCHENTAGE[d.getDay()]}, ${d.getDate()}. ${MONATE[d.getMonth()]} ${d.getFullYear()}`;
}

const QUICK = [
  { to: '/calc/rechner', emoji: '🧮', bg: '#e8f5e1', label: 'Rechner', sub: 'Herstellkosten' },
  { to: '/calc/angebot', emoji: '📋', bg: '#fef3c7', label: 'Angebot', sub: 'Erstellen & prüfen' },
  { to: '/calc/fotos',   emoji: '📷', bg: '#e0e7ff', label: 'Fotos',   sub: 'Lieferscheine' },
  { to: '/calc/projekte',emoji: '📁', bg: '#fee2e2', label: 'Projekte',sub: 'Übersicht' },
];

export default function GCDashboard() {
  const { activeProject, state, createProject, setActiveProject } = useGC();
  const navigate = useNavigate();

  const summe = activeProject
    ? calcAngebot(activeProject.angebot, activeProject.markup, state.lohnkostensatz)
    : null;

  function handleNewProject() {
    const name = prompt('Projektname (z.B. "Garten Müller, Hamburg"):');
    if (!name?.trim()) return;
    const addr = prompt('Adresse (optional):') || '';
    createProject(name.trim(), addr.trim());
  }

  return (
    <>
      <div className="gc-header">
        <h1>GreenCalc 26</h1>
        <p>{dateStr()}</p>
      </div>

      <div style={{ padding: '16px 16px 0' }}>
        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 14 }}>
          {greeting()}, Kai! 👋
        </p>

        {/* Aktives Projekt */}
        {activeProject ? (
          <div className="gc-project-banner" style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '0.7rem', opacity: 0.75, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Aktives Projekt</div>
                <h2>{activeProject.name}</h2>
                <p>{activeProject.address || 'Keine Adresse'}</p>
              </div>
              <button
                onClick={() => navigate('/calc/projekte')}
                style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: 8, color: 'white', padding: '4px 10px', fontSize: '0.75rem', cursor: 'pointer' }}
              >
                Wechseln
              </button>
            </div>
            <div className="gc-stat-row">
              <div className="gc-stat">
                <span className="gc-stat-val">{activeProject.angebot.length}</span>
                <span className="gc-stat-lbl">Positionen</span>
              </div>
              {summe && (
                <div className="gc-stat">
                  <span className="gc-stat-val">{eur(summe.brutto)}</span>
                  <span className="gc-stat-lbl">Angebot Brutto</span>
                </div>
              )}
              <div className="gc-stat">
                <span className="gc-stat-val">{activeProject.markup} %</span>
                <span className="gc-stat-lbl">Aufschlag</span>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="gc-card"
            style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
            onClick={handleNewProject}
          >
            <span style={{ fontSize: '1.8rem' }}>🏗️</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Kein Projekt aktiv</div>
              <div style={{ fontSize: '0.8rem', color: '#777' }}>Tippe um ein neues Projekt zu starten</div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="gc-section-title">Schnellzugriff</div>
        <div className="gc-quickactions" style={{ marginBottom: 16 }}>
          {QUICK.map(q => (
            <Link key={q.to} to={q.to} className="gc-quick-btn">
              <div className="gc-quick-icon" style={{ background: q.bg }}>
                {q.emoji}
              </div>
              <div className="gc-quick-label">{q.label}</div>
              <div className="gc-quick-sub">{q.sub}</div>
            </Link>
          ))}
        </div>

        {/* Letzte Positionen */}
        {activeProject && activeProject.angebot.length > 0 && (
          <>
            <div className="gc-section-title">Letzte Positionen</div>
            <div style={{ marginBottom: 16 }}>
              {activeProject.angebot.slice(-3).reverse().map(pos => (
                <div key={pos.id} className="gc-card" style={{ marginBottom: 8, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{pos.bezeichnung}</div>
                    <div style={{ fontSize: '0.75rem', color: '#777' }}>{pos.menge} {pos.einheit}</div>
                  </div>
                </div>
              ))}
              <Link to="/calc/angebot" style={{ display: 'block', textAlign: 'center', color: '#4a7c28', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', padding: '8px 0' }}>
                Alle Positionen →
              </Link>
            </div>
          </>
        )}

        {/* Andere Projekte */}
        {state.projects.filter(p => p.id !== state.activeProjectId).length > 0 && (
          <>
            <div className="gc-section-title">Weitere Projekte</div>
            {state.projects.filter(p => p.id !== state.activeProjectId).slice(0, 2).map(p => (
              <div
                key={p.id}
                className="gc-card"
                style={{ marginBottom: 8, padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => setActiveProject(p.id)}
              >
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{p.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#777' }}>{p.angebot.length} Positionen</div>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#4a7c28', fontWeight: 700 }}>Aktivieren</span>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
