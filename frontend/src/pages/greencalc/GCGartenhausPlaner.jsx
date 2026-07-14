import { useMemo, useState, useRef } from 'react';
import { useGC } from '../../context/GreenCalcContext';
import { allePositionen, calcHerstellkosten, eur } from '../../data/preise';

const DEFAULTS = {
  breite: '4000',
  tiefe: '3000',
  wandhoehe: '2500',
  dachbalkenhoehe: '200',
  staenderabstand: '625',
  attikaBreite: '80',
  anzahlFenster: '2',
  anzahlTueren: '1',
};

function num(v) {
  return parseFloat(v) || 0;
}

function berechneMengen(input) {
  const W  = num(input.breite) / 1000;
  const D  = num(input.tiefe) / 1000;
  const H  = num(input.wandhoehe) / 1000;
  const AW = num(input.attikaBreite) / 1000;
  const abstandMm = Math.max(num(input.staenderabstand), 100);
  const anzFenster = Math.max(num(input.anzahlFenster), 0);
  const anzTueren  = Math.max(num(input.anzahlTueren), 0);

  const umfang = 2 * (W + D);
  const wandstaenderAnzahl = Math.max(Math.round((umfang * 1000) / abstandMm) - 4, 0);
  const dachbalkenAnzahl = Math.round((W * 1000) / abstandMm) + 1;

  const fensterFlaeche = anzFenster * 1 * 1;
  const tuerFlaeche = anzTueren * 1 * 2.1;
  const wandFlaecheGesamt = umfang * H;
  const osbFlaeche = Math.max(wandFlaecheGesamt - fensterFlaeche - tuerFlaeche, 0);
  const laibungLfm = anzFenster * 4 + anzTueren * (2 * 2.1 + 1);

  const dachFlaeche = W * D;
  const gruenFlaeche = Math.max((W - 2 * AW) * (D - 2 * AW), 0);

  return {
    GH001: 4 * H,                       // Eckständer
    GH002: wandstaenderAnzahl * H,       // Wandständer
    GH003: umfang,                       // Schwelle
    GH004: umfang,                       // Rähm
    GH005: dachbalkenAnzahl * D,          // Dachbalken
    GH006: osbFlaeche,                   // OSB Wände
    GH007: laibungLfm,                   // Laibungen
    GH010: anzFenster,                   // Fenster
    GH011: anzTueren,                    // Türen
    GH020: dachFlaeche,                  // Dachschalung
    GH021: dachFlaeche,                  // Gefälledämmung
    GH022: dachFlaeche,                  // Abdichtung
    GH023: gruenFlaeche,                 // Dränage
    GH024: gruenFlaeche,                 // Filtervlies
    GH025: gruenFlaeche,                 // Substrat
    GH026: gruenFlaeche,                 // Vegetation
    GH027: umfang,                       // Attika
  };
}

export default function GCGartenhausPlaner() {
  const { state, activeProject, addPosition, createProject } = useGC();
  const [input, setInput] = useState(DEFAULTS);
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);

  const lohn = state.lohnkostensatz;
  const preisIndex = useMemo(() => {
    const map = new Map();
    allePositionen().forEach(p => map.set(p.id, p));
    return map;
  }, []);

  const mengen = useMemo(() => berechneMengen(input), [input]);

  const zeilen = useMemo(() => {
    return Object.entries(mengen)
      .map(([id, menge]) => {
        const pos = preisIndex.get(id);
        if (!pos || menge <= 0) return null;
        const hk = calcHerstellkosten(menge, pos.materialpreis, pos.az_min, lohn, pos.maschinenkosten || 0);
        return { ...pos, menge, hk: hk.total };
      })
      .filter(Boolean);
  }, [mengen, preisIndex, lohn]);

  const gesamt = zeilen.reduce((s, z) => s + z.hk, 0);

  function setField(key, value) {
    setInput(prev => ({ ...prev, [key]: value }));
  }

  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2500);
  }

  function handleAddAll() {
    const projektId = activeProject?.id || (() => {
      const name = prompt('Kein Projekt aktiv. Projektname eingeben:');
      if (!name?.trim()) return null;
      return createProject(name.trim(), '');
    })();
    if (!projektId) return;
    zeilen.forEach(z => {
      addPosition(projektId, {
        posId: z.id,
        bezeichnung: z.bezeichnung,
        einheit: z.einheit,
        menge: z.menge,
        materialpreis: z.materialpreis,
        az_min: z.az_min,
        maschinenkosten: z.maschinenkosten || 0,
        lohnkostensatz: lohn,
      });
    });
    showToast(`${zeilen.length} Positionen zum Angebot hinzugefügt`);
  }

  return (
    <>
      <div className="gc-header">
        <h1>Gartenhaus-Planer</h1>
        <p>Holzständerbau mit Flachdach-Gründach – Maße eingeben, Herstellkosten berechnen</p>
      </div>

      <div style={{ padding: '12px 16px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div className="gc-field">
            <label className="gc-label">Breite (mm)</label>
            <input className="gc-input" type="number" inputMode="decimal" value={input.breite} onChange={e => setField('breite', e.target.value)} />
          </div>
          <div className="gc-field">
            <label className="gc-label">Tiefe (mm)</label>
            <input className="gc-input" type="number" inputMode="decimal" value={input.tiefe} onChange={e => setField('tiefe', e.target.value)} />
          </div>
          <div className="gc-field">
            <label className="gc-label">Wandhöhe (mm)</label>
            <input className="gc-input" type="number" inputMode="decimal" value={input.wandhoehe} onChange={e => setField('wandhoehe', e.target.value)} />
          </div>
          <div className="gc-field">
            <label className="gc-label">Ständerabstand (mm)</label>
            <input className="gc-input" type="number" inputMode="decimal" value={input.staenderabstand} onChange={e => setField('staenderabstand', e.target.value)} />
          </div>
          <div className="gc-field">
            <label className="gc-label">Attika-Breite (mm)</label>
            <input className="gc-input" type="number" inputMode="decimal" value={input.attikaBreite} onChange={e => setField('attikaBreite', e.target.value)} />
          </div>
          <div className="gc-field">
            <label className="gc-label">Dachbalkenhöhe (mm)</label>
            <input className="gc-input" type="number" inputMode="decimal" value={input.dachbalkenhoehe} onChange={e => setField('dachbalkenhoehe', e.target.value)} />
          </div>
          <div className="gc-field">
            <label className="gc-label">Anzahl Fenster</label>
            <input className="gc-input" type="number" inputMode="numeric" value={input.anzahlFenster} onChange={e => setField('anzahlFenster', e.target.value)} />
          </div>
          <div className="gc-field">
            <label className="gc-label">Anzahl Türen</label>
            <input className="gc-input" type="number" inputMode="numeric" value={input.anzahlTueren} onChange={e => setField('anzahlTueren', e.target.value)} />
          </div>
        </div>

        <div className="gc-divider" />

        <div className="gc-pos-list" style={{ marginBottom: 8 }}>
          {zeilen.map(z => (
            <div key={z.id} className="gc-pos-item">
              <div className="gc-pos-name">{z.bezeichnung}</div>
              <div className="gc-pos-meta">
                <span>{z.menge.toFixed(2)} {z.einheit}</span>
                <span>{eur(z.materialpreis)}/Einh.</span>
                <span style={{ fontWeight: 700, color: 'var(--gc-green-dark)' }}>{eur(z.hk)}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          margin: '8px 0 16px',
          padding: '12px 14px',
          background: 'var(--gc-green-light)',
          border: '1.5px solid #c8ddb0',
          borderRadius: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontWeight: 700 }}>Herstellkosten gesamt</span>
          <span style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--gc-green-dark)' }}>{eur(gesamt)}</span>
        </div>

        <button className="gc-btn gc-btn-primary" style={{ width: '100%', marginBottom: 16 }} onClick={handleAddAll}>
          Alle Positionen zum Angebot hinzufügen
        </button>

        {toast && (
          <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--gc-green-dark)', marginBottom: 16 }}>
            {toast}
          </div>
        )}
      </div>
    </>
  );
}
