import React, { useState } from "react";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    // Simple email regex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!username.trim() || !email.trim() || !password) {
      setMessage("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    // Check if username or email already exists in localStorage
    const usersRaw = localStorage.getItem("hasUsers");
    const users = usersRaw ? JSON.parse(usersRaw) : [];
    if (users.find((u) => u.username === username)) {
      setMessage("Username already taken.");
      return;
    }
    if (users.find((u) => u.email === email)) {
      setMessage("Email already registered.");
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("hasUsers", JSON.stringify(users));
    localStorage.setItem("currentUser", username);
    if (typeof onSignup === "function") onSignup(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="signup-form-title"
      noValidate
      style={{
        maxWidth: 480,
        backgroundColor: "#f9fafb",
        padding: "2rem",
        borderRadius: "0.75rem",
        boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        fontFamily: "'Poppins', sans-serif",
        color: "#111827",
      }}
    >
      <h2
        id="signup-form-title"
        style={{
          fontWeight: 700,
          fontSize: "2rem",
          marginBottom: "0.5rem",
        }}
      >
        Create a New Account
      </h2>

      <label
        htmlFor="signup-username"
        style={{ fontWeight: 600, color: "#111827" }}
      >
        Username
      </label>
      <input
        type="text"
        id="signup-username"
        name="username"
        autoComplete="username"
        required
        aria-required="true"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={inputStyle}
      />

      <label
        htmlFor="signup-email"
        style={{ fontWeight: 600, color: "#111827" }}
      >
        Email
      </label>
      <input
        type="email"
        id="signup-email"
        name="email"
        autoComplete="email"
        required
        aria-required="true"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      <label
        htmlFor="signup-password"
        style={{ fontWeight: 600, color: "#111827" }}
      >
        Password
      </label>
      <input
        type="password"
        id="signup-password"
        name="password"
        autoComplete="new-password"
        required
        aria-required="true"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputStyle}
      />

      <button
        type="submit"
        aria-label="Submit signup form"
        style={submitButtonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      >
        Signup
      </button>

      {message && (
        <p
          role="alert"
          style={{
            color: message.includes("successfully") ? "green" : "#dc2626",
            fontWeight: 600,
            textAlign: "center",
            marginTop: 8,
            userSelect: "none",
          }}
        >
          {message}
        </p>
      )}
    </form>
  );
};

const inputStyle = {
  padding: "0.75rem 1rem",
  borderRadius: "0.75rem",
  border: "1.5px solid #d1d5db",
  fontSize: "1rem",
  fontFamily: "'Poppins', sans-serif",
  backgroundColor: "#fff",
  outlineOffset: 2,
  outlineColor: "#2563eb",
  transition: "border-color 0.2s ease",
};

const submitButtonStyle = {
  backgroundColor: "#2563eb",
  color: "#fff",
  fontWeight: 700,
  fontSize: "1.125rem",
  padding: "0.85rem 0",
  borderRadius: "0.75rem",
  border: "none",
  cursor: "pointer",
  userSelect: "none",
  transition: "background-color 0.2s ease",
};

export default Signup;
