import React, { useState } from 'react';

import './CharList.css';

// import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CharList = ({ roster, statusNames, localRecord }) => {

  // const roster = [
  //   { id: 0, name: 'Mario', image: '1_mario_00.png' },
  //   { id: 1, name: 'Donkey Kong', image: '2_donkey_00.png' },
  //   { id: 2, name: 'Link', image: '3_link_00.png' },
  //   { id: 3, name: 'Samus', image: '4_samus_00.png' },
  //   { id: 4, name: 'Dark Samus', image: '4c_dsamus_00.png' },
  //   { id: 5, name: 'Yoshi', image: '5_yoshi_00.png' },
  //   { id: 6, name: 'Kirby', image: '6_kirby_00.png' },
  //   { id: 7, name: 'Fox', image: '7_fox_00.png' },
  //   { id: 8, name: 'Pikachu', image: '8_pikachu_00.png' },
  //   { id: 9, name: 'Luigi', image: '9_luigi_00.png' },
  //   { id: 10, name: 'Ness', image: '10_ness_00.png' },
  //   { id: 11, name: 'Captain Falcon', image: '11_falcon_00.png' },
  //   { id: 12, name: 'Jigglypuff', image: '12_jigglypuff_00.png' },
  //   { id: 13, name: 'Peach', image: '13_peach_00.png' },
  //   { id: 14, name: 'Daisy', image: '13c_daisy_00.png' },
  // ];

  // const statusNames = ['unplayed', 'won', 'lost',];

  // let localRecord = {
  //   0: statusNames[0],
  //   1: statusNames[0],
  //   2: statusNames[0],
  //   3: statusNames[0],
  //   4: statusNames[0],
  //   5: statusNames[0],
  //   6: statusNames[0],
  //   7: statusNames[0],
  //   8: statusNames[0],
  //   9: statusNames[0],
  //   10: statusNames[0],
  //   11: statusNames[0],
  //   12: statusNames[0],
  //   13: statusNames[0],
  //   14: statusNames[0],
  // };

  // let unplayedChars = []

  // for (const character of roster) {
  //   unplayedChars.push(character.name)
  // }

  // console.log(unplayedChars);

  // Could add a filter here eventually to combine characters with their clones.

  const cycleStatus = (e) => {
    const targetChar = e.target;
    let statusIndex = statusNames.indexOf(targetChar.classList[1]);
    targetChar.classList.replace(statusNames[statusIndex], statusNames[statusIndex + 1] || statusNames[0]);

    localRecord[targetChar.dataset.nickname] = statusNames[statusIndex + 1] || statusNames[0];
    console.log(localRecord);
  };

  // const randomize = () => {
  //   const charPool = [];

  //   for (const character of roster) {
  //     if (localRecord[character.id] == 'unplayed') {
  //       charPool.push(character)
  //     }
  //   }
  //   console.log(charPool);
  // }

  return (
    <div className={'roster-element'}>
      {roster.map((character, pos) => (
        <img src={`images/${character.image}`} key={pos} name={character.name} data-nickname={character.shortName} alt={`${character.name}`} className={`char-image ${localRecord[character.shortName]}`} onClick={cycleStatus} />
      ))}
      {/* <button onClick={randomize}>Get Random Character</button> */}
    </div>
  );
};

export default CharList;
