import React from 'react';
import '../styles/HeroSection.css';
import Arrowfront from '../images/arrowfront.png'

function HeroSection() {
  return (
    <div className="hero-section">
      <h1>Cyber Risk Partners</h1>
      <p>SentinelOne partners are ready to respond to any type of security incident, and extend our technology, intelligence, and expertise to the complete security lifecycle.</p>
      <button className="cta-button">Find a Partner <img src={Arrowfront} alt="" /> </button>
    </div>
  );
}

export default HeroSection;
