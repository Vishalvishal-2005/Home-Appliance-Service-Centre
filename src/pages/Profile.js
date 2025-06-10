import React, { useState, useEffect } from 'react';

const Profile = () => {
  const username = localStorage.getItem('currentUser');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [photo, setPhoto] = useState(null); // base64 photo string or null

  useEffect(() => {
    const usersRaw = localStorage.getItem('hasUsers');
    const users = usersRaw ? JSON.parse(usersRaw) : [];
    const user = users.find(u => u.username === username);
    if (user) {
      setEmail(user.email);
      if (user.photo) setPhoto(user.photo); // load saved photo if any
    }
  }, [username]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle photo file selection
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setMessage('Please upload a valid image file.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result); // base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage('');
    if (!email.trim()) {
      setMessage('Email is required.');
      return;
    }
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    if (showPasswordInput && password && password.length < 6) {
      setMessage('New password must be at least 6 characters.');
      return;
    }

    const usersRaw = localStorage.getItem('hasUsers');
    const users = usersRaw ? JSON.parse(usersRaw) : [];
    const index = users.findIndex(u => u.username === username);
    if (index < 0) {
      setMessage('User not found.');
      return;
    }
    if (users.some((u, i) => i !== index && u.email === email)) {
      setMessage('Email already in use by another account.');
      return;
    }
    users[index].email = email;
    if (showPasswordInput && password) users[index].password = password;
    if (photo) users[index].photo = photo; // save photo as base64 string

    localStorage.setItem('hasUsers', JSON.stringify(users));
    setMessage('Profile updated successfully!');
    setTimeout(() => setMessage(''), 4000);
    setPassword('');
    setShowPasswordInput(false);
  };

  return (
    <section
      className="section-content"
      style={{
        maxWidth: 900,
        padding: '1rem 1.5rem',
        color: '#6b7280',
        fontSize: 18,
        lineHeight: 1.6,
        margin: 'auto',
        userSelect: 'none',
      }}
      aria-label={`Profile settings for ${username}`}
    >
      <h1 style={{ fontSize: 40, fontWeight: 700, color: '#111827', marginBottom: 24 }}>Profile Settings</h1>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {/* Photo Section */}
        <div style={{
          flex: '0 0 200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 12,
          padding: 16,
          backgroundColor: '#f9fafb',
          borderRadius: 12,
          boxShadow: '0 6px 18px rgba(0,0,0,0.05)'
        }}>
          <img
            src={photo || `https://ui-avatars.com/api/?name=${username}&background=2563eb&color=fff&rounded=true&size=128`}
            alt={`${username}'s avatar`}
            style={{ borderRadius: '50%', width: 128, height: 128, objectFit: 'cover' }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ marginTop: 12 }}
            aria-label="Upload profile photo"
          />
          <p style={{ fontWeight: 700, fontSize: 20, color: '#111827' }}>{username}</p>
          <p style={{ fontSize: 14, color: '#6b7280' }}>Member since 2024</p>
        </div>

        {/* Details & Password Section */}
        <form
          onSubmit={handleSubmit}
          noValidate
          style={{
            flex: '1 1 0',
            backgroundColor: '#f9fafb',
            padding: 32,
            borderRadius: 12,
            boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            color: '#111827',
            minWidth: 300,
          }}
        >
          {/* Details Box */}
          <div style={styles.box}>
            <h3 style={styles.boxTitle}>👤 Account Details</h3>

            <label htmlFor="profile-username" style={styles.label}>
              Username
            </label>
            <input
              id="profile-username"
              name="username"
              type="text"
              value={username}
              disabled
              aria-disabled="true"
              style={{ ...styles.input, backgroundColor: '#e5e7eb', cursor: 'not-allowed' }}
            />

            <label htmlFor="profile-email" style={styles.label}>
              Email
            </label>
            <input
              id="profile-email"
              name="email"
              type="email"
              value={email}
              required
              aria-required="true"
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          {/* Password Box with Toggle */}
          <div style={styles.box}>
            <h3 style={styles.boxTitle}>🔐 Change Password</h3>

            {!showPasswordInput ? (
              <button
                type="button"
                onClick={() => setShowPasswordInput(true)}
                style={{ ...styles.button, backgroundColor: '#2563eb', fontSize: 16, padding: '10px 14px' }}
              >
                Change Password
              </button>
            ) : (
              <>
                <label htmlFor="profile-password" style={{ ...styles.label, display: 'flex', alignItems: 'center', gap: 6 }}>
                  New Password
                  <span
                    tabIndex={0}
                    aria-label="Leave empty to keep current password"
                    role="tooltip"
                    style={{ cursor: 'help', borderBottom: '1.5px dotted #2563eb' }}
                  >
                    (?)
                  </span>
                </label>
                <input
                  id="profile-password"
                  name="password"
                  type="password"
                  placeholder="New password (min 6 characters)"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.input}
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordInput(false);
                    setPassword('');
                  }}
                  style={{
                    ...styles.button,
                    backgroundColor: '#9ca3af',
                    fontSize: 14,
                    padding: '8px 12px',
                    marginTop: 8,
                  }}
                >
                  Cancel
                </button>
              </>
            )}
          </div>

          {/* Save Button */}
          <button type="submit" style={styles.button} aria-label="Save profile changes">
            Save Changes
          </button>

          {/* Message */}
          {message && (
            <p
              style={{
                color: message.includes('successfully') ? 'green' : '#dc2626',
                fontWeight: 600,
                textAlign: 'center',
                marginTop: 8,
              }}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

const styles = {
  box: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  boxTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: '#111827',
  },
  label: {
    fontWeight: 600,
    color: '#111827',
  },
  input: {
    padding: '12px 16px',
    borderRadius: 12,
    border: '1.5px solid #d1d5db',
    fontSize: 16,
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#fff',
    outlineOffset: 2,
    outlineColor: '#2563eb',
    transition: 'border-color 0.2s ease',
  },
  button: {
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
  },
};

export default Profile;
