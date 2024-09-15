import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateFAQ.css'; 
function CreateFAQ() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/faqs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: Date.now(), question, answer }), 
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        navigate('/faq');
        
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create FAQ</h2>
      <label>
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <label>
        Answer:
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </label>
      <button type="submit">Create FAQ</button>
    </form>
  );
}

export default CreateFAQ;