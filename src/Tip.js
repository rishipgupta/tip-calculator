import React from 'react'

const Tip = ({ handleTipOneChange, handleTipTwoChange, children }) => {
  console.log(children.props.children)
  return (
    <div>
      {children}<select onChange={children.props.children === "How did you like the service" ? handleTipOneChange : handleTipTwoChange}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing (20%)</option>
      </select>
    </div>
  )
}

export default Tip
