import React from 'react';

const Spinner = props => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  // provides default props if we forget to pass a message in props
  message: 'Loading...',
};

export default Spinner;
