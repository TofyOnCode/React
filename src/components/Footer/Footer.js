import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-about">
            <h3>O Tofy Visions</h3>
            <p>Kraj, kjer umetnost sreča srca ljudi. Spoznajte nove umetnike, odkrivajte edinstvena dela in delite svojo strast do umetnosti.</p>
          </div>
          <div className="footer-nav">
            <h3>Navigacija</h3>
            <ul>
              <li><a href="/">Domov</a></li>
              <li><a href="/galerija">Galerija</a></li>
              <li><a href="/o-nas">O nas</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Kontakt</h3>
            <ul>
              <li>Email: <a href="mailto:info@galerija.com">info@tofyvisions.com</a></li>
              <li>Telefon: <a href="tel:+38640123456">+386 70 644 579</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Tofy Visions. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
