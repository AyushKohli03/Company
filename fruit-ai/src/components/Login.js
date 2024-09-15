import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    const trimmedUserId = userId.trim();
    const trimmedPassword = password.trim();

    if (trimmedUserId === 'admin' && trimmedPassword === '1234') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <h1>Login to Fruit.ai</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="UserID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
