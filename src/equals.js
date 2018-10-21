import React from 'react';

const Equals = ({equals}) => {

  let equalsButton = equals.map(equal => {
    return (
      <button key={equal.id} id={equal.id}>{equal.text}</button>
    )
  })

  return (
    <div>
      {equalsButton}
    </div>
  )
}

export default Equals
