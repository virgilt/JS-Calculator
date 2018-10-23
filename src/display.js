import React from 'react';

const Display = ({input, output, id}) => {

  return (
    <div>
      <p id={id}>{input}</p>
      <h2>{output}</h2>
    </div>
  )
}

export default Display
