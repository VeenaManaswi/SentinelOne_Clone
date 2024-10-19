import React from 'react';
import '../styles/PartnerEcosystem.css';

function PartnerEcosystem() {
  return (
    <div className="ecosystem-section">
      <h2>SentinelOne’s Partner Ecosystem</h2>
      <p>Stay prepared, responsive, and confident with the help of our Cyber Risk Partners.</p>
      <div className="services">
        <div className="service-card">
          <h3>Incident Response</h3>
          <p>Contain breaches, remediate impacted assets, and prevent re-infection.</p>
        </div>
        <div className="service-card">
          <h3>Cyber Insurance</h3>
          <p>Reduce losses caused by a breach with specialized coverage.</p>
        </div>
        <div className="service-card">
          <h3>Data Privacy & Security Law</h3>
          <p>Enlist law partners to investigate incidents and ensure compliance.</p>
        </div>
      </div>
      <h2>Featured Partners</h2>
      <div className="partners-grid">
        <div className="partner-card">Partner 1</div>
        <div className="partner-card">Partner 2</div>
        <div className="partner-card">Partner 3</div>
      </div>
    </div>
  );
}

export default PartnerEcosystem;
