import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="brand-container">
        <img src={logo} alt="Tofy Visions Logo" className="logo" />
        <h1 className="brand-title">Tofy Visions</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Domov</Link></li>
          <li><Link to="/galerija">Galerija</Link></li>
          <li><Link to="/o-nas">O nas</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
