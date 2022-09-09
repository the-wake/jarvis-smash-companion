import React from 'react';

import './RandomButton.css';

const RandomButton = ({ randomize }) => {
  return (
    <button onClick={randomize}>Random Character</button>
  )
}

export default RandomButton;
