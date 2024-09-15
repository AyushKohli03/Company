import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to Fruit.ai</h1>
      <div className="button-group">
        <button onClick={() => navigate('/chatbot')}>Chatbot</button>
        <button onClick={() => navigate('/translator')}>Translator</button>
        <button onClick={() => navigate('/faq')}>FAQ</button>
        <button onClick={() => navigate('/about')}>About</button>
      </div>
    </div>
  );
}

export default Home;
