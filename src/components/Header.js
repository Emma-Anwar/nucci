// src/components/Header.js
import React from 'react';
import './Header.css'; // Add custom styles

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#token">Token</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
