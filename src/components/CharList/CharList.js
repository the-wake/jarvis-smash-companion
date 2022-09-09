import React from 'react';

import './CharList.css';

// class CharList extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   // roster, statusNames, localRecord

//   render() {
//     // console.log(props);

//     // let cycleStatus = (e) => {
//     //   const targetChar = e.target;
//     //   let statusIndex = statusNames.indexOf(targetChar.classList[1]);
//     //   targetChar.classList.replace(statusNames[statusIndex], statusNames[statusIndex + 1] || statusNames[0]);

//     //   // console.log(targetChar.dataset.id);
//     //   // console.log(localRecord[targetChar.dataset.id]);
//     //   localRecord[targetChar.dataset.id].status = statusNames[statusIndex + 1] || statusNames[0];
//     //   console.log(localRecord);
//     // };
//     return (
//       <div id={'roster-element'}>
//         {/* {roster.map((character, pos) => (
//           <img src={`images/${character.image}`} key={pos} name={character.name} data-id={character.id} alt={`${character.name}`} className={`char-image ${localRecord[character.id].status}`} onClick={cycleStatus} />
//         ))} */}
//       </div>
//     );
//   };
// }

const CharList = ({ roster, statusNames, localRecord }) => {

  const storedRun = JSON.parse(localStorage.getItem('stored-run'));

  for (var i = 0; i < storedRun.length; i++) {
    localRecord[i].status = storedRun[i].status || 'unplayed';
  };
  console.log(localRecord);

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
    <div id={'roster-element'}>
      {roster.map((character, pos) => (
        <img src={`images/${character.image}`} key={pos} name={character.name} data-id={character.id} alt={`${character.name}`} className={`char-image ${localRecord[character.id].status}`} onClick={cycleStatus} />
      ))}
    </div>
  );
};

export default CharList;
