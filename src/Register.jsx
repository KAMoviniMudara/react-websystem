import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import logo from './sltmobitel.svg';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('localhost:8080/api/v1/user/register', { userName, email, password });
      console.log(response.data);
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <img src={logo} alt="Main Logo" className="main-logo" />
      <div className="register-box">
        <h2 className="ui header centered teal">Register</h2>
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <div className="ui input">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="ui input">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="ui input">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
          </div>
          {error && <div className="ui red message">{error}</div>}
          <button className="ui button fluid large teal" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
