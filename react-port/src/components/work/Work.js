import React from 'react';
import WorkItem from './WorkItem';
import './Work.css';

function Work() {
  return (
    <>
      <div className='work'>
        <div className='wrapper copy'>
          <h3>Work</h3>
          <h1>Latest Projects</h1>
          <p>Here you can find some projects i've been working on recently.</p>
        </div>

        <WorkItem />
      </div>
    </>
  );
}

export default Work;
