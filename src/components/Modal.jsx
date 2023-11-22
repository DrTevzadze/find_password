/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import useSound from "use-sound";

function Modal({ allValid, text, nickName }) {
  const [scoreboardData, setScoreboardData] = useState([]);
  const [playSound] = useSound("../assets/cheering.wav", { volume: 0.4 });
  const [playClick] = useSound("../assets/click.mp3");
  const [playWin] = useSound("../assets/winning.mp3", { volume: 0.8 });

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

  // Play the sound
  useEffect(() => {
    if (allValid) {
      playWin();
      playSound();
    }
  }, [allValid, playSound, playWin]);

  document.getElementById('try-button"').addEventListener('click', handleClick);

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

  const handleClick = () => {
    window.location.href = "https://drtevzadze-findpass.netlify.app";
    playClick();
  };

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
        <button onClick={handleClick} id="try-button">Try Again</button>
      </div>
    )
  );
}

export default Modal;
