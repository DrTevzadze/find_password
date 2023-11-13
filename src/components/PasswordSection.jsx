/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

function PasswordSection({ text, change }) {
  const contentEditable = useRef(null);

  useEffect(() => {
    contentEditable.current.focus();
  }, []);

  return (
    <div>
      <header>
        <h1>The Password Game</h1>
      </header>
      <div className="pass-section">
        <label htmlFor="passwordInput"></label>
        <div className="choose-pass">
          <h3>Please choose a pasword: </h3>
          <h3>{text ? text.length : 0}</h3>
        </div>
        <textarea ref={contentEditable} type="text" onChange={change} />
      </div>
    </div>
  );
}

export default PasswordSection;
