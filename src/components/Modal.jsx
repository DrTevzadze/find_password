/* eslint-disable react/prop-types */
function Modal({ allValid, text }) {


  return (
    allValid && (
      <div className="modal">
        <h1>Congratulations! You Won!</h1>
        <ol>
          <li>{text.length}</li>
        </ol>
      </div>
    )
  );
}

export default Modal;
