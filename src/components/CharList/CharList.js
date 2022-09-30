import React, { useEffect, useState } from 'react';

import './CharList.css';

const CharList = ({ roster, statusNames, recordState, setRecordState, randomChar, setRandomChar, setRunResults, runComplete, saveRun, checkCompletion }) => {

  let localRecord = recordState;

  const [dummyState, setDummyState] = useState(true);

  const cycleStatus = (e) => {
    if (!checkCompletion()) {
      const targetChar = e.target;
      let statusIndex = statusNames.indexOf(targetChar.classList[1]);
      targetChar.classList.replace(statusNames[statusIndex], statusNames[statusIndex + 1] || statusNames[0]);

      // console.log(targetChar.dataset.id);
      // console.log(localRecord[targetChar.dataset.id]);
      localRecord[targetChar.dataset.id].status = statusNames[statusIndex + 1] || statusNames[0];
      setRecordState(localRecord);
      setRandomChar({ name: null });
      setRunResults();
      setDummyState(!dummyState);
      saveRun();
    }
  };

  // This can probably be done a lot better... somehow...
  useEffect(() => {
    const rosterDivs = document.getElementById('roster-element').children;
    for (const div of rosterDivs) {
      div.classList.remove('highlighted');
    }
    if (randomChar.name !== null) {
      const targetChar = document.getElementById(randomChar.shortName);
      targetChar.classList.add('highlighted');
      // console.log(randomChar);
      let cooldown = setInterval(() => {
        clearInterval(cooldown);
        targetChar.classList.remove('highlighted');
      }, 1250);
    };
  }, [randomChar]);

  // Render
  return (
    <div id={'roster-element'}>
      {roster.map((character, pos) => (
        <img src={`images/${character.image}`} key={pos} id={character.shortName} name={character.name} data-id={character.id} alt={`${character.name}`} className={`char-image ${localRecord[character.id].status}`} onClick={cycleStatus} />
      ))}
    </div>
  );
};



// class CharList extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {localRecord: props.recordState};
//   }

//   render() {
//     const { roster, statusNames, recordState } = this.props;
//     let localRecord = this.state.localRecord;

//     // Populate sheet with stored run if it exists, or with data passed from parent to state.localRecord if not.
//     // const storedRun = JSON.parse(localStorage.getItem('stored-run')) || localRecord;

//     // for (var i = 0; i < storedRun.length; i++) {
//     //   localRecord[i].status = storedRun[i].status || 'unplayed';
//     // };
//     // console.log(localRecord);

//     const cycleStatus = (e) => {
//       const targetChar = e.target;
//       let statusIndex = statusNames.indexOf(targetChar.classList[1]);
//       targetChar.classList.replace(statusNames[statusIndex], statusNames[statusIndex + 1] || statusNames[0]);

//       // console.log(targetChar.dataset.id);
//       // console.log(localRecord[targetChar.dataset.id]);
//       localRecord[targetChar.dataset.id].status = statusNames[statusIndex + 1] || statusNames[0];
//       console.log(localRecord);
//     };

//     return (
//       <div id={'roster-element'}>
//         {roster.map((character, pos) => (
//           <img src={`images/${character.image}`} key={pos} name={character.name} data-id={character.id} alt={`${character.name}`} className={`char-image ${localRecord[character.id].status}`} onClick={cycleStatus} />
//         ))}
//       </div>
//     );
//   };
// };

// const CharList = ({ roster, statusNames, localRecord }) => {

//   const storedRun = JSON.parse(localStorage.getItem('stored-run')) || localRecord;

//   for (var i = 0; i < storedRun.length; i++) {
//     localRecord[i].status = storedRun[i].status || 'unplayed';
//   };
//   console.log(localRecord);

//   const cycleStatus = (e) => {
//     const targetChar = e.target;
//     let statusIndex = statusNames.indexOf(targetChar.classList[1]);
//     targetChar.classList.replace(statusNames[statusIndex], statusNames[statusIndex + 1] || statusNames[0]);

//     // console.log(targetChar.dataset.id);
//     // console.log(localRecord[targetChar.dataset.id]);
//     localRecord[targetChar.dataset.id].status = statusNames[statusIndex + 1] || statusNames[0];
//     console.log(localRecord);
//   };

//   return (
//     <div id={'roster-element'}>
//       {roster.map((character, pos) => (
//         <img src={`images/${character.image}`} key={pos} name={character.name} data-id={character.id} alt={`${character.name}`} className={`char-image ${localRecord[character.id].status}`} onClick={cycleStatus} />
//       ))}
//     </div>
//   );
// };

export default CharList;
