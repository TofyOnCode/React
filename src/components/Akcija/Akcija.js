import React from 'react';
import './Akcija.css'; 

const Akcija = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <h2>Postanite Del Naše Umetniške Skupnosti</h2>
        <p>Pridružite se nam še danes in začnite deliti svojo umetnost z vsem svetom!</p>
        <a href="/registracija" className="cta-button">Pridruži se zdaj</a>
      </div>
    </section>
  );
};

export default Akcija;
