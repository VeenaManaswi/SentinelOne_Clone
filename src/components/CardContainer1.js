import React from 'react';
import Card from './Card1';
import '../styles/Card1.css';

function CardContainer1() {
  return (
    <div className="card-container1">
      <Card title="The State of Cyber Law" linkText="Learn More" />
      <Card title="Charleston CyberLaw Forum: Cyber Insurers" linkText="Learn More" />
      <Card title="Charleston CyberLaw Forum: Hacking Incident Response" linkText="Learn More" />
    </div>
  );
}

export default CardContainer1;
