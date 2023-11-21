/* eslint-disable react/prop-types */
function Enter({ nickName, change, closeTab, setEnter }) {
  console.log(nickName);
  console.log(change);
  const handleSave = () => {
    if (typeof localStorage !== "undefined") {
      // Your localStorage code here
    } else {
      console.error("localStorage is not supported");
    }

    if (nickName !== "" && nickName.length > 6) {
      const scoreboardEntry = { nickName };
      const scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];
      console.log("Before push:", scoreboard);
      scoreboard.push(scoreboardEntry);
      console.log("After push:", scoreboard);

      localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
    }
  };

  const isButtonDisabled = nickName.length < 6;

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
          <button onClick={closeTab} type="submit" disabled={isButtonDisabled}>
            Start
          </button>
        </form>
      </div>
    )
  );
}

export default Enter;
