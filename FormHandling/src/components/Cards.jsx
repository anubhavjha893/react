import React from 'react'
import Card from './Card'

const Cards = ({user,handleRemove}) => {
  return (
 <>
 <div className='w-full h-[20vh] items-center justify-center flex gap-5 flex-wrap overflow-auto'>
{user.map((index,item)=> <Card item={item} index={index} handleRemove={handleRemove} key={item} />)}
 </div>
 </>
  )
}

export default Cards