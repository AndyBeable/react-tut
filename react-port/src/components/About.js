import React from 'react';
import './About.css';
import Skills from './Skills';

function About() {
  return (
    <>
      <div className=''>
        <div className='wrapper copy'>
          <h3>About</h3>
          <h1>Personal Info</h1>
          <p>A little bit about me</p>
        </div>
        <div>
          <div className='about__container'>
            <h3>Hello!</h3>
            <p>
              My name is Andy Beable and I'm a passionate Frontend Web Developer
              using web technologies to build amazing products and focusing on
              solving problems for different niches and different industries
              using the power of technology.
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </>
  );
}

export default About;
