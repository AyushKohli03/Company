import React, { useState } from 'react';
import './Chatbot.css'; 

const fruitList = [
  { id: 1, name: 'Apple', description: 'A sweet red fruit' },
  { id: 2, name: 'Banana', description: 'A yellow fruit rich in potassium' },
  { id: 3, name: 'Orange', description: 'A citrus fruit with vitamin C' },
];

function Chatbot() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="container">
      <h1>Fruit Chatbot</h1>
      {selectedFruit ? (
        <div className="card">
          <h3>{selectedFruit.name}</h3>
          <p>{selectedFruit.description}</p>
          <button onClick={() => setSelectedFruit(null)}>Go Back</button>
        </div>
      ) : (
        <div className="fruit-list">
          {fruitList.map((fruit) => (
            <div className="card" key={fruit.id} onClick={() => setSelectedFruit(fruit)}>
              <h3>{fruit.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Chatbot;
