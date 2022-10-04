import React, { useEffect, useState } from 'react';

import './CharList.css';

const CharList = ({ roster, statusNames, recordState, setRecordState, randomChar, setRandomChar, setRunResults, runComplete, saveRun, checkCompletion }) => {

  // Initializing a variable by setting it to another variable does weird stuff in React, so work around it with stringify + parse.
  let localRecord = JSON.parse(JSON.stringify(recordState));

  const [dummyState, setDummyState] = useState(true);

  const cycleStatus = (e) => {
    if (!checkCompletion()) {
      const targetChar = e.target;
      let statusIndex = statusNames.indexOf(targetChar.classList[1]);
      targetChar.classList.replace(statusNames[statusIndex], statusNames[statusIndex + 1] || statusNames[0]);

      localRecord[targetChar.dataset.id].status = statusNames[statusIndex + 1] || statusNames[0];
      setRecordState(localRecord);
      setRandomChar(null);
      setRunResults();
      setDummyState(!dummyState);
      saveRun();
    };
  };

  // This can probably be done a lot better... somehow...
  useEffect(() => {
    const rosterDivs = document.getElementById('roster-element').children;
    for (const div of rosterDivs) {
      div.classList.remove('highlighted');
    }
    if (randomChar !== null) {
      const targetChar = document.getElementById(randomChar.shortName);
      targetChar.classList.add('highlighted');
      let cooldown = setInterval(() => {
        clearInterval(cooldown);
        targetChar.classList.remove('highlighted');
      }, 1250);
    };
  }, [randomChar]);

  return (
    <div id={'roster-element'}>
      {roster.map((character, pos) => (
        <img src={`${process.env.PUBLIC_URL}/images/${character.image}`} key={pos} id={character.shortName} name={character.name} data-id={character.id} alt={`${character.name}`} className={`char-image ${localRecord[character.id].status}`} onClick={cycleStatus} />
      ))}
    </div>
  );
};

export default CharList;
