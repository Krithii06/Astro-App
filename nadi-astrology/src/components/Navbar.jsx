import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home', icon: '☉' },
  { path: '/chart', label: 'Birth Chart', icon: '⬡' },
  { path: '/love', label: 'Love & Marriage', icon: '♀' },
  { path: '/medical', label: 'Medical', icon: '♄' },
  { path: '/career', label: 'Career', icon: '♃' },
  { path: '/foreign', label: 'Foreign Travel', icon: '☊' },
  { path: '/parents', label: 'Parents', icon: '☽' },
  { path: '/dasha', label: 'Dasha', icon: '✦' },
  { path: '/yogas', label: 'Yogas', icon: '★' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      background: 'rgba(13,10,26,0.95)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.4rem', color: 'var(--gold)', lineHeight: 1 }}>☽</span>
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)', fontSize: '0.95rem', letterSpacing: '0.12em', lineHeight: 1.2 }}>NADI JYOTISH</div>
            <div style={{ color: 'var(--text3)', fontSize: '0.65rem', letterSpacing: '0.2em' }}>COSMIC PREDICTIONS</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center' }}>
          {navItems.slice(1).map(item => (
            <Link key={item.path} to={item.path}
              style={{
                textDecoration: 'none',
                padding: '6px 12px',
                fontFamily: "'Cinzel', serif",
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                color: location.pathname === item.path ? 'var(--gold)' : 'var(--text2)',
                borderBottom: location.pathname === item.path ? '2px solid var(--gold)' : '2px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              <span style={{ marginRight: 4 }}>{item.icon}</span>{item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
