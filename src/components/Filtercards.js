import React, { useState } from 'react';
import '../styles/Filtercards.css'; // Updated path to CSS file
import partnersData from './DataFiltercards.js'; // Ensure this file exports the correct data format

const PartnerCards = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    New: false,
    'IR & Proactive Services': false,
    'Data Privacy Law': false,
    'Cyber Insurance': false,
  });

  const handleFilterChange = (category) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: !prevFilters[category],
    }));
  };

  const filteredPartners = partnersData.filter((partner) => {
    const selectedCategories = Object.keys(selectedFilters).filter(
      (filter) => selectedFilters[filter]
    );
    // Show all partners if no filter is selected
    if (selectedCategories.length === 0) return true; 
    // Return true if partner's category matches any of the selected categories
    return selectedCategories.some((category) => partner.category.includes(category));
  });

  return (
    <div className="partner-cards-section">
      <br /><br /><br /><br /><br />

      {/* Filter checkboxes */}
      <div className="filter-options">
        {Object.keys(selectedFilters).map((category) => (
          <label key={category} className="filter-option">
            <input
              type="checkbox"
              checked={selectedFilters[category]}
              onChange={() => handleFilterChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="cards-wrapper">
        {filteredPartners.length > 0 ? (
          filteredPartners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <h6 className="card-category">{partner.category}</h6>
              <hr className="card-divider" />
              <img src={partner.icon} alt={partner.name} className="partner-card-img" />
              <hr className="card-divider" />
              <div className="card-content">
                <h3 className="partner-card-title">{partner.name}</h3>
                <p className="partner-card-location">{partner.location}</p>
              </div>
              <a href={partner.website} className="card-link">
                Visit Website &rarr;
              </a>
            </div>
          ))
        ) : (
          <p>No partners available.</p> // Message if no partners match the filters
        )}
      </div>
    </div>
  );
};

export default PartnerCards;
