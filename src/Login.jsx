import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Icon } from 'semantic-ui-react';

import logoImage1 from './logo.png';
import logoImage2 from './logo2.png';
import logo from './sltmobitel.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Logging in...');
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-box">
      <div className="image-container">
        <img src={logoImage2} alt="First Logo" className="left-logo" />
        <img src={logoImage1} alt="Second Logo" className="right-logo" />
      </div>
      <img src={logo} alt="Main Logo" className="main-logo" />
      <h2 className="ui header centered teal">Welcome Back!</h2>
      <div className="login-content">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <div className="ui icon input">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail address"
                required
              />
              <i className="user icon"></i>
            </div>
          </div>
          <div className="field">
            <div className="ui icon input">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <i className="lock icon"></i>
            </div>
          </div>
          {error && <div className="ui red message">{error}</div>}
          <button className="ui button fluid large teal" type="submit">
            Login
          </button>
        </form>
        <div className="ui message">
          New to us?{' '}
          <Link to="/register">
            Sign Up <Icon name="arrow right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
