import React from 'react';

const Operators = ({operators}) => {

  let operatorButtons = operators.map(operator => {
    return (
      <button key={operator.id} id={operator.id}>
        {operator.text}
      </button>
    )
  })

  return (
    <div>
      {operatorButtons}
    </div>
  )
}

export default Operators
