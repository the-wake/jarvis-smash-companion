import './App.css';

import React, { useEffect, useState } from 'react';

import { hydrateRoot } from 'react-dom/client';

import CharList from './components/CharList/CharList.js';
import RandomButton from './components/RandomButton/RandomButton.js';
import SaveButton from './components/SaveButton/SaveButton.js';
// import LoadButton from './components/LoadButton/LoadButton.js';
import ClearButton from './components/ClearButton/ClearButton.js';

// const rootElement = document.getElementById("root");


// ReactDOM.render() is deprecated as of version 18:
// Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot



function App({ container }) {

  const roster = [
    { id: 0, name: 'Mario', shortName: 'mario', image: '1_mario_00.png' },
    { id: 1, name: 'Donkey Kong', shortName: 'dk', image: '2_donkey_00.png' },
    { id: 2, name: 'Link', shortName: 'link', image: '3_link_00.png' },
    { id: 3, name: 'Samus', shortName: 'samus', image: '4_samus_00.png' },
    { id: 4, name: 'Dark Samus', shortName: 'damus', image: '4c_dsamus_00.png' },
    { id: 5, name: 'Yoshi', shortName: 'yoshi', image: '5_yoshi_00.png' },
    { id: 6, name: 'Kirby', shortName: 'kirby', image: '6_kirby_00.png' },
    { id: 7, name: 'Fox', shortName: 'fox', image: '7_fox_00.png' },
    { id: 8, name: 'Pikachu', shortName: 'pikachu', image: '8_pikachu_00.png' },
    { id: 9, name: 'Luigi', shortName: 'luigi', image: '9_luigi_00.png' },
    { id: 10, name: 'Ness', shortName: 'ness', image: '10_ness_00.png' },
    { id: 11, name: 'Captain Falcon', shortName: 'falcon', image: '11_falcon_00.png' },
    { id: 12, name: 'Jigglypuff', shortName: 'jigglypuff', image: '12_jigglypuff_00.png' },
    { id: 13, name: 'Peach', shortName: 'peach', image: '13_peach_00.png' },
    { id: 14, name: 'Daisy', shortName: 'deach', image: '13c_daisy_00.png' },
  ];

  const statusNames = ['unplayed', 'won', 'lost',];

  let localRecord = [
    { name: 'Mario', status: statusNames[0] },
    { name: 'Donkey Kong', status: statusNames[0] },
    { name: 'Link', status: statusNames[0] },
    { name: 'Samus', status: statusNames[0] },
    { name: 'Damus', status: statusNames[0] },
    { name: 'Yoshi', status: statusNames[0] },
    { name: 'Kirby', status: statusNames[0] },
    { name: 'Fox', status: statusNames[0] },
    { name: 'Pikachu', status: statusNames[0] },
    { name: 'Luigi', status: statusNames[0] },
    { name: 'Ness', status: statusNames[0] },
    { name: 'Captain Falcon', status: statusNames[0] },
    { name: 'Jigglypuff', status: statusNames[0] },
    { name: 'Peach', status: statusNames[0] },
    { name: 'Daisy', status: statusNames[0] },
  ];

  const [recordState, updateRecordState] = useState(localRecord);

  const randomize = () => {
    const charPool = [];

    for (const character of roster) {
      if (localRecord[character.id].status === 'unplayed') {
        charPool.push(character)
      }
    }
    console.log(charPool);

    if (charPool.length === 0) {
      document.getElementById('char-area').innerHTML = 'Finished!';
    }

    else {
      let rand = Math.floor(Math.random() * charPool.length);
      document.getElementById('char-area').innerHTML = charPool[rand].name;
    }
  };

  const saveRun = () => {
    localStorage.setItem('stored-run', JSON.stringify(localRecord));
    console.log('Run saved locally');
  };

  // const clearRun = () => {
  //   for (const character of localRecord) {
  //     character.status = statusNames[0]
  //   }
  //   localStorage.setItem('stored-run', localRecord);
  //   console.log(`Cleared Record: ${localRecord}`);
  // };

  // const loadRun = () => {
  //   const storedRun = JSON.parse(localStorage.getItem('stored-run'));

  //   if (!storedRun) {
  //     window.alert('You have no saved run.');
  //   } else {
  //     const confirm = window.confirm('Would you like to load your last run data?');
  //     if (confirm) {
  //       // console.log(storedRun);
  //       storedRun.map((character, pos) => {
  //         // console.log(`${roster[pos].name}: ${character.status}`);
  //         localRecord[pos].status = character.status;
  //         return character.status;
  //       });
  //       updateRecordState({ ...localRecord });
  //       const container = document.getElementById('list-area');
  //       const root = hydrateRoot(container, <CharList roster={roster} statusNames={statusNames} localRecord={localRecord} state={localRecord} />);
  //       // ReactDOM.render(<App />, rootElement);
  //       // root.render(CharList);
  //       // Also have to update the random status.
  //     };
  //   };
  // };

  // useEffect(() => {
  //   console.log(recordState);
  // }, [recordState]);

  // Could add a filter here eventually to combine characters with their clones.

  return (
    <div className="App">
      <header>
        <h1>
          Jarvis: The Smash Bros. Ultimate Ironman Assistant!
        </h1>
      </header>
      <div id={'list-area'}>
        <CharList roster={roster} statusNames={statusNames} localRecord={localRecord} recordState={recordState} updateRecordState={updateRecordState} state={localRecord} />
      </div>
      <div id={'button-container'}>
        <RandomButton randomize={randomize} />
        <SaveButton saveRun={saveRun} />
        {/* <ClearButton clearRun={clearRun} /> */}
        {/* <LoadButton loadRun={loadRun} /> */}
      </div>
      <h3 id={'char-area'}> </h3>
    </div>
  );
};

export default App;
