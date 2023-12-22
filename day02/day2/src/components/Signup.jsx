import React, { useState } from 'react';
import '../asserts/App2.css';
import img2 from "../images/download (1).png";
import {Link} from 'react-router-dom';
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

    if (password === retypePassword&&password!=null&&retypePassword!=null) {
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
        <img src={img2} alt="home appliances service" className='img2'/>
      <form className='form2' onSubmit={handleSubmit}>
        <h1 class='head2'>Sign Up</h1>
        <div className="fir1">
          <span className="uname1">
            Username:
          </span>
          <input type="text" className='input2' placeholder="Username" value={username} onChange={handleUsernameChange} />
          <br />
          <br />
          <span className="uname1">
            Email:
          </span>
          <input type="email" className='input2' placeholder="Email or Phone" value={email} onChange={handleEmailChange} />
          <br />
          <br />
          <span className="uname1">
            Password:
          </span>
          <input type="password" className='input2' placeholder="Password" value={password} onChange={handlePasswordChange} />
          <br></br>
          <br></br>
          <span className="uname1">
            Re-type Password:
          </span>
          <input type="password" className='input2' placeholder="Re-type password" value={retypePassword} onChange={handleRetypePasswordChange} />
          <br />
          <br />
          <button className='button2' type="submit">Register</button>
          <p className='para2'>You Already have an Account?  <Link to="/">Login</Link></p>
        </div>
      </form>
      <p className="success">{message}</p>
    </div>
  );
};

export default Signup;