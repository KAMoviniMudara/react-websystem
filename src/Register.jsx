import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';


const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/register', { userName, email, password });
      setSuccess('Registration successfull!');
      setError('');
      console.log(response.data);
    } catch (error) {
      setError('Registration failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="register-container">  
      <div className="register-box">
        <h2 className="ui header centered teal">REGISTER</h2>
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
          {success && <div className="ui green message">{success}</div>}
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
