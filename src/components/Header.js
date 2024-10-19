import React from 'react';
import SentinelOne from '../images/SentinelOne.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <img src={SentinelOne} alt="SentinelOne" />
          <ul>
          <li>Platform</li>
          <li>Why SentinelOne?</li>
          <li>Services</li>
          <li>Partners</li>
          <li>Resources</li>
          <li>About</li>
          <button>Get a Demo</button>
        </ul>
        
      </nav>
    </header>
  );
}

export default Header;
