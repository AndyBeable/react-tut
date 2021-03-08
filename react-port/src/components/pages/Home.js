import React from 'react';
import '../../App.css';
import HeroSection from '../hero/HeroSection';
import About from '../about/About';
import Work from '../work/Work';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Work />
    </>
  );
}
export default Home;
