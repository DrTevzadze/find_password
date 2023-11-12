/* eslint-disable react/prop-types */
function Card({ content, rule, isValid }) {
  return (
    <div className="inside-card">
      <h2 className={isValid ? "top-green" : "top-red"}>{rule}</h2>
      <h3>{content}</h3>
    </div>
  );
}

export default Card;
