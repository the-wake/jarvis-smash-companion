import React from 'react';

import './RandomButton.css';

const RandomButton = ({ randomize }) => {
  return (
    <div className={'buttonContainer'}>
      <button onClick={randomize}>Random Character</button>
    </div>
  )
}

export default RandomButton;
