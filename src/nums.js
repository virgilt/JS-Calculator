import React from 'react';

const Nums = ({text, id, addInput}) => {

  const handleClick = (event) => {
    addInput(text);
  }

  return (
    <div id={id} onClick={handleClick}>
      <button className='numButtons' id={id}>
        {text}
      </button>
    </div>
  )
}

export default Nums
