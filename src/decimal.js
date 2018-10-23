import React from 'react';

const Decimal = ({text, id, input, addInput}) => {

  const handleClick = (event) => {
    addInput(text);
    document.getElementById('decimal').disabled = true;
  }

  return (
    <div onClick={handleClick}>
      <button id={id}>
        {text}
      </button>
    </div>
  )
}

export default Decimal
