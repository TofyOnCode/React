import React from 'react';
import './Kontakt.css'; 

const Kontakt = () => {
  return (
    <section className="contact-info">
      <div className="container">
        <h2>Kontaktirajte nas</h2>
        <div className="contact-methods">
          <div>
            <h3>Email</h3>
            <p><a href="mailto:info@galerija.com">info@tofyvisions.com</a></p>
          </div>
          <div>
            <h3>Telefon</h3>
            <p><a href="tel:+38640123456">+386 70 644 579</a></p>
          </div>
          <div>
            <h3>Naslov</h3>
            <p>Vičava 1, 2500 Ptuj, Slovenija</p>
          </div>
          {}
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
