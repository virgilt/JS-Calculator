import React from 'react';

const Display = ({display}) => {

  let calcDisplay = display.map(displays => {
    return (
      <div>
        <p>{displays.input}</p>
        <h2>{displays.output}</h2>
      </div>
    )
  })

  return (
    <div>
      {calcDisplay}
    </div>
  )
}

export default Display
