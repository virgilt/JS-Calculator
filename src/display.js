import React from 'react';

const Display = ({input, output, id}) => {

  return (
    <div id='output'>
      <h4 id={id}>{input}</h4>
      <h2>{output}</h2>
    </div>
  )
}

export default Display
