import './App.css';

import React, { useEffect, useState } from 'react';

import CharList from './components/CharList/CharList.js';

function App() {

  let baseRoster = [
    { id: 0, name: 'Mario', shortName: 'mario' },
    { id: 1, name: 'Donkey Kong', shortName: 'dk' },
    { id: 2, name: 'Link', shortName: 'link' },
    { id: 3, name: 'Samus', shortName: 'samus' },
    { id: 4, name: 'Dark Samus', shortName: 'damus' },
    { id: 5, name: 'Yoshi', shortName: 'yoshi' },
    { id: 6, name: 'Kirby', shortName: 'kirby' },
    { id: 7, name: 'Fox', shortName: 'fox' },
    { id: 8, name: 'Pikachu', shortName: 'pikachu' },
    { id: 9, name: 'Luigi', shortName: 'luigi' },
    { id: 10, name: 'Ness', shortName: 'ness' },
    { id: 11, name: 'Captain Falcon', shortName: 'falcon' },
    { id: 12, name: 'Jigglypuff', shortName: 'jigglypuff' },
    { id: 13, name: 'Peach', shortName: 'peach' },
    { id: 14, name: 'Daisy', shortName: 'deach' },
    { id: 15, name: 'Bowser', shortName: 'bowser' },
    { id: 16, name: 'Ice Climbers', shortName: 'climbers' },
    { id: 17, name: 'Sheik', shortName: 'sheik' },
    { id: 18, name: 'Zelda', shortName: 'zelda' },
    { id: 19, name: 'Doctor Mario', shortName: 'dario', },
    { id: 20, name: 'Pichu', shortName: 'pichu', },
    { id: 21, name: 'Falco', shortName: 'falco' },
    { id: 22, name: 'Marth', shortName: 'marth' },
    { id: 23, name: 'Lucina', shortName: 'lucina' },
    { id: 24, name: 'Young Link', shortName: 'yink' },
    { id: 25, name: 'Ganon', shortName: 'ganon' },
    { id: 26, name: 'Mewtwo', shortName: 'mewtwo' },
    { id: 27, name: 'Roy', shortName: 'roy' },
    { id: 28, name: 'Chrom', shortName: 'chrom' },
    { id: 29, name: 'Mr. Game & Watch', shortName: 'gnw' },
    { id: 30, name: 'Meta Knight', shortName: 'metaknight' },
    { id: 31, name: 'Pit', shortName: 'pit' },
    { id: 32, name: 'Dark Pit', shortName: 'darkpit' },
    { id: 33, name: 'Zero Suit Samus', shortName: 'zss' },
    { id: 34, name: 'Wario', shortName: 'wario' },
    { id: 35, name: 'Snake', shortName: 'snake' },
    { id: 36, name: 'Ike', shortName: 'ike' },
    { id: 37, name: 'Pokemon Trainer', shortName: 'trainer' },
    { id: 38, name: 'Diddy Kong', shortName: 'diddy' },
    { id: 39, name: 'Lucas', shortName: 'lucas' },
    { id: 40, name: 'Sonic', shortName: 'sonic' },
    { id: 41, name: 'King Dedede', shortName: 'dedede' },
    { id: 42, name: 'Olimar', shortName: 'olimar' },
    { id: 43, name: 'Lucario', shortName: 'lucario' },
    { id: 44, name: 'ROB', shortName: 'rob' },
    { id: 45, name: 'Toon Link', shortName: 'tink' },
    { id: 46, name: 'Wolf', shortName: 'wolf' },
    { id: 47, name: 'Villager', shortName: 'villager' },
    { id: 48, name: 'Mega Man', shortName: 'megaman' },
    { id: 49, name: 'Wii Fit Trainer', shortName: 'wiifit' },
    { id: 50, name: 'Rosalina & Luma', shortName: 'rosalina' },
    { id: 51, name: 'Little Mac', shortName: 'littlemac' },
    { id: 52, name: 'Greninja', shortName: 'greninja' },
    { id: 53, name: 'Palutena', shortName: 'palutena' },
    { id: 54, name: 'Pacman', shortName: 'pacman' },
    { id: 55, name: 'Robin', shortName: 'robin' },
    { id: 56, name: 'Shulk', shortName: 'shulk' },
    { id: 57, name: 'Bowser Jr.', shortName: 'bowserjr' },
    { id: 58, name: 'Duck Hunt', shortName: 'duckhunt' },
    { id: 59, name: 'Ryu', shortName: 'ryu' },
    { id: 60, name: 'Ken', shortName: 'ken' },
    { id: 61, name: 'Cloud', shortName: 'cloud' },
    { id: 62, name: 'Corrin', shortName: 'corrin' },
    { id: 63, name: 'Bayonetta', shortName: 'bayonetta' },
    { id: 64, name: 'Inkling', shortName: 'inkling' },
    { id: 65, name: 'Ridley', shortName: 'ridley' },
    { id: 66, name: 'Simon', shortName: 'simon' },
    { id: 67, name: 'Richter', shortName: 'richter' },
    { id: 68, name: 'King K. Rool', shortName: 'krool' },
    { id: 69, name: 'Isabelle', shortName: 'isabelle' },
    { id: 70, name: 'Incineroar', shortName: 'incineroar' },
    { id: 71, name: 'Piranha Plant', shortName: 'plant' },
    { id: 72, name: 'Joker', shortName: 'joker' },
    { id: 73, name: 'Hero', shortName: 'hero' },
    { id: 74, name: 'Banjo & Kazooie', shortName: 'banjokazooie' },
    { id: 75, name: 'Terry', shortName: 'terry' },
    { id: 76, name: 'Byleth', shortName: 'byleth' },
    { id: 77, name: 'Min Min', shortName: 'minmin' },
    { id: 78, name: 'Steve', shortName: 'steve' },
    { id: 79, name: 'Sephiroth', shortName: 'sephiroth' },
    { id: 80, name: 'Aegis', shortName: 'aegis' },
    { id: 81, name: 'Kazuya', shortName: 'kazuya' },
    { id: 82, name: 'Sora', shortName: 'sora' },
    { id: 83, name: 'Mii Brawler', shortName: 'brawler' },
    { id: 84, name: 'Mii Swordfighter', shortName: 'swordfighter' },
    { id: 85, name: 'Mii Gunner', shortName: 'gunner' },
  ];

  for (var character of baseRoster) {
    const rosterNum = character.id + 1
    character.image = `${rosterNum}_${character.shortName}_00.png`;
  };

  const roster = baseRoster;

  const statusNames = ['unplayed', 'won', 'lost',];

  // Can probably just make this a constant that stores default statuses to seed the initial data. Should be using state to track changes rather than a variable anyway.
  const initialRecord = [
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
    { name: 'Bowser', status: statusNames[0] },
    { name: 'Ice Climbers', status: statusNames[0] },
    { name: 'Sheik', status: statusNames[0] },
    { name: 'Zelda', status: statusNames[0] },
    { name: 'Doctor Mario', status: statusNames[0] },
    { name: 'Pichu', status: statusNames[0] },
    { name: 'Falco', status: statusNames[0] },
    { name: 'Marth', status: statusNames[0] },
    { name: 'Lucina', status: statusNames[0] },
    { name: 'Young Link', status: statusNames[0] },
    { name: 'Ganon', status: statusNames[0] },
    { name: 'Mewtwo', status: statusNames[0] },
    { name: 'Roy', status: statusNames[0] },
    { name: 'Chrom', status: statusNames[0] },
    { name: 'Mr. Game & Watch', status: statusNames[0] },
    { name: 'Meta Knight', status: statusNames[0] },
    { name: 'Pit', status: statusNames[0] },
    { name: 'Dark Pit', status: statusNames[0] },
    { name: 'Zero Suit Samus', status: statusNames[0] },
    { name: 'Wario', status: statusNames[0] },
    { name: 'Snake', status: statusNames[0] },
    { name: 'Ike', status: statusNames[0] },
    { name: 'Pokemon Trainer', status: statusNames[0] },
    { name: 'Diddy Kong', status: statusNames[0] },
    { name: 'Lucas', status: statusNames[0] },
    { name: 'Sonic', status: statusNames[0] },
    { name: 'King Dedede', status: statusNames[0] },
    { name: 'Olimar', status: statusNames[0] },
    { name: 'Lucario', status: statusNames[0] },
    { name: 'ROB', status: statusNames[0] },
    { name: 'Toon Link', status: statusNames[0] },
    { name: 'Wolf', status: statusNames[0] },
    { name: 'Villager', status: statusNames[0] },
    { name: 'Mega Man', status: statusNames[0] },
    { name: 'Wii Fit Trainer', status: statusNames[0] },
    { name: 'Rosalina & Luma', status: statusNames[0] },
    { name: 'Little Mac', status: statusNames[0] },
    { name: 'Greninja', status: statusNames[0] },
    { name: 'Palutena', status: statusNames[0] },
    { name: 'Pac-Man', status: statusNames[0] },
    { name: 'Robin', status: statusNames[0] },
    { name: 'Shulk', status: statusNames[0] },
    { name: 'Bowser Jr.', status: statusNames[0] },
    { name: 'Duck Hunt', status: statusNames[0] },
    { name: 'Ryu', status: statusNames[0] },
    { name: 'Ken', status: statusNames[0] },
    { name: 'Cloud', status: statusNames[0] },
    { name: 'Corrin', status: statusNames[0] },
    { name: 'Bayonetta', status: statusNames[0] },
    { name: 'Inkling', status: statusNames[0] },
    { name: 'Ridley', status: statusNames[0] },
    { name: 'Simon', status: statusNames[0] },
    { name: 'Richter', status: statusNames[0] },
    { name: 'King K. Rool', status: statusNames[0] },
    { name: 'Isabelle', status: statusNames[0] },
    { name: 'Incineroar', status: statusNames[0] },
    { name: 'Piranha Plant', status: statusNames[0] },
    { name: 'Joker', status: statusNames[0] },
    { name: 'Hero', status: statusNames[0] },
    { name: 'Banjo & Kazooie', status: statusNames[0] },
    { name: 'Terry', status: statusNames[0] },
    { name: 'Byleth', status: statusNames[0] },
    { name: 'Min Min', status: statusNames[0] },
    { name: 'Steve', status: statusNames[0] },
    { name: 'Sephiroth', status: statusNames[0] },
    { name: 'Aegis', status: statusNames[0] },
    { name: 'Kazuya', status: statusNames[0] },
    { name: 'Sora', status: statusNames[0] },
    { name: 'Mii Brawler', status: statusNames[0] },
    { name: 'Mii Swordfighter', status: statusNames[0] },
    { name: 'Mii Gunner', status: statusNames[0] },
  ];

  // Initailize the current run as the local storage if it exists, or as initialRecord if not.
  const storedRun = JSON.parse(localStorage.getItem('stored-run')) || initialRecord;

  // Create a temporary variable to store data from the loop, then use it to initialize the recordState.
  // You need to stringify and parse the initial reference in React to set up a deep clone; otherwise the equivalence will create a reference instead of a copy.
  let loadedInstance = JSON.parse(JSON.stringify(initialRecord));
  for (var i = 0; i < storedRun.length; i++) {
    loadedInstance[i].status = storedRun[i].status || 'unplayed';
  };

  const [recordState, setRecordState] = useState(loadedInstance);
  const [randomChar, setRandomChar] = useState(null);
  const [runResults, setRunResults] = useState();
  const [runComplete, setRunComplete] = useState(false);
  const [dummyState, setDummyState] = useState(true);

  // console.log(recordState);

  const randomize = () => {
    if (!checkCompletion()) {
      let charPool = [];

      for (const character of roster) {
        if (recordState[character.id].status === 'unplayed') {
          charPool.push(character)
        }
      }

      if (charPool.length === 0) {
        setRandomChar(null);
        window.alert('Finished!')
      }
      else {
        let rdm = Math.floor(Math.random() * charPool.length);
        setRandomChar(charPool[rdm]);
      }
    }
  };

  const doRandom = e => {
    if (e.target.id === 'random-skip') {
      randomize();
      return;
    }

    const result = e.target.id.split('-')[1];
    let charName = randomChar.name;
    const newStatus = recordState.map(char => char.name === charName ? { ...char, status: result } : char);
    setRecordState(newStatus);
    randomize();
  };

  const clearRandom = () => {
    setRandomChar(null);
  }

  const saveRun = () => {
    localStorage.setItem('stored-run', JSON.stringify(recordState));
  };

  const finishRun = () => {
    if (!checkCompletion()) {
      const confirmFinish = window.confirm('Finish this run?')
      if (confirmFinish) {
        setRunComplete(true);
        let resultStats = {}
        resultStats.unplayed = recordState.filter((character) => character.status === statusNames[0]);
        resultStats.won = recordState.filter((character) => character.status === statusNames[1]);
        resultStats.lost = recordState.filter((character) => character.status === statusNames[2]);
        resultStats.played = recordState.filter((character) => character.status === statusNames[1] || character.status === statusNames[2]);
        resultStats.ratio = (resultStats.won.length / resultStats.played.length).toFixed(2) * 100;
        const resultsTone = () => {
          if (resultStats.ratio === 0) {
            return 'Must have hit a bracket demon.'
          } else if (resultStats.played.length <= 2 && resultStats.lost.length < 1) {
            return 'Maybe try a few more next time.';
          } else if (resultStats.played.length <= 6 && resultStats.lost.length < 1) {
            return 'Next time, let\'s go all the way!';
          } else if (resultStats.ratio < 50) {
            return 'Hopefully you\'ll have better luck next time.';
          }
          else {
            return `That's a ${resultStats.ratio}% winrate!`;
          }
        };
        if (resultStats.played.length === 0) {
          setRunResults('It looks like you haven\'t entered any results.')
        }
        else if (resultStats.won.length === roster.length) {
          setRunResults('Seriously?! You did it! Way to go!');
        }
        else {
          setRunResults(`You played ${resultStats.played.length} out of ${resultStats.played.length + resultStats.unplayed.length} characters. You won with ${resultStats.won.length}, and lost with ${resultStats.lost.length}. ${resultsTone()}`);
        };
      };
    };
  };

  const newRun = () => {
    const confirmNewRun = window.confirm('Clear the current data and begin a new run?');

    if (confirmNewRun) {
      let instanceRecord = recordState;
      for (const character of instanceRecord) {
        character.status = statusNames[0];
      };
      localStorage.setItem('stored-run', JSON.stringify(instanceRecord));
      setRecordState(instanceRecord);
      setRandomChar(null);
      setRunResults();
      setRunComplete(false);
      setDummyState(!dummyState);
    };
  };

  // Used to have more functionality here, but I think this is fine.
  // TODO: Could pass the event target here and cause the triggering click to go through.
  const checkCompletion = () => {
    if (runComplete) {
      newRun();
      return true;
    };
  };

  useEffect(() => {
    // This should just run saveRun(), but it gives a dependency warning when I run it that way.
    localStorage.setItem('stored-run', JSON.stringify(recordState));
  }, [recordState]);

  // Could add a filter to combine characters with their clones.

  return (
    <div className="App">
      <div id={'list-wrapper'}>
        <header>
          <h1>
            Jarvis: The Smash Bros. Ultimate Ironman Assistant!
          </h1>
        </header>
        <CharList roster={roster} statusNames={statusNames} recordState={recordState} setRecordState={setRecordState} randomChar={randomChar} setRandomChar={setRandomChar} setRunResults={setRunResults} runComplete={runComplete} saveRun={saveRun} checkCompletion={checkCompletion} />
      </div>
      <div id={'dashboard'}>
        <div id={'dashboard-left'}>
          {
            JSON.stringify(recordState) !== JSON.stringify(initialRecord)
              ? <button id={'finish-button'} onClick={finishRun}>Finish Run!</button>
              : <button id={'finish-button'} disabled={true}>Finish Run!</button>
          }
          {
            JSON.stringify(recordState) !== JSON.stringify(initialRecord)
              ? <button onClick={newRun}>Begin New Run</button>
              : <button disabled={true}>Begin New Run</button>
          }

        </div>
        <div id={'dashboard-right'}>
          <div className={'justify-center'}>
            {
              randomChar !== null
                ? <img src={`${process.env.PUBLIC_URL}/images/${randomChar.image}`} alt={randomChar.name} className={'random-image'}></img>
                : <button onClick={randomize}>Random Character</button>
            }
          </div>
          <div>
            {
              randomChar !== null
                ? <div id={'random-commands'}>
                  <p className={'random-child'} id={`random-${statusNames[1]}`} onClick={doRandom}>Won</p>
                  <p className={'random-child'} id={`random-${statusNames[2]}`} onClick={doRandom}>Lost</p>
                  <p className={'random-child'} id={'random-skip'} onClick={doRandom}>Skip</p>
                  <p className={'random-child'} id={'random-clear'} onClick={clearRandom}>Clear</p>
                </div>
                : null
            }
          </div>
        </div>
      </div>
      <p id={'results-el'}>{runResults}</p>
    </div>
  );
};

export default App;
