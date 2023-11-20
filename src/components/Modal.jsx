/* eslint-disable react/prop-types */
import { useState } from "react";

function Modal({ allValid, text }) {
  const [nickname, setNickname] = useState("");

  const handleSave = () => {
    const scoreboardEntry = { nickname, passwordLength: text.length };
    const scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];
    scoreboard.push(scoreboardEntry);
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
  };

  return (
    allValid && (
      <div className="modal">
        <h1>Congratulations! You Won!</h1>
        <label>
          Enter your nickname:
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </label>
        <p>Your password has {text.length} characters.</p>
        <button onClick={handleSave}>Save Score</button>
      </div>
    )
  );
}

export default Modal;
