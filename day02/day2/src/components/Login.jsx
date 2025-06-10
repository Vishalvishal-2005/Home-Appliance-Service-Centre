import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../asserts/App.css';

import img1 from '../images/re.avif';
const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'Vishal' && password === 'pass123') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid Username or Password. Please try again.');
    }
  };

  return (
    <div>
      <div class="dim">
       <img src={img1} className="limg" alt=""></img>
       </div>
      <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <div class="fir">
        <label class="uname">
          Username:
          </label>
          <input type="text" className='linput' placeholder='Email or Phone' value={username} onChange={handleUsernameChange} />
        <br></br>
        <br></br>
        <label class="password">
          Password:
          </label>
          <input type="password" className='linput' placeholder='Password' value={password} onChange={handlePasswordChange} />
        <Link to="/Dashboard"><button className='buttonl' type="submit">Login</button></Link>
        <div class="forget">Forget Password</div>
        </div>
        <p className='p1'>Don't have an Account? <Link to="Signup">Signup</Link>
</p>
      </form>
      <p class="success">{message}</p>
    </div>
  );
};

export default Login;