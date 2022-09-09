import './App.css';

import CharList from './components/CharList/CharList.js';
import RandomButton from './components/RandomButton/RandomButton.js';
import SaveButton from './components/SaveButton/SaveButton.js';
import LoadButton from './components/LoadButton/LoadButton.js';

function App() {

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

  let localRecord = {
    mario: statusNames[0],
    dk: statusNames[0],
    link: statusNames[0],
    samus: statusNames[0],
    damus: statusNames[0],
    yoshi: statusNames[0],
    kirby: statusNames[0],
    fox: statusNames[0],
    pikachu: statusNames[0],
    luigi: statusNames[0],
    ness: statusNames[0],
    falcon: statusNames[0],
    jigglypuff: statusNames[0],
    peach: statusNames[0],
    deach: statusNames[0],
  };

  const randomize = () => {
    const charPool = [];

    for (const character of roster) {
      if (localRecord[character.shortName] === 'unplayed') {
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

  const loadRun = () => {
    const storedRun = JSON.parse(localStorage.getItem('stored-run'));

    if (!storedRun) {
      window.alert('You have no saved run.');
    } else {
      const confirm = window.confirm('Would you like to load your last run data?');
      if (confirm) {
        // console.log(storedRun);
        storedRun.map((status, pos) => {
          console.log(`${roster[pos].name}: ${status}`);
        });
      };
    };
  };

  // Could add a filter here eventually to combine characters with their clones.

  return (
    <div className="App">
      <header>
        <h1>
          Jarvis: The Smash Bros. Ultimate Ironman Assistant!
        </h1>
      </header>
      <CharList roster={roster} statusNames={statusNames} localRecord={localRecord} />
      <div id={'button-container'}>
        <RandomButton randomize={randomize} />
        <SaveButton saveRun={saveRun} />
        <LoadButton loadRun={loadRun} />
      </div>
      <h3 id={'char-area'}></h3>
    </div>
  );
};

export default App;
