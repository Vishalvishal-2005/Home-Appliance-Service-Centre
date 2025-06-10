// components/NavLinks.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function NavLinks({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const linkStyle = {
    fontWeight: 600,
    fontSize: 16,
    color: '#111827',
    padding: '0.25rem 0.75rem',
    borderRadius: 12,
    textDecoration: 'none',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    marginRight: '1rem',
  };

  const activeStyle = {
    backgroundColor: '#2563eb',
    color: '#fff',
    transform: 'scale(1.05)',
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        Services
      </NavLink>

      {isLoggedIn ? (
        <>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
          >
            Profile
          </NavLink>
          <button
            onClick={handleLogout}
            style={{
              ...linkStyle,
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: '0.25rem 0.75rem',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#111827';
              e.currentTarget.style.transform = 'none';
            }}
            aria-label="Logout"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
          >
            Signup
          </NavLink>
        </>
      )}
    </>
  );
}
