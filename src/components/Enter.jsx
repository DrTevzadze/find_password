/* eslint-disable react/prop-types */
import useSound from "use-sound";

function Enter({ nickName, change, closeTab, setEnter }) {
  const [playClick] = useSound("../assets/click.mp3");

 

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
              maxLength={16}
              placeholder="Enter your nickname"
              //Remove the spellcheck from the input
              spellCheck={false}
              required
            />
          </label>
          <br />
          <button onClick={() => playClick()}>Start the Game</button>
        </form>
      </div>
    )
  );
}

export default Enter;
