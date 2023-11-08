/* eslint-disable react/prop-types */

function PasswordSection({ header, text, change }) {
  return (
    <div className="pass-section">
      <h1>{header}</h1>
      <input type="text" onChange={change} />
      <h2>{text}</h2>
    </div>
  );
}

export default PasswordSection;
