import React from 'react';
import '../styles/Card1.css'; // Import the CSS file for styling
import varrow from '../images/violetarrow.png';

function Card({ title, linkText }) {
  return (
    <div className="card1">
      <h2>{title}</h2>
      <a>{linkText} <img src={varrow}/> </a>
    </div>
  );
}

export default Card;
