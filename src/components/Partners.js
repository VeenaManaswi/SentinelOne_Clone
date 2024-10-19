import React from 'react';
import '../styles/Partners.css';

const Partners = () => {
  const partners = [
    { name: 'AON', description: 'Insurance & IR Services', linkLabel: 'Learn More', img: require('../images/Aon1.png') },
    { name: 'Booz Allen Hamilton', description: 'IR & Proactive Services', linkLabel: 'Learn More', img: require('../images/Boozallen.png') },
    { name: 'Chubb', description: 'Cyber Insurance', linkLabel: 'Learn More', img: require('../images/Chubb.png') },
    { name: 'Beazley', description: 'Cyber Insurance', linkLabel: 'Learn More', img: require('../images/Beazley.png') },
  ];

  return (
    <div className="partners-section">
      <h2>Featured Partners</h2>
      <div className="card-container">
        {partners.map((partner, index) => (
          <div className="card" key={index}>
            <img src={partner.img} alt={partner.name} />
            <hr />
            <div>
            <h3>{partner.name}</h3>
            <p>{partner.description}</p></div>
            <a href="#" className="learn-more">
              {partner.linkLabel} &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
