import React from 'react'
import Card from './Card'

const Cards = ({user,handleClick,handleRemove}) => {
  return (
    <div className='w-[83vw] p-2 h-[22vh]  flex gap-2 flex-wrap justify-center overflow-auto'>
       {user.map((item,index)=>  <Card handleClick={handleClick} index={index} handleRemove={handleRemove} item={item} key={index} />)}
    </div>
  )
}

export default Cards