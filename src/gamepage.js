// GamePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './gamepage.css'
function GamePage({ game }) {
  return (
    <div className="game-page">
      <div className="game-header">
        <h1>{game.title}</h1>
        <Link to="/" className="back-link">Back to Games</Link>
      </div>
      <div className="game-details">
      <img src={game.src} alt={game.title} className="game-image" />
        <div className="description">
          <p>Description of the game...</p>
          <p>Release Date: {game.releaseDate}</p>
          <p>Genre: {game.genre}</p>
          <p>Platform: {game.platform}</p>
          <a href={game.buyLink} className="buy-link">Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
