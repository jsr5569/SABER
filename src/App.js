// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Collection } from '@aws-amplify/ui-react';
import GameCard from './gamecard';
import GamePage from './gamepage'; // Assuming this is where your individual game pages are located
import './App.css'

function App() {
  const games = [
    {
      title: 'Call of Duty',
      src: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Black_Ops_3.jpg',
      link: '/call-of-duty',
    },
    {
      title: 'Spider-Man 2',
      src: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/2028edeaf4c0b60142550a3d6e024b6009853ceb9f51591e.jpg',
      link: '/spider-man-2',
    },
    {
      title: 'Minecraft',
      src: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f',
      link: '/minecraft',
    },
    // Other game objects
  ];

  return (
    <Router>
      <div className="container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <Collection items={games} type="list" direction="row" gap="20px" wrap="nowrap">
                {(item, index) => (
                  <GameCard key={index} {...item} />
                )}
              </Collection>
            } />
            {games.map((game) => (
              <Route key={game.title} path={game.link} element={<GamePage game={game} />} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
