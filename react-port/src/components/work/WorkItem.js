import React from 'react';
import { Button } from '../button/Button';
import Dropped from '../../images/dropped.png';

function WorkItem({
  headline,
  description,
  buttonLabel,
  img,
  alt,
  darkBg,
  lightText,
  lightTextDesc,
  buttonStyle,
}) {
  return (
    <>
      <div className={darkBg ? 'work__card darkBg' : 'work__card'}>
        <img src={Dropped} alt={alt} />
        <div className='work__card-copy'>
          <h3 className={lightText ? 'heading--light' : 'heading--dark'}>
            {headline}
          </h3>
          <p className={lightTextDesc ? 'lightTextDesc' : 'darkTextDesc'}>
            {description}
          </p>
          <Button buttonStyle={buttonStyle ? 'btn--outline' : 'btn--fill'}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </>
  );
}

export default WorkItem;
