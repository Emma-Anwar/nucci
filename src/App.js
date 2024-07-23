// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import './components/Header.css';
import './components/Footer.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Add the image element here */}
        <img src={`${process.env.PUBLIC_URL}/header-image.jpg`} alt="Header" className="header-image" />

        {/* Social media icons section */}
        <div className="social-media-icons">
          <a href="https://x.com/nucci_sol" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/twitter-icon.png`} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://t.me/NUCCI_COMMUNITY" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/telegram-icon.png`} alt="Telegram" className="social-icon" />
          </a>
          <a href="https://dexscreener.com/solana/4XaQeMBifCV9tBJejUgmk4xvEvzP4UCdxLuMyYsTQxWz" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/dexscreener-icon.png`} alt="DexScreener" className="social-icon" />
          </a>
          <a href="https://jup.ag/swap/SOL-FbbqzbSrXZAbFcVbkLHfg6YHdvkbmnqBgBPXiTDzpump" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/jupiter-icon.png`} alt="Jupiter" className="social-icon" />
          </a>
        </div>

        <header className="App-header">
          <nav>
            <ul className="nav-list">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              {/* Removed Contact link */}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Removed route for Contact page */}
          </Routes>
        </main>
        <footer className="App-footer">
          <p>&copy; 2024 Nucci Coin. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;











