import { Link } from 'react-router-dom';
import { PROJEKTE } from '../data/bautagebuch';

function PhaseClip({ phase }) {
  if (!phase.videoSrc) {
    return (
      <div className="bt-clip bt-clip-empty">
        <span>{phase.titel}</span>
        <small>Video folgt in Kürze</small>
      </div>
    );
  }

  return (
    <div className="bt-clip">
      <video
        src={phase.videoSrc}
        poster={phase.poster || undefined}
        controls
        playsInline
        preload="metadata"
      />
      <div className="bt-clip-label">{phase.titel}</div>
    </div>
  );
}

export default function Bautagebuch() {
  return (
    <div className="container" style={{ maxWidth: 1000 }}>
      <div className="card">
        <Link to="/" className="nav-back">← Zur Gartenanfrage</Link>
        <h1>Das Bautagebuch</h1>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>
          Lückenlos dokumentiert von der ersten Schaufel bis zur fertigen Anlage —
          unsere Baustellen in kurzen Videoclips, chronologisch nach Bauphase sortiert.
        </p>
      </div>

      {PROJEKTE.map((projekt) => (
        <div className="card" key={projekt.id}>
          <h2>{projekt.titel}</h2>
          <p style={{ color: '#777', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            {projekt.ort} · {projekt.typ} · {projekt.zeitraum}
          </p>
          <p style={{ color: '#444', marginBottom: '1.25rem' }}>{projekt.beschreibung}</p>

          <div className="bt-clip-grid">
            {projekt.phasen.map((phase, i) => (
              <PhaseClip phase={phase} key={i} />
            ))}
          </div>
        </div>
      ))}

      <div className="card" style={{ textAlign: 'center' }}>
        <h2>Ihr Projekt könnte das nächste sein</h2>
        <p style={{ color: '#666', marginBottom: '1.25rem' }}>
          Wir dokumentieren jede Baustelle vom ersten Tag an — fragen Sie unverbindlich an.
        </p>
        <Link to="/" className="btn btn-primary" style={{ display: 'inline-block', width: 'auto', padding: '0.75rem 2rem' }}>
          Jetzt Anfrage stellen
        </Link>
      </div>
    </div>
  );
}
