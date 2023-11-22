/* eslint-disable react/prop-types */

import click from "../../public/click.mp3";

function Enter({ nickName, change, closeTab, setEnter }) {
  const clickAudio = new Audio(click);

  return (
    setEnter && (
      <div className="enter">
        <h1>Welcome to the Password Game!</h1>
        <form onSubmit={closeTab}>
          <label>
            <input
              type="text"
              onChange={change}
              value={nickName}
              minLength={6}
              maxLength={12}
              placeholder="Enter your nickname"
              //Remove the spellcheck from the input
              spellCheck={false}
              required
            />
          </label>
          <br />
          <button onClick={() => clickAudio.play()}>Start the Game</button>
        </form>
      </div>
    )
  );
}

export default Enter;
