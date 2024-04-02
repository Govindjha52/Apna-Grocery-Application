import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';
import './home.css';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g. sending a request to the server
    console.log(`Email: ${email}, Password: ${password}, Role: ${role}`);
  }

  return (
    <div>
      <Header />
      <div className="heading">
        <h1>Welcome to Grocery App!</h1>
        <p>Login page of our grocery app.</p>
      </div>

      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="client">Client</option>
              <option value="seller">Seller</option>
            </select>
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login;