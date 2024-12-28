import React from 'react'

const Button = ({text,color,style,onclick}) => {
  return (
    <div>
        <button onClick={onclick}  className={`text-white capitalize ${color} ${style}  text-xs rounded`}>{text}</button>
    </div>
  )
}

export default Button