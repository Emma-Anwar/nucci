// src/pages/About.js
import React from 'react';
import './About.css'; // Ensure this file exists and is properly styled

function About() {
  return (
    <div className="about">
      <h1>The Cutest Cat on Solana</h1>
      <p className="description">
        Meet $nucci, the most adorable meme coin to ever pounce into the Solana ecosystem! 🐱✨
        With its pawsitive vibes and whisker-twitching charm, $nucci is here to steal hearts and 
        make your crypto journey a whole lot more fun. It’s not just a coin; it’s a meowgical 
        adventure waiting to happen. Ready to join the purrfect revolution?
      </p>
      <a 
        href="https://jup.ag/swap/SOL-FbbqzbSrXZAbFcVbkLHfg6YHdvkbmnqBgBPXiTDzpump" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="buy-button"
      >
        Buy $nucci
      </a>
    </div>
  );
}

export default About;
