import React from 'react';

const Nums = ({text, id, addInput}) => {

  const handleClick = (event) => {
    addInput(text);
  }

  return (
    <div onClick={handleClick}>
      <button id={id}>
        {text}
      </button>
    </div>
  )
}

export default Nums
