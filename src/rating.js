import React from 'react';
import './rating.css'; 
function Rating({ score }) {
  let colorClass = '';

  
  if (score >= 90) {
    colorClass = 'score-green'; 
  } else if (score >= 70) {
    colorClass = 'score-yellow'; 
  } else {
    colorClass = 'score-red'; 
  }

  return (
    
    <div className="rating-container">
      <span className="rating-label">Metacritic Score:</span>
      <div className={`rating-square ${colorClass}`}>
        <span className="score">{score}</span>
      </div>
      
    </div>
  );
}

export default Rating;
