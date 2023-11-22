/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import useSound from 'use-sound';

function Enter({ nickName, change, closeTab, setEnter }) {
  const [playClick] = useSound('../assets/click.mp3');

  useEffect(() => {
    const handleClick = () => {
      playClick();
    };

    const button = document.getElementById('yourButtonId');

    if (button) {
      button.addEventListener('click', handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, [playClick]);

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
              spellCheck={false}
              required
            />
          </label>
          <br />
          <button id="yourButtonId">Start the Game</button>
        </form>
      </div>
    )
  );
}

export default Enter;
