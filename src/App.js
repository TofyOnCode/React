import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import { Routes, Route } from 'react-router-dom';
import Predstavitev from './components/Predstavitev/Predstavitev';
import IzpostavljenaDela from './components/IzpostavljenaDela/IzpostavljenaDela';
import Umetniki_p from './components/Umetniki/Umetniki';
import Dogodki_raz from './components/Dogodki/Dogodki';
import U_mnenja from './components/Mnenja/Mnenja';
import Akcija from './components/Akcija/Akcija';
import Blog from './components/Blog/Blog';
import Onas from './components/Onas/Onas';
import Kontakt from './components/Kontakt/Kontakt';

const Home = () => (
  <div>
    <HeroSection /> {}
    {}
    <Predstavitev /> {}
      {}
      <IzpostavljenaDela /> {}
      {}
      <Umetniki_p /> {}
      {}
      <Dogodki_raz /> {}
      {}
      <U_mnenja /> {}
      {}
      <Akcija /> {}
      {}
      <Blog /> {}
      {}
      <Onas /> {}
      {}
      <Kontakt /> {}
      {}
  </div>
);

const About = () => <div>O nas</div>;
const Contact = () => <div>Kontakt</div>;

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerija" element={<Gallery />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
