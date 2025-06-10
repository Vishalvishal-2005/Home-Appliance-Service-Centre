import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setMessage('');

    if (!username.trim() || !password.trim()) {
      setMessage('Please fill in all fields.');
      return;
    }

    // Get users from localStorage
    const usersRaw = localStorage.getItem('hasUsers');
    const users = usersRaw ? JSON.parse(usersRaw) : [];

    // Find matching user
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', username);
      onLogin(true); // inform App that login is successful
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 480,
        backgroundColor: '#f9fafb',
        padding: 32,
        borderRadius: 12,
        boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        userSelect: 'none',
        color: '#111827',
        marginTop: 50,
      }}
      aria-labelledby="login-form-title"
      noValidate
    >
      <h2 id="login-form-title" style={{ fontWeight: 700, fontSize: 32, marginBottom: 8 }}>
        Login to Your Account
      </h2>

      <label htmlFor="login-username" style={{ fontWeight: 600, color: '#111827' }}>
        Username
      </label>
      <input
        id="login-username"
        name="username"
        type="text"
        autoComplete="username"
        required
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={inputStyle}
      />

      <label htmlFor="login-password" style={{ fontWeight: 600, color: '#111827' }}>
        Password
      </label>
      <input
        id="login-password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={inputStyle}
      />

      <button
        type="submit"
        style={buttonStyle}
        aria-label="Submit login form"
      >
        Login
      </button>

      {message && <p style={{ color: '#dc2626', fontWeight: 600, textAlign: 'center' }}>{message}</p>}
    </form>
  );
};

// Input styling
const inputStyle = {
  padding: '12px 16px',
  borderRadius: 12,
  border: '1.5px solid #d1d5db',
  fontSize: 16,
  fontFamily: "'Poppins', sans-serif",
  backgroundColor: '#fff',
  outlineOffset: 2,
  outlineColor: '#2563eb',
  transition: 'border-color 0.2s ease',
};

// Button styling
const buttonStyle = {
  backgroundColor: '#111827',
  color: 'white',
  fontWeight: 700,
  fontSize: 18,
  padding: '14px 0',
  borderRadius: 12,
  border: 'none',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'background-color 0.2s ease',
};

export default Login;
