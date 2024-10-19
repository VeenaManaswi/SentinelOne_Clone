import React from 'react';
import './App.css';
import Top from './components/Top'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnerEcosystem from './components/PartnerEcosystem';
import Footer from './components/Footer';
import CardContainer from './components/CardContainer1';
import Card2 from './components/Card2';
import Partners from './components/Partners';
import Filtercards from './components/Filtercards';

function App() {
  return (
    <>
    <Top />
    <div className="App">
      <Header />
      <HeroSection />
      {/* <PartnerEcosystem />
      <Footer /> */}
      <CardContainer />
      <Card2/>
      <Partners/>
      <Filtercards/>
    </div>
    </>
  );
}

export default App;
