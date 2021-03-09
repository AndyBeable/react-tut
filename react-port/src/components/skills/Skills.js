import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <>
      <div className='about__container'>
        <h3>Skills</h3>
        <div className='skill skill-sml'>
          <p>HTML</p>
        </div>
        <div className='skill skill-med'>
          <p>CSS</p>
        </div>
        <div className='skill skill-lrg'>
          <p>SASS</p>
        </div>
        <div className='skill skill-lrg'>
          <p>Javascript</p>
        </div>
        <div className='skill skill-med'>
          <p>React</p>
        </div>
        <div className='skill skill-sml'>
          <p>Git</p>
        </div>
      </div>
    </>
  );
}

export default Skills;
