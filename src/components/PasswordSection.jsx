/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

function PasswordSection({ text, change }) {
  const contentEditable = useRef(null);

  useEffect(() => {
    contentEditable.current.focus();
  }, []);

  return (
    <>
      <header>
        <h1>The Password Game</h1>
      </header>
      <div className="pass-section">
        <label htmlFor="passwordInput"></label>
        <textarea ref={contentEditable} type="text" onChange={change} />
        <h2>Length: {text ? text.length : 0}</h2>
      </div>
    </>
  );
}

export default PasswordSection;
