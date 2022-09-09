import React, { useState } from 'react';

import './CharList.css';

// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CharList = () => {

  // const [winState, setWinState] = useState('unplayed');

  let roster = [
    { id: 0, name: 'Mario', image: '1_mario_00.png', status: 'unplayed' },
    { id: 1, name: 'Donkey Kong', image: '2_donkey_00.png', status: 'unplayed' },
    { id: 2, name: 'Link', image: '3_link_00.png', status: 'unplayed' },
    { id: 3, name: 'Samus', image: '4_samus_00.png', status: 'unplayed' },
    { id: 4, name: 'Dark Samus', image: '4c_dsamus_00.png', status: 'unplayed' },
    { id: 5, name: 'Yoshi', image: '5_yoshi_00.png', status: 'unplayed' },
    { id: 6, name: 'Kirby', image: '6_kirby_00.png', status: 'unplayed' },
    { id: 7, name: 'Fox', image: '7_fox_00.png', status: 'unplayed' },
    { id: 8, name: 'Pikachu', image: '8_pikachu_00.png', status: 'unplayed' },
    { id: 9, name: 'Luigi', image: '9_luigi_00.png', status: 'unplayed' },
    { id: 10, name: 'Ness', image: '10_ness_00.png', status: 'unplayed' },
    { id: 11, name: 'Captain Falcon', image: '11_falcon_00.png', status: 'unplayed' },
    { id: 12, name: 'Jigglypuff', image: '12_jigglypuff_00.png', status: 'unplayed' },
    { id: 13, name: 'Peach', image: '13_peach_00.png', status: 'unplayed' },
    { id: 14, name: 'Daisy', image: '13c_daisy_00.png', status: 'unplayed' },
  ];

  const statusNames = ['unplayed', 'won', 'lost',];

  // Could add a filter here eventually to combine characters with their clones.

  const cycleStatus = (e) => {
    const targetChar = e.target;
    let statusIndex = statusNames.indexOf(targetChar.classList[1]);
    console.log(statusIndex);
    targetChar.classList.replace(statusNames[statusIndex], statusNames[statusIndex + 1] || statusNames[0]);
    
  };

  return (
    <div className={'roster-element'}>
      {roster.map((character, pos) => (
        <img src={`images/${character.image}`} key={pos} name={character.name} alt={`${character.name}`} className={`char-image ${character.status}`} onClick={cycleStatus} />
      ))}
    </div>
  )
};

export default CharList;
