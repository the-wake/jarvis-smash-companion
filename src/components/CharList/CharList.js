import React, { useState } from 'react';

import './CharList.css';

// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CharList = ({ roster, statusNames, localRecord }) => {

  const cycleStatus = (e) => {
    const targetChar = e.target;
    let statusIndex = statusNames.indexOf(targetChar.classList[1]);
    targetChar.classList.replace(statusNames[statusIndex], statusNames[statusIndex + 1] || statusNames[0]);

    localRecord[targetChar.dataset.nickname] = statusNames[statusIndex + 1] || statusNames[0];
    console.log(localRecord);
  };

  return (
    <div className={'roster-element'}>
      {roster.map((character, pos) => (
        <img src={`images/${character.image}`} key={pos} name={character.name} data-nickname={character.shortName} alt={`${character.name}`} className={`char-image ${localRecord[character.shortName]}`} onClick={cycleStatus} />
      ))}
    </div>
  );
};

export default CharList;
