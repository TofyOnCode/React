import React from 'react';
import './IzpostavljenaDela.css'; 
import soncniZahod from './soncni_zahod.jpg';
import brzice from './brzice1.png';
import urbanaulica from './urbanaulica.png';
import mirnavoda from './mirnavoda.png';





const artworks = [
  {
    id: 1,
    title: 'Sončni zahod',
    artist: 'Jaka Zupančič',
    image: soncniZahod, 
    description: '"Oljna slika sončnega zahoda"',
  },
  {
    id: 2,
    title: 'Gorski potok',
    artist: 'Ljudmila Albanc',
    image: brzice,
    description: '"Akvarel, ki prikazuje brzice gorskega potoka obkroženega s svežo zeleno vegetacijo"'
},

{
    id: 3,
    title: 'Mestni utrip',
    artist: 'Mihael Zupan',
    image: urbanaulica,
    description: '"Mešana tehnika na platnu, ki zajema dinamiko urbanih ulic v večernih urah"'
},

{
    id: 4,
    title: 'Tišina jezera',
    artist: 'Lara Jereb',
    image: mirnavoda,
    description: '"Impresionistična slika mirne vodne površine jezera tik pred svitom"'
},
];

const IzpostavljenaDela = () => {
  return (
    <section className="izpostavljenadela">
      <div className="container">
        <h2>Izpostavljena Dela</h2>
        <div className="artworks-grid">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="artwork-item">
              <img src={artwork.image} alt={artwork.title} />
              <h3>{artwork.title}</h3>
              <p className="artist">{artwork.artist}</p>
              <p className="description">{artwork.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IzpostavljenaDela;
