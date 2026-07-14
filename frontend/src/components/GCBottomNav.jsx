import { NavLink } from 'react-router-dom';

const TABS = [
  {
    to: '/calc',
    end: true,
    label: 'Home',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
  },
  {
    to: '/calc/rechner',
    label: 'Rechner',
    icon: (
      <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="10" y2="18"/><line x1="14" y1="18" x2="16" y2="18"/></svg>
    ),
  },
  {
    to: '/calc/angebot',
    label: 'Angebot',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
  },
  {
    to: '/calc/fotos',
    label: 'Fotos',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
    ),
  },
  {
    to: '/calc/projekte',
    label: 'Projekte',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
    ),
  },
  {
    to: '/calc/haus',
    label: '3D Haus',
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2 3 7v10l9 5 9-5V7z"/><polyline points="3 7 12 12 21 7"/><line x1="12" y1="12" x2="12" y2="22"/></svg>
    ),
  },
  {
    to: '/calc/planer',
    label: 'Planer',
    icon: (
      <svg viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
    ),
  },
];

export default function GCBottomNav() {
  return (
    <nav className="gc-nav">
      {TABS.map(tab => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.end}
          className={({ isActive }) => `gc-nav-item${isActive ? ' active' : ''}`}
        >
          {tab.icon}
          {tab.label}
        </NavLink>
      ))}
    </nav>
  );
}
