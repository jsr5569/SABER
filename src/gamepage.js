// GamePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './gamepage.css'
import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};
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
          <p>{game.description}.</p>
          <p>Release Date: {game.releaseDate}</p>
          <p>Genre: {game.genre}</p>
          <p>Platform: {game.platform}</p>
          <p>Neutral: {game.neutral}</p>
        </div>
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  
      </div>
    </div>
  );
}

export default GamePage;
