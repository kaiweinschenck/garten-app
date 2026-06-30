import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LOHNKOSTENSATZ_DEFAULT } from '../data/preise';

const GCContext = createContext(null);

const DEFAULT_STATE = {
  activeProjectId: null,
  lohnkostensatz: LOHNKOSTENSATZ_DEFAULT,
  projects: [],
};

function genId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
}

function load() {
  try {
    const raw = localStorage.getItem('gc_state_v1');
    return raw ? JSON.parse(raw) : DEFAULT_STATE;
  } catch {
    return DEFAULT_STATE;
  }
}

export function GCProvider({ children }) {
  const [state, setState] = useState(load);

  useEffect(() => {
    try {
      localStorage.setItem('gc_state_v1', JSON.stringify(state));
    } catch { /* quota exceeded – silently ignore */ }
  }, [state]);

  const activeProject = state.projects.find(p => p.id === state.activeProjectId) || null;

  const createProject = useCallback((name, address) => {
    const id = genId();
    setState(s => ({
      ...s,
      activeProjectId: id,
      projects: [
        {
          id,
          name,
          address: address || '',
          createdAt: new Date().toISOString(),
          status: 'aktiv',
          angebot: [],
          markup: 25,
        },
        ...s.projects,
      ],
    }));
    return id;
  }, []);

  const setActiveProject = useCallback(id => {
    setState(s => ({ ...s, activeProjectId: id }));
  }, []);

  const updateProject = useCallback((id, patch) => {
    setState(s => ({
      ...s,
      projects: s.projects.map(p => p.id === id ? { ...p, ...patch } : p),
    }));
  }, []);

  const deleteProject = useCallback(id => {
    setState(s => ({
      ...s,
      activeProjectId: s.activeProjectId === id ? null : s.activeProjectId,
      projects: s.projects.filter(p => p.id !== id),
    }));
  }, []);

  const addPosition = useCallback((projectId, position) => {
    setState(s => ({
      ...s,
      projects: s.projects.map(p =>
        p.id === projectId
          ? { ...p, angebot: [...p.angebot, { id: genId(), ...position }] }
          : p
      ),
    }));
  }, []);

  const removePosition = useCallback((projectId, posId) => {
    setState(s => ({
      ...s,
      projects: s.projects.map(p =>
        p.id === projectId
          ? { ...p, angebot: p.angebot.filter(pos => pos.id !== posId) }
          : p
      ),
    }));
  }, []);

  const setMarkup = useCallback((projectId, markup) => {
    setState(s => ({
      ...s,
      projects: s.projects.map(p =>
        p.id === projectId ? { ...p, markup } : p
      ),
    }));
  }, []);

  const setLohnkostensatz = useCallback(val => {
    setState(s => ({ ...s, lohnkostensatz: val }));
  }, []);

  return (
    <GCContext.Provider value={{
      state,
      activeProject,
      createProject,
      setActiveProject,
      updateProject,
      deleteProject,
      addPosition,
      removePosition,
      setMarkup,
      setLohnkostensatz,
    }}>
      {children}
    </GCContext.Provider>
  );
}

export const useGC = () => {
  const ctx = useContext(GCContext);
  if (!ctx) throw new Error('useGC must be used within GCProvider');
  return ctx;
};
