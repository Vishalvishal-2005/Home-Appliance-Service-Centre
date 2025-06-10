import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title="Toggle light or dark theme"
      type="button"
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--color-primary, #111827)',
        fontSize: 20,
        padding: '0.25rem 0.75rem',
        borderRadius: 12,
        transition: 'color 0.2s ease',
        userSelect: 'none',
      }}
      onMouseOver={e => (e.currentTarget.style.color = '#2563eb')}
      onMouseOut={e => (e.currentTarget.style.color = 'var(--color-primary, #111827)')}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
