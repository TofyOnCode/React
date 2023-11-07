import React from 'react';
import './Dogodki.css'; 

const events = [
  {
    id: 1,
    title: 'Otvoritev razstave Impresionistični pogledi',
    date: '2023-11-20',
    location: 'Narodna galerija, Ljubljana',
    description: '"Pridružite se nam na otvoritvi nove razstave del impresionističnih mojstrov"',
    link: '/dogodki/otvoritev-razstave', 
  },
  {
    id: 2,
    title: 'Noč v galeriji: Sodobna umetnost v živo',
    date: '2023-12-05',
    location: 'Moderna galerija, Ljubljana',
    description: '"Odkrijte sodobno umetniško sceno skozi interaktivno doživetje z živimi performansi in instalacijami"',
    link: '/dogodki/noc-v-galeriji', 
  },
  {
    id: 3,
    title: 'Ulična umetnost in njena sporočila',
    date: '2023-12-15',
    location: 'Kulturni center Tobačna, Ljubljana',
    description: '"Razprava in delavnica z znanimi uličnimi umetniki, ki raziskujejo vpliv umetnosti na družbene spremembe"',
    link: '/dogodki/ulicna-umetnost', 
  },
  {
    id: 4,
    title: 'Fotografska razstava: "Čas zabeležen v objektiv"',
    date: '2024-01-10',
    location: 'Cankarjev dom, Ljubljana',
    description: '"Razstava priznanih slovenskih in mednarodnih fotografov, ki prikazujejo moč trenutka ujetega v času"',
    link: '/dogodki/fotografska-razstava', 
  },
  {
    id: 5,
    title: 'Slikarski simpozij: Barve narave',
    date: '2024-02-25',
    location: 'Grad Kodeljevo, Ljubljana',
    description: '"Simpozij bo združil slikarje različnih stilov in tehnik v skupnem ustvarjanju in raziskovanju tematike narave in okolja"',
    link: '/dogodki/slikarski-simpozij', 
  },
  {
    id: 6,
    title: 'Večer poezije in vizualne umetnosti',
    date: '2024-03-18',
    location: 'Literarni klub Ljubljana',
    description: '"Poseben večer, kjer se bodo prepletali recitali poezije in vizualne umetniške instalacije"',
    link: '/dogodki/vecer-poezije', 
  }
 
];

const Dogodki_raz = () => {
  return (
    <section className="events-exhibitions">
      <div className="container">
        <h2>Dogodki in Razstave</h2>
        <div className="events-list">
          {events.map((event) => (
            <div key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p className="date">{event.date}</p>
              <p className="location">{event.location}</p>
              <p className="description">{event.description}</p>
              <a href={event.link} className="more-info-link">Več informacij</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dogodki_raz;
