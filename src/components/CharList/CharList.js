import React, { useState } from 'react';

// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import './CharList.css';

const CharList = ({ roster, statusNames, localRecord }) => {

  const cycleStatus = (e) => {
    const targetChar = e.target;
    let statusIndex = statusNames.indexOf(targetChar.classList[1]);
    targetChar.classList.replace(statusNames[statusIndex], statusNames[statusIndex + 1] || statusNames[0]);

    // console.log(targetChar.dataset.id);
    // console.log(localRecord[targetChar.dataset.id]);
    localRecord[targetChar.dataset.id].status = statusNames[statusIndex + 1] || statusNames[0];
    console.log(localRecord);
  };

  return (
    <div className={'roster-element'}>
      {roster.map((character, pos) => (
        <img src={`images/${character.image}`} key={pos} name={character.name} data-id={character.id} alt={`${character.name}`} className={`char-image ${localRecord[character.id].status}`} onClick={cycleStatus} />
      ))}
    </div>
  );
};

export default CharList;
