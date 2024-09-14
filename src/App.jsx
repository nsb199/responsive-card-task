import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom CSS for additional styling

const App = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const cardClass = (index) => (
    activeCard === index ? 'card active' : 'card'
  );

  return (
    <div className="container mt-4">
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((num, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className={cardClass(index)}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-body">
                <h5 className="card-title">Card {num}</h5>
                <p className="card-text">This is card number {num}.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
