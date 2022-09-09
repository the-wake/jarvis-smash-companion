import React from 'react';

import './RandomButton.css';

const RandomButton = ({ randomize }) => {
  return (
    <div className={'buttonContainer'}>
      <button onClick={randomize}>Random Character</button>
      {/* <h4 id={'char-area'}></h4> */}
    </div>
  )
}

export default RandomButton;
