import React, { useState, useEffect } from 'react';

/**
 * A React component that provides a theme toggle button.
 *
 * This component manages the theme state by reading from local storage and media queries.
 * It sets the theme on the document element data attribute and updates the local storage when toggled.
 * The button changes its label and icon based on the current theme.
 *
 * @returns A React functional component rendering a theme toggle button.
 */
export default function ThemeToggle() {
  /**
   * Determines the initial theme to be applied based on stored preferences and system settings.
   *
   * The function first checks if a theme is stored in `localStorage`. If the stored theme is either 'dark' or 'light',
   * it returns that value. If no preference is found, it checks the user's system color scheme using media queries.
   * If the system prefers dark mode, it returns 'dark'; otherwise, it defaults to 'light'.
   */
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

  /**
   * Toggles the theme between 'dark' and 'light'.
   */
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
