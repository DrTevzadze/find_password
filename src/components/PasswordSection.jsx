/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

function PasswordSection({ text, change }) {
  const contentEditable = useRef(null);

  useEffect(() => {
    contentEditable.current.focus();
    const handleInput = () => {
      const newText = contentEditable.current.innerText;
      // Call the parent change function if provided
      if (change) {
        change(newText);
      }
    };

    // Add event listener for input changes
    contentEditable.current.addEventListener("input", handleInput);

    // Cleanup the event listener when the component unmounts
    return () => {
      contentEditable.current.removeEventListener("input", handleInput);
    };
  }, [change]);

  return (
    <div>
      <header>
        <h1>The Password Game</h1>
      </header>
      <div className="pass-section">
        <label htmlFor="passwordInput"></label>
        <div className="choose-pass">
          <h3>Please choose a password: </h3>
          <h3>{text ? text.length : 0}</h3>
        </div>
        <p
          ref={contentEditable}
          contentEditable={true}
          type="text"
          onChange={change}
          spellCheck={false}
        ></p>
      </div>
    </div>
  );
}

export default PasswordSection;
