/* eslint-disable react/prop-types */
function Enter({ nickName, change, closeTab, setEnter }) {
  // Save the nickname to the local storage
  const handleSave = () => {
    const scoreboardEntry = { nickName };
    const scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];
    console.log("Before push:", scoreboard);
    scoreboard.push(scoreboardEntry);
    console.log("After push:", scoreboard);

    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
    // Once stored, close the window
    closeTab();
  };

  return (
    setEnter && (
      <div className="enter">
        <h1>Welcome to the Password Game!</h1>
        <form onSubmit={handleSave}>
          <label>
            <input
              type="text"
              onChange={change}
              value={nickName}
              minLength={6}
              required
            />
          </label>
          <br />
          <button type="submit" disabled={nickName.length < 6}>
            Start the Game
          </button>
        </form>
      </div>
    )
  );
}

export default Enter;
