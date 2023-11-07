import React from 'react';
import './Blog.css';
import Intervju from './intervju.png';
import digitalna from './digitalna.png';
import sodobna from './sodobna.png';





const posts = [
  {
    id: 1,
    title: 'Intervju z umetnikom meseca',
    summary: 'Poglobljen pogovor z umetnikom, ki je ta mesec prejel največ pozornosti.',
    image: Intervju, 
  },
  {
    id: 2,
    title: 'Ponovno odkrivanje klasične umetnosti v digitalni dobi',
    summary: 'Raziskujemo, kako so se tradicionalna umetniška dela preoblikovala in ponovno pridobila popularnost preko digitalnih platform.',
    image: digitalna, 
  },
  {
    id: 3,
    title: 'Trendi v sodobni umetnosti za leto 2024',
    summary: 'Analiza trenutnih trendov v sodobni umetnosti in napovedi, kako bodo ti vplivali na prihodnost umetniškega izražanja.',
    image: sodobna, 
  }
  
  
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <h2>Zadnje iz bloga</h2>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-post">
              <img src={post.image} alt={post.title} className="post-image" />
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <a href="/blog/{post.id}" className="read-more">Preberi več →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
