import React from 'react';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';

export default function Header({ isLoggedIn, onLogout }) {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo} tabIndex={0} aria-label="Home Appliance Service Portal Logo">
          Home Appliance Service
        </div>
        <nav style={styles.nav} aria-label="Primary navigation">
        <NavLinks isLoggedIn={isLoggedIn} onLogout={onLogout} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    zIndex: 100,
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 700,
    fontSize: 24,
    color: '#111827',
    userSelect: 'none',
    cursor: 'default',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
};
