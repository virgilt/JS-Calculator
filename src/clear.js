import React from 'react';

const Clear = ({clear, clearDisplay}) => {

  let clearButton = clear.map(c => {
    return (
      <button className='clearButton' key={c.id} id={c.id}>
        {c.text}
      </button>
    )
  })

  const handleClick = (event) => {
    clearDisplay(0, 0);
    document.getElementById('decimal').disabled = false;
  }

  return (
    <div id='clear' onClick={handleClick}>
      {clearButton}
    </div>
  )
}

export default Clear
