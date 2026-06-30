import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGC } from '../../context/GreenCalcContext';
import { calcHerstellkosten, calcAngebot, eur } from '../../data/preise';

export default function GCAngebot() {
  const { state, activeProject, removePosition, setMarkup, setActiveProject } = useGC();
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);

  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2500);
  }

  if (!activeProject) {
    return (
      <>
        <div className="gc-header"><h1>Angebot</h1></div>
        <div className="gc-empty" style={{ padding: '60px 20px' }}>
          <div className="gc-empty-icon">📋</div>
          <p>Kein aktives Projekt</p>
          <Link to="/calc/projekte" className="gc-btn gc-btn-primary" style={{ display: 'inline-block', width: 'auto', padding: '12px 24px' }}>
            Zu Projekte
          </Link>
        </div>
      </>
    );
  }

  const lohn = state.lohnkostensatz;
  const markup = activeProject.markup;
  const positionen = activeProject.angebot;
  const summe = calcAngebot(positionen, markup, lohn);

  function handleShare() {
    const lines = [
      `Angebot – ${activeProject.name}`,
      `Datum: ${new Date().toLocaleDateString('de-DE')}`,
      '',
      ...positionen.map((p, i) => {
        const hk = calcHerstellkosten(p.menge, p.materialpreis, p.az_min, lohn, p.maschinenkosten || 0);
        const vp = hk.total * (1 + markup / 100);
        return `${i + 1}. ${p.bezeichnung}\n   ${p.menge} ${p.einheit} × ${eur(vp / p.menge)}/Einh. = ${eur(vp)}`;
      }),
      '',
      `Netto:    ${eur(summe.netto)}`,
      `MwSt 19%: ${eur(summe.mwst)}`,
      `Brutto:   ${eur(summe.brutto)}`,
    ];
    const text = lines.join('\n');
    if (navigator.share) {
      navigator.share({ title: `Angebot ${activeProject.name}`, text });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => showToast('Angebot in Zwischenablage kopiert'));
    }
  }

  function handleClear() {
    if (!confirm('Alle Positionen löschen?')) return;
    positionen.slice().forEach(p => removePosition(activeProject.id, p.id));
  }

  return (
    <>
      <div className="gc-header">
        <h1>Angebot</h1>
        <p>{activeProject.name}</p>
      </div>

      <div style={{ padding: '12px 16px 0' }}>
        {/* Projekt wechseln */}
        {state.projects.length > 1 && (
          <div className="gc-field">
            <label className="gc-label">Projekt</label>
            <select
              className="gc-select"
              value={activeProject.id}
              onChange={e => setActiveProject(e.target.value)}
            >
              {state.projects.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Aufschlag */}
        <div className="gc-settings-row" style={{ marginBottom: 16 }}>
          <div>
            <div className="gc-settings-label">Aufschlag</div>
            <div style={{ fontSize: '0.74rem', color: '#777' }}>Auf Herstellkosten</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              className="gc-settings-input"
              type="number"
              inputMode="decimal"
              min="0"
              max="300"
              value={markup}
              onChange={e => setMarkup(activeProject.id, parseFloat(e.target.value) || 0)}
            />
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#333' }}>%</span>
          </div>
        </div>

        {/* Positionen */}
        {positionen.length === 0 ? (
          <div className="gc-empty" style={{ padding: '30px 0' }}>
            <div className="gc-empty-icon">📄</div>
            <p>Noch keine Positionen</p>
            <Link to="/calc/rechner" className="gc-btn gc-btn-primary" style={{ display: 'inline-block', width: 'auto', padding: '10px 20px' }}>
              Zum Rechner
            </Link>
          </div>
        ) : (
          <>
            <div className="gc-section-title">{positionen.length} Position{positionen.length !== 1 ? 'en' : ''}</div>

            {positionen.map(pos => {
              const hk = calcHerstellkosten(pos.menge, pos.materialpreis, pos.az_min, lohn, pos.maschinenkosten || 0);
              const vp = hk.total * (1 + markup / 100);
              return (
                <div key={pos.id} className="gc-pos-row">
                  <div className="gc-pos-row-top">
                    <div className="gc-pos-row-name">{pos.bezeichnung}</div>
                    <div className="gc-pos-row-price">{eur(vp)}</div>
                  </div>
                  <div className="gc-pos-row-meta">
                    <span>{pos.menge} {pos.einheit}</span>
                    <span>HK {eur(hk.total)}</span>
                    <span>VP/Einh. {eur(vp / pos.menge)}</span>
                  </div>
                  <button
                    onClick={() => removePosition(activeProject.id, pos.id)}
                    style={{ marginTop: 8, background: 'none', border: 'none', color: '#dc2626', fontSize: '0.75rem', cursor: 'pointer', padding: 0 }}
                  >
                    ✕ Entfernen
                  </button>
                </div>
              );
            })}

            {/* Summe */}
            <div className="gc-summe-box" style={{ marginBottom: 16 }}>
              <div className="gc-summe-row">
                <span>Herstellkosten</span>
                <span>{eur(summe.hk)}</span>
              </div>
              <div className="gc-summe-row">
                <span>Netto (inkl. {markup}% Aufschlag)</span>
                <span>{eur(summe.netto)}</span>
              </div>
              <div className="gc-summe-row">
                <span>MwSt 19%</span>
                <span>{eur(summe.mwst)}</span>
              </div>
              <div className="gc-summe-row brutto">
                <span>Brutto gesamt</span>
                <span>{eur(summe.brutto)}</span>
              </div>
            </div>

            <button className="gc-btn gc-btn-primary" style={{ marginBottom: 10 }} onClick={handleShare}>
              📤 Angebot teilen / kopieren
            </button>
            <button className="gc-btn gc-btn-danger" onClick={handleClear}>
              🗑️ Alle Positionen löschen
            </button>
          </>
        )}
      </div>

      {toast && <div className="gc-toast">{toast}</div>}
    </>
  );
}
