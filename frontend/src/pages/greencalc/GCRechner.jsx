import { useState, useMemo, useRef } from 'react';
import { useGC } from '../../context/GreenCalcContext';
import { KATEGORIEN, suchePositionen, calcHerstellkosten, eur } from '../../data/preise';

export default function GCRechner() {
  const { state, activeProject, addPosition, createProject } = useGC();
  const [query, setQuery] = useState('');
  const [katFilter, setKatFilter] = useState('alle');
  const [selected, setSelected] = useState(null);
  const [menge, setMenge] = useState('1');
  const [toast, setToast] = useState('');
  const [mode, setMode] = useState('liste'); // 'liste' | 'manuell'

  // Manuell
  const [manPos, setManPos] = useState({ bezeichnung: '', einheit: 'Stk', materialpreis: '0', az_min: '0' });

  const toastTimer = useRef(null);

  const results = useMemo(() => {
    let list = suchePositionen(query);
    if (katFilter !== 'alle') list = list.filter(p => p.kategorie === katFilter);
    return list;
  }, [query, katFilter]);

  const lohn = state.lohnkostensatz;

  const currentPos = mode === 'manuell'
    ? { ...manPos, materialpreis: parseFloat(manPos.materialpreis) || 0, az_min: parseFloat(manPos.az_min) || 0 }
    : selected;

  const mengeNum = parseFloat(menge) || 0;
  const ergebnis = currentPos && mengeNum > 0
    ? calcHerstellkosten(mengeNum, currentPos.materialpreis, currentPos.az_min, lohn)
    : null;

  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2500);
  }

  function handleAdd() {
    if (!ergebnis || mengeNum <= 0) return;
    const pos = currentPos;
    const projektId = activeProject?.id || (() => {
      const name = prompt('Kein Projekt aktiv. Projektname eingeben:');
      if (!name?.trim()) return null;
      return createProject(name.trim(), '');
    })();
    if (!projektId) return;
    addPosition(projektId, {
      posId: pos.id || 'custom',
      bezeichnung: pos.bezeichnung,
      einheit: pos.einheit,
      menge: mengeNum,
      materialpreis: pos.materialpreis,
      az_min: pos.az_min,
      lohnkostensatz: lohn,
    });
    showToast(`"${pos.bezeichnung}" zum Angebot hinzugefügt`);
    setMenge('1');
    setSelected(null);
  }

  return (
    <>
      <div className="gc-header">
        <h1>Rechner</h1>
        <p>Herstellkosten berechnen</p>
      </div>

      <div style={{ padding: '12px 16px 0' }}>
        {/* Mode Toggle */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <button
            className={`gc-btn gc-btn-sm ${mode === 'liste' ? 'gc-btn-primary' : 'gc-btn-secondary'}`}
            style={{ flex: 1 }}
            onClick={() => setMode('liste')}
          >
            Preisliste
          </button>
          <button
            className={`gc-btn gc-btn-sm ${mode === 'manuell' ? 'gc-btn-primary' : 'gc-btn-secondary'}`}
            style={{ flex: 1 }}
            onClick={() => { setMode('manuell'); setSelected(null); }}
          >
            Manuell
          </button>
        </div>

        {mode === 'liste' ? (
          <>
            {/* Suche */}
            <div className="gc-search-wrap">
              <svg className="gc-search-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                className="gc-search-input"
                type="search"
                placeholder="Leistung suchen…"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>

            {/* Kategorien */}
            <div className="gc-chips">
              <button className={`gc-chip ${katFilter === 'alle' ? 'active' : ''}`} onClick={() => setKatFilter('alle')}>
                Alle
              </button>
              {KATEGORIEN.map(k => (
                <button
                  key={k.id}
                  className={`gc-chip ${katFilter === k.name ? 'active' : ''}`}
                  onClick={() => setKatFilter(katFilter === k.name ? 'alle' : k.name)}
                >
                  {k.name}
                </button>
              ))}
            </div>

            {/* Positionsliste */}
            <div className="gc-pos-list" style={{ maxHeight: 260, overflowY: 'auto' }}>
              {results.length === 0 && (
                <div className="gc-empty" style={{ padding: '20px 0' }}>
                  <p>Keine Treffer für „{query}"</p>
                </div>
              )}
              {results.map(pos => (
                <div
                  key={pos.id}
                  className={`gc-pos-item ${selected?.id === pos.id ? 'selected' : ''}`}
                  onClick={() => setSelected(selected?.id === pos.id ? null : pos)}
                >
                  <div className="gc-pos-name">{pos.bezeichnung}</div>
                  <div className="gc-pos-meta">
                    <span>{pos.einheit}</span>
                    <span>{eur(pos.materialpreis)} Material</span>
                    <span>{pos.az_min} Min AZ</span>
                    <span className="gc-pos-kat">{pos.kategorie}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Manuell */
          <div>
            <div className="gc-field">
              <label className="gc-label">Bezeichnung</label>
              <input
                className="gc-input"
                value={manPos.bezeichnung}
                onChange={e => setManPos(p => ({ ...p, bezeichnung: e.target.value }))}
                placeholder="z.B. Sonderleistung"
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div className="gc-field">
                <label className="gc-label">Einheit</label>
                <select className="gc-select" value={manPos.einheit} onChange={e => setManPos(p => ({ ...p, einheit: e.target.value }))}>
                  {['Stk','m²','m³','lfm','h','Psch'].map(u => <option key={u}>{u}</option>)}
                </select>
              </div>
              <div className="gc-field">
                <label className="gc-label">Material €/Einheit</label>
                <input
                  className="gc-input"
                  type="number"
                  inputMode="decimal"
                  value={manPos.materialpreis}
                  onChange={e => setManPos(p => ({ ...p, materialpreis: e.target.value }))}
                />
              </div>
              <div className="gc-field">
                <label className="gc-label">AZ Min/Einheit</label>
                <input
                  className="gc-input"
                  type="number"
                  inputMode="decimal"
                  value={manPos.az_min}
                  onChange={e => setManPos(p => ({ ...p, az_min: e.target.value }))}
                />
              </div>
            </div>
          </div>
        )}

        {/* Menge + Ergebnis */}
        {(selected || mode === 'manuell') && (
          <div style={{ marginTop: 16 }}>
            <div className="gc-divider" />

            {selected && (
              <div style={{ marginBottom: 12, padding: '10px 12px', background: '#f0f7ea', borderRadius: 10, border: '1.5px solid #c8ddb0' }}>
                <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>{selected.bezeichnung}</div>
                <div style={{ fontSize: '0.75rem', color: '#666', marginTop: 2 }}>
                  {selected.einheit} · {eur(selected.materialpreis)}/Einh. Material · {selected.az_min} Min/Einh. AZ
                </div>
              </div>
            )}

            <div className="gc-field">
              <label className="gc-label">Menge ({currentPos?.einheit || 'Einheit'})</label>
              <input
                className="gc-input"
                type="number"
                inputMode="decimal"
                min="0"
                step="0.5"
                value={menge}
                onChange={e => setMenge(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: 8, padding: '8px 12px', background: '#f8f8f8', borderRadius: 8, border: '1px solid #eee', fontSize: '0.78rem', color: '#777' }}>
              Lohnkostensatz: <strong style={{ color: '#333' }}>{eur(lohn)}/h</strong>
            </div>

            {ergebnis && (
              <div className="gc-ergebnis">
                <div className="gc-ergebnis-row">
                  <span>Material</span>
                  <span>{eur(ergebnis.material)}</span>
                </div>
                <div className="gc-ergebnis-row">
                  <span>Lohn ({mengeNum} × {currentPos.az_min} Min × {eur(lohn)}/h)</span>
                  <span>{eur(ergebnis.lohn)}</span>
                </div>
                <div className="gc-ergebnis-row total">
                  <span>Herstellkosten</span>
                  <span>{eur(ergebnis.total)}</span>
                </div>
              </div>
            )}

            <button
              className="gc-btn gc-btn-primary"
              onClick={handleAdd}
              disabled={!ergebnis || mengeNum <= 0 || (mode === 'manuell' && !manPos.bezeichnung.trim())}
            >
              + Zum Angebot hinzufügen
            </button>
          </div>
        )}
      </div>

      {toast && <div className="gc-toast">{toast}</div>}
    </>
  );
}
