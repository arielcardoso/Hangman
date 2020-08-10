import React from 'react';

const Modal = ({show, title, text, playAgain}) => {
  
  if (!show){
      return null;
  }

  return (
    <div>
      <div className="modal-bg"></div>
      <div className="modal">
        <h2>{title}</h2>
        {text.split('\n').map((item, i) => <p key={i}>{item}</p>)}
        <hr/>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Modal
