import React from 'react';

const Decimal = ({decimal}) => {

  let decimalButton = decimal.map(dec => {
    return (
      <button key={dec.id} id={dec.id}>
        {dec.text}
      </button>
    )
  })

  return (
    <div>
      {decimalButton}
    </div>
  )
}

export default Decimal
