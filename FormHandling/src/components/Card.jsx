import React from 'react'

const Card = ({item,index,handleRemove}) => {
 const {name,image,email} = index
  return (
    <div className='w-[15vw] h-full bg-zinc-800 rounded-md p-5'>
       <div className="div flex gap-5">
       <div className="img w-10 h-10 bg-green-200 rounded-md overflow-hidden">
        <img className='w-full h-full object-cover' src={image} alt="" />
       </div>
 <div className="text">
 <h1 className='capitalize text-lg font-bold text-white'>{name}</h1>
 <h1 className='opacity-60 text-xs font-semibold text-white leading-[1.2vh] ml-1'>{email}</h1>
 </div>
       </div>
       <button onClick={()=>handleRemove(item)} className='bg-red-600 hover:bg-zinc-600 text-white capitalize text-sm font-bold px-3 p-1 rounded-md ml-[60px] mt-3'>remove</button>
    </div>
  )
}

export default Card