import React from 'react';

const Nums = ({nums}) => {

  let numButtons = nums.map(num => {
    return (
        <button key={num.id} id={num.id}>
          {num.text}
        </button>
    )
  })

  return (
    <div>
      {numButtons}
    </div>
  )
}

export default Nums
