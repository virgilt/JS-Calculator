import React from 'react';

const Equals = ({text, id, input, equalDisplay}) => {

  const handleClick = (event) => {

    if (input == 0) {
      return null
    } else {
      let newInput = input.join('').replace(/(x)/g, '*');
      let output = eval(newInput);
      equalDisplay(output, output);
      document.getElementById('decimal').disabled = false;
    }

  }

  return (
    <div onClick={handleClick}>
      <button id={id}>{text}</button>
    </div>
  )
}

export default Equals
