import React from 'react';
import './Mnenja.css'; 
import ananovak from './ananovak.png';
import evak from './evak.png';
import markope from './markope.png';




const testimonials = [
  {
    id: 1,
    name: 'Ana Novak',
    title: 'Umetnostna kritičarka',
    testimony: 'Ta platforma je spremenila način, kako odkrivamo in cenimo umetnost. Neverjetno!',
    avatar: ananovak, 
  },
  {
    id: 2,
    name: 'Marko Petrić',
    title: 'Slikar in vizualni umetnik',
    testimony: 'Moja dela so zdaj dostopna širšemu občinstvu, zahvaljujoč tej platformi, ki podpira umetnike na vseh stopnjah njihove kariere.',
    avatar: markope, 
  },
  {
    id: 3,
    name: 'Eva Kranjec',
    title: 'Zbirateljica umetnin',
    testimony: 'Ta spletna galerija je postala moje glavno orodje pri iskanju novih talentov in izjemnih del. Je nadvse uporabniku prijazna in informativna.',
    avatar: evak, 
  }
];

const U_mnenja = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Mnenja Uporabnikov</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
              <p className="testimony">{`"${testimonial.testimony}"`}</p>
              <p className="user">{`${testimonial.name}, ${testimonial.title}`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default U_mnenja;
