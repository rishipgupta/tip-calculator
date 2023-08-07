import React from 'react'

const Bill = ({ handleBillAmountChange }) => {



  return (
    <div>
      <span>How much was the bill? </span> <input type="text" onChange={handleBillAmountChange} />
    </div>
  )
}

export default Bill
