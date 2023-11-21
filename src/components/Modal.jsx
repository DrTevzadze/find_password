/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

function Modal({ allValid, text, nickName }) {
  const [scoreboardData, setScoreboardData] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("scoreboard")) || [];
    setScoreboardData(existingData);

    if (allValid) {
      const scoreboardEntry = { nickName, passwordLength: text.length };
      const updatedScoreboard = [...existingData, scoreboardEntry];

      localStorage.setItem("scoreboard", JSON.stringify(updatedScoreboard));
      setScoreboardData(updatedScoreboard);
    }
  }, [nickName, text, allValid]);

  // Sort the scoreboard
  const sortedScoreboard = scoreboardData.sort((a, b) => {
    return a.passwordLength - b.passwordLength;
  });

  // Display only top 5
  const top5Entries = sortedScoreboard.slice(0, 5);

  return (
    allValid && (
      <div className="modal">
        <h1>Congratulations! You Won!</h1>
        <ol>
          {top5Entries.map((item, index) => (
            <li key={index}>
              <p>Nickname: {item.nickName}</p>
              <p>Password Length: {item.passwordLength}</p>
            </li>
          ))}
        </ol>
      </div>
    )
  );
}

export default Modal;
