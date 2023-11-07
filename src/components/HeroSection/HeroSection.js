import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Povezovanje umetnosti s srcem sveta</h1>
        <p>Ustvarite. Delite. Navdihnite. Pridružite se globalni skupnosti umetnikov in ljubiteljev umetnosti.</p>
        <button className="btn-explore">Raziščite galerijo</button>
      </div>
    </div>
  );
};

export default HeroSection;
