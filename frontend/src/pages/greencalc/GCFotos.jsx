import { useState, useRef, useCallback } from 'react';
import { useGC } from '../../context/GreenCalcContext';

function genId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
}

function compressImage(file, maxWidth = 1200) {
  return new Promise(resolve => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/jpeg', 0.75));
    };
    img.src = url;
  });
}

export default function GCFotos() {
  const { activeProject, updateProject } = useGC();
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);
  const cameraRef = useRef(null);
  const galleryRef = useRef(null);

  const fotos = activeProject?.fotos || [];

  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2500);
  }

  const handleFiles = useCallback(async files => {
    if (!files?.length) return;
    const projId = activeProject?.id;
    if (!projId) { showToast('Bitte zuerst ein Projekt aktivieren'); return; }

    const neu = [];
    for (const file of Array.from(files).slice(0, 10)) {
      if (!file.type.startsWith('image/')) continue;
      const dataUrl = await compressImage(file);
      neu.push({ id: genId(), dataUrl, bezeichnung: file.name.replace(/\.[^.]+$/, ''), timestamp: new Date().toISOString() });
    }
    if (!neu.length) return;
    updateProject(projId, { fotos: [...fotos, ...neu] });
    showToast(`${neu.length} Foto${neu.length > 1 ? 's' : ''} hinzugefügt`);
  }, [activeProject, fotos, updateProject]);

  function deleteFoto(id) {
    if (!activeProject) return;
    updateProject(activeProject.id, { fotos: fotos.filter(f => f.id !== id) });
  }

  function updateCaption(id, val) {
    if (!activeProject) return;
    updateProject(activeProject.id, {
      fotos: fotos.map(f => f.id === id ? { ...f, bezeichnung: val } : f),
    });
  }

  return (
    <>
      <div className="gc-header">
        <h1>Fotos</h1>
        <p>{activeProject ? activeProject.name : 'Kein Projekt aktiv'}</p>
      </div>

      <div style={{ padding: '12px 16px 0' }}>
        {/* Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
          <button
            className="gc-btn gc-btn-primary"
            onClick={() => cameraRef.current?.click()}
            disabled={!activeProject}
          >
            📷 Kamera
          </button>
          <button
            className="gc-btn gc-btn-secondary"
            onClick={() => galleryRef.current?.click()}
            disabled={!activeProject}
          >
            🖼️ Galerie
          </button>
        </div>

        {/* Hidden inputs */}
        <input
          ref={cameraRef}
          type="file"
          accept="image/*"
          capture="environment"
          multiple
          style={{ display: 'none' }}
          onChange={e => handleFiles(e.target.files)}
        />
        <input
          ref={galleryRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={e => handleFiles(e.target.files)}
        />

        {!activeProject && (
          <div className="gc-empty">
            <div className="gc-empty-icon">📷</div>
            <p>Kein Projekt aktiv. Bitte zuerst ein Projekt auswählen.</p>
          </div>
        )}

        {activeProject && fotos.length === 0 && (
          <div className="gc-empty">
            <div className="gc-empty-icon">🗂️</div>
            <p>Noch keine Fotos. Rechnung, Lieferschein oder Baufortschritt aufnehmen.</p>
          </div>
        )}

        {/* Foto-Grid */}
        {fotos.length > 0 && (
          <>
            <div className="gc-section-title">{fotos.length} Foto{fotos.length !== 1 ? 's' : ''}</div>
            <div className="gc-foto-grid">
              {fotos.map(foto => (
                <div key={foto.id} style={{ marginBottom: 4 }}>
                  <div className="gc-foto-card">
                    <img src={foto.dataUrl} alt={foto.bezeichnung} />
                    <button className="gc-foto-del" onClick={() => deleteFoto(foto.id)}>✕</button>
                    <div className="gc-foto-caption">{foto.bezeichnung}</div>
                  </div>
                  <input
                    type="text"
                    value={foto.bezeichnung}
                    onChange={e => updateCaption(foto.id, e.target.value)}
                    style={{
                      width: '100%',
                      marginTop: 4,
                      padding: '5px 8px',
                      border: '1px solid #e0e0e0',
                      borderRadius: 6,
                      fontSize: '0.78rem',
                      background: '#fff',
                      outline: 'none',
                    }}
                    placeholder="Beschriftung…"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {toast && <div className="gc-toast">{toast}</div>}
    </>
  );
}
