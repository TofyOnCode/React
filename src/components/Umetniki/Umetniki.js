import React from 'react';
import './Umetniki.css'; 
import mkovac from './mkovac.png';
import lnovak from './lnovak.png';
import nhorvat from './nhorvat.png';
import mtocnik from './mtocnik.png';




const artists = [
  {
    id: 1,
    name: 'Maja Kovač',
    image: mkovac, 
    bio: '"Maja Kovač je slikarka abstraktnih del, znana po svoji uporabi barv in svetlobe"',
    profileLink: '/umetniki/maja-kovac', 
  },
  
  {
    id: 2,
    name: 'Luka Novak',
    image: lnovak, 
    bio: '"Luka Novak je priznan kipar, čigar delo preučuje razmerje med prostorom in obliko"',
    profileLink: '/umetniki/luka-novak', 
  },
  {
    id: 3,
    name: 'Nina Horvat',
    image: nhorvat, 
    bio: '"Nina Horvat je fotografinja, ki s svojimi deli raziskuje urbane krajine in vsakdanje trenutke"',
    profileLink: '/umetniki/nina-horvat', 
  },
  {
    id: 4,
    name: 'Marko Potočnik',
    image: mtocnik, 
    bio: '"Marko Potočnik je multimedijski umetnik, znan po inovativni uporabi digitalne tehnologije in tradicionalnih medijev"',
    profileLink: '/umetniki/marko-potocnik', 
  },
];

const Umetniki_p = () => {
  return (
    <section className="artists-presentation">
      <div className="container">
        <h2>Predstavitev Umetnikov</h2>
        <div className="artists-grid">
          {artists.map((artist) => (
            <div key={artist.id} className="artist-item">
              <img src={artist.image} alt={artist.name} />
              <h3>{artist.name}</h3>
              <p className="bio">{artist.bio}</p>
              <a href={artist.profileLink} className="profile-link">Oglejte si profil</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Umetniki_p;
