/* eslint-disable react/prop-types */

function PasswordSection({ text, change }) {
  return (
    <div className="pass-section">
      <label htmlFor="passwordInput"></label>
      <input
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
