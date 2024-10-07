// RandomSelection.jsx
import React from 'react';

const templates = ['Coffee Shop', 'Restaurant', 'Foodly'];

const getRandomTemplate = () => {
  const randomIndex = Math.floor(Math.random() * templates.length);
  return templates[randomIndex];
};

const RandomSelection = () => {
  const randomTemplate = getRandomTemplate();

  return (
    <div className="random-selection">
      <h2>Random Template Selection</h2>
      <p>Selected Template: <strong>{randomTemplate}</strong></p>
    </div>
  );
};

export default RandomSelection;
