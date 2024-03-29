// GameCard.js
import React from 'react';
import './gamecard.css'; // Import the CSS file for custom styles
import '@aws-amplify/ui-react/styles.css';
import { Card, Image, View, Flex, Badge, Divider, Heading, Button } from '@aws-amplify/ui-react';

function GameCard({ title, src, link }) {
  return (
    <a href={link} className="game-card">
      <div className="image-container">
        <img src={src} alt={title} className="game-card-image" />
        <div className="overlay">
          <h2 className="game-card-title">{title}</h2>
        </div>
      </div>
    </a>
  );
}

export default GameCard;
