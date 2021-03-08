import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Andy Beable</h1>
      <p>I am a Web Developer.</p>
      <div class='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Latest Projects
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          More about me
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
