import React from 'react';

const Operators = ({text, id, input, addInput, replaceOpInput}) => {

  const handleClick = (event) => {
    let char = input[input.length - 1];
    let operatorRegex = /(x|\/|-|\+)/;
    if (operatorRegex.test(char)) {
      replaceOpInput(text, input, char)
    } else {
        addInput(text)
    }
    document.getElementById('decimal').disabled = false;
  }

  return (
    <div onClick={handleClick}>
      <button id={id}>
        {text}
      </button>
    </div>
  )
}

export default Operators
