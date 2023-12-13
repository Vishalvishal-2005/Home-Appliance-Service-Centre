import React, { useState } from 'react';
import './App2.css';
import img2 from "./images/download (1).png";
const Signup = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password === retypePassword) {
      setMessage('Successfully Registered!');
    } else {
      setMessage('Passwords do not match. Please try again.');
    }
  };

  return (
    <div>
      <div className='imf'>
        <h1 className='msg'>Home Appliance and Serivice<br></br> Help Center</h1>
        </div>
        <img src={img2} alt="home appliances service"/>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="fir">
          <span className="uname">
            Username:
          </span>
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          <br />
          <br />
          <span className="uname">
            Email:
          </span>
          <input type="email" placeholder="Email or Phone" value={email} onChange={handleEmailChange} />
          <br />
          <br />
          <span className="uname">
            Password:
          </span>
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <br></br>
          <br></br>
          <span className="uname">
            Re-type Password:
          </span>
          <input type="password" placeholder="Re-type password" value={retypePassword} onChange={handleRetypePasswordChange} />
          <br />
          <br />
          <button type="submit">Register</button>
          <p>You Already have an Account?  <a href="Login.jsx" class="signin-link" onClick={props.toggleForm}>Sign In</a></p>
        </div>
      </form>
      <p className="success">{message}</p>
    </div>
  );
};

export default Signup;