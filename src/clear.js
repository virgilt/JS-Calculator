import React from 'react';

const Clear = ({clear}) => {

  let clearButton = clear.map(c => {
    return (
      <button key={c.id} id={c.id}>
        {c.text}
      </button>
    )
  })

  return (
    <div>
      {clearButton}
    </div>
  )
}

export default Clear
