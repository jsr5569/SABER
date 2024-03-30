// GamePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './gamepage.css'
import { Chart } from "react-google-charts";

function GamePage({ game }) {
  
  const data = [
    ["Task", "Hours per Day"],
    ["Positive", game.positive],
    ["Negative", game.negative],
    ["Neutral", game.neutral]
  ]
  const options = {
    title: "Sentiment Analysis",
    backgroundColor: 'transparent',
    titleTextStyle: {
      color: 'white', // Set title text color to red
      fontSize: 20 // Set title font size
    },
    legendTextStyle: {
      color: 'white', // Set legend text color to blue
      fontSize: 14 // Set legend font size
    },
    height:500,
    width:700
  };
  
  return (
    <div className="game-page">
      <div className="game-header">
        <h1>{game.title}</h1>
        <Link to="/" className="back-link">Back to Games</Link>
      </div>
      <div className="game-details">
        <img src={game.src} alt={game.title} className="game-image" />
        <div className="description">
          <p>Description:
            {game.description}.</p>
          <p>Release Date: {game.releaseDate}</p>
          <p>Genre: {game.genre}</p>
          <p>Platform: {game.platform}</p>
        </div>
        <div className="chart-container">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
    </div>
  );
}

export default GamePage;