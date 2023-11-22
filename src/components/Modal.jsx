/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import winning from "/winning.mp3";
import cheering from "/cheering.wav";
import click from "/click.mp3";

function Modal({ allValid, text, nickName }) {
  const [scoreboardData, setScoreboardData] = useState([]);

  const handleClick = () => {
    const playClick = new Audio(click);
    playClick.volume = 0.3;
    playClick.play();
    const interval = setInterval(() => {
      window.location.href = "https://drtevzadze-findpass.netlify.app";
    }, 300);

    return interval;
  };

  useEffect(() => {
    const playWin = new Audio(winning);
    const playCheer = new Audio(cheering);
    playWin.volume = 0.3;
    playCheer.volume = 0.3;
    if (allValid) {
      playWin.play();
      playCheer.play();
    }
  }, [allValid]);

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

  useEffect(() => {
    if (allValid) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [allValid]);

  // Sort the scoreboard
  const sortedScoreboard = scoreboardData.sort((a, b) => {
    return a.passwordLength - b.passwordLength;
  });

  // Display only top 5
  const top5Entries = sortedScoreboard.slice(0, 5);

  return (
    allValid && (
      <div className="modal">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
        <h1>Congratulations! You Won!</h1>
        <ol>
          {top5Entries.map((item, index) => (
            <li key={index}>
              <p>
                <span>Name: {item.nickName}</span> Password Length:{" "}
                {item.passwordLength}
              </p>
            </li>
          ))}
        </ol>
        <button onClick={handleClick}>Try Again</button>
      </div>
    )
  );
}

export default Modal;
