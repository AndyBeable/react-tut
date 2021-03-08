import React from 'react';
import Dropped from '../../images/dropped.png';

function WorkItem({ headline, description, buttonLabel, imgStart, img, alt }) {
  return (
    <>
      <div className='work__card'>
        <img src={Dropped} alt='Dropped' />
        <h3>{headline}</h3>
      </div>
    </>
  );
}

export default WorkItem;
