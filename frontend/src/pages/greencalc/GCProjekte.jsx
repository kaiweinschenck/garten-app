import { useState } from 'react';
import { useGC } from '../../context/GreenCalcContext';
import { calcAngebot, eur } from '../../data/preise';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function NewProjectSheet({ onClose, onCreate }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className="gc-sheet-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="gc-sheet">
        <h2>Neues Projekt</h2>
        <div className="gc-field">
          <label className="gc-label">Projektname *</label>
          <input
            className="gc-input"
            placeholder="z.B. Garten Müller, Hamburg"
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
          />
        </div>
        <div className="gc-field">
          <label className="gc-label">Adresse</label>
          <input
            className="gc-input"
            placeholder="Straße, Ort (optional)"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <button
          className="gc-btn gc-btn-primary"
          onClick={() => { if (name.trim()) { onCreate(name.trim(), address.trim()); onClose(); } }}
          disabled={!name.trim()}
          style={{ marginBottom: 10 }}
        >
          Projekt erstellen
        </button>
        <button className="gc-btn gc-btn-secondary" onClick={onClose}>Abbrechen</button>
      </div>
    </div>
  );
}

export default function GCProjekte() {
  const { state, activeProject, createProject, setActiveProject, updateProject, deleteProject } = useGC();
  const [showNew, setShowNew] = useState(false);

  const projects = state.projects;

  function handleDelete(proj) {
    if (!confirm(`Projekt "${proj.name}" wirklich löschen?`)) return;
    deleteProject(proj.id);
  }

  function toggleStatus(proj) {
    updateProject(proj.id, { status: proj.status === 'aktiv' ? 'abgeschlossen' : 'aktiv' });
  }

  return (
    <>
      <div className="gc-header">
        <h1>Projekte</h1>
        <p>{projects.length} Projekt{projects.length !== 1 ? 'e' : ''}</p>
      </div>

      <div style={{ padding: '12px 16px 0' }}>
        <button
          className="gc-btn gc-btn-primary"
          style={{ marginBottom: 16 }}
          onClick={() => setShowNew(true)}
        >
          + Neues Projekt
        </button>

        {/* Lohnkostensatz Einstellung */}
        <LohnSettings />

        {projects.length === 0 && (
          <div className="gc-empty">
            <div className="gc-empty-icon">🏗️</div>
            <p>Noch keine Projekte. Erstelle dein erstes Projekt!</p>
          </div>
        )}

        {/* Aktives Projekt */}
        {activeProject && (
          <>
            <div className="gc-section-title">Aktives Projekt</div>
            <ProjectCard
              proj={activeProject}
              isActive
              state={state}
              onActivate={() => {}}
              onDelete={() => handleDelete(activeProject)}
              onToggleStatus={() => toggleStatus(activeProject)}
            />
          </>
        )}

        {/* Andere Projekte */}
        {projects.filter(p => p.id !== state.activeProjectId).length > 0 && (
          <>
            <div className="gc-section-title">Weitere Projekte</div>
            {projects
              .filter(p => p.id !== state.activeProjectId)
              .map(proj => (
                <ProjectCard
                  key={proj.id}
                  proj={proj}
                  isActive={false}
                  state={state}
                  onActivate={() => setActiveProject(proj.id)}
                  onDelete={() => handleDelete(proj)}
                  onToggleStatus={() => toggleStatus(proj)}
                />
              ))
            }
          </>
        )}
      </div>

      {showNew && (
        <NewProjectSheet
          onClose={() => setShowNew(false)}
          onCreate={(name, addr) => createProject(name, addr)}
        />
      )}
    </>
  );
}

function ProjectCard({ proj, isActive, state, onActivate, onDelete, onToggleStatus }) {
  const summe = calcAngebot(proj.angebot, proj.markup, state.lohnkostensatz);
  return (
    <div className={`gc-proj-card ${proj.status !== 'aktiv' ? 'inactive' : ''}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
        <h3>{proj.name}</h3>
        <span className={`gc-badge ${proj.status === 'aktiv' ? 'gc-badge-aktiv' : 'gc-badge-done'}`}>
          {proj.status === 'aktiv' ? 'Aktiv' : 'Abgeschlossen'}
        </span>
      </div>
      <p>
        {proj.address && <span>{proj.address} · </span>}
        {formatDate(proj.createdAt)} · {proj.angebot.length} Pos.
        {proj.angebot.length > 0 && ` · ${eur(summe.brutto)} brutto`}
      </p>
      <div className="gc-proj-actions">
        {!isActive && (
          <button className="gc-btn gc-btn-primary gc-btn-sm" onClick={onActivate}>
            Aktivieren
          </button>
        )}
        <button className="gc-btn gc-btn-secondary gc-btn-sm" onClick={onToggleStatus}>
          {proj.status === 'aktiv' ? 'Abschließen' : 'Reaktivieren'}
        </button>
        <button className="gc-btn gc-btn-danger gc-btn-sm" onClick={onDelete}>
          Löschen
        </button>
      </div>
    </div>
  );
}

function LohnSettings() {
  const { state, setLohnkostensatz } = useGC();
  return (
    <div className="gc-settings-row" style={{ marginBottom: 16 }}>
      <div>
        <div className="gc-settings-label">Lohnkostensatz</div>
        <div style={{ fontSize: '0.74rem', color: '#777' }}>Gilt für alle Berechnungen</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <input
          className="gc-settings-input"
          type="number"
          inputMode="decimal"
          min="10"
          max="200"
          step="0.5"
          value={state.lohnkostensatz}
          onChange={e => setLohnkostensatz(parseFloat(e.target.value) || 45)}
        />
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#333' }}>€/h</span>
      </div>
    </div>
  );
}
