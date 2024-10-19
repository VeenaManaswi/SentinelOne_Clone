import React from 'react';
import '../styles/Card2.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service">
      <img src={icon} className="service-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const PartnerEcosystem = () => {
  const servicesData = [
    {
      icon: require('../images/incidentresponse.png'),
      title: 'Incident Response',
      description:
        'Contain breaches, remediate impacted assets, and get back up and running quickly with a global network of IR firms empowered by the SentinelOne Singularity platform.',
    },
    {
      icon: require('../images/triangle.png'),
      title: 'Cyber Insurance',
      description:
        'Reduce losses caused by a breach by transferring risk to our cyber insurance partners. Our partners also provide software, education, and training to help prevent future incidents.',
    },
    {
      icon: require('../images/doc.png'),
      title: 'Data Privacy & Security Law',
      description:
        'Enlist our law partners to investigate the scope of an incident—including technical & regulatory impact and necessary disclosures—promptly and at the least expense.',
    },
  ];

  return (
    <div className="partner-ecosystem">
      <h1>SentinelOne’s Partner Ecosystem</h1>
      <p>Stay prepared, responsive, and confident with the help of our Cyber Risk Partners.
      </p>
      <div className="cardContainer">
      <div className="services">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default PartnerEcosystem;
