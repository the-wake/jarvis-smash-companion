import React from 'react';

const SaveButton = ({ saveRun }) => {

  return (
    <button id={'save-button'} onClick={saveRun}>Save Run</button>
  );
}

export default SaveButton;
