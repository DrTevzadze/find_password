/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

function PasswordSection({ text, change }) {

  const contentEditable = useRef(null);

  useEffect(() => {
    contentEditable.current.focus();
  }, []);


  return (
    <div className="pass-section">
      <label htmlFor="passwordInput"></label>
      <input
      ref={contentEditable}
        type="text"
        onChange={change}
        onInput={(e) =>
          (e.target.style.width = (e.target.value.length + 1) * 1 + "ch")
        }
      />
      <h2>{text}</h2>
    </div>
  );
}

export default PasswordSection;
