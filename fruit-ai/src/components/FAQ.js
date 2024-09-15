import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

function FAQPage() {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/faqs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFaqs(data))
      .catch(error => setError(error));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:8000/faqs/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        
        setFaqs(faqs.filter(faq => faq.id !== id));
      })
      .catch(error => console.error('Error:', error));
  }

  return (
    <div className="faq-page">
      <h1>FAQs</h1>
      {error && <p className="error-message">Error: {error.message}</p>}
      <div className="button-container">
        <Link to="/faq/create" className="btn btn-primary">Create New FAQ</Link>
      </div>
      {faqs.length === 0 ? (
        <p>No FAQs available.</p>
      ) : (
        faqs.map(faq => (
          <div key={faq.id} className="faq-item">
            <h4 className="faq-question">{faq.question}</h4>
            <h4 className="faq-answer">{faq.answer}</h4>
            <div className="faq-actions">
              <Link to={`/faq/update/${faq.id}`} className="btn btn-secondary">Edit</Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(faq.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default FAQPage;
