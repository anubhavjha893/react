import React from 'react'

const Card = ({data,handleRemoveButton,index}) => {
    const {height , width , color} = data;
  return (
    <div className='flex gap-10 p-10' style={{ height: `${height}px`, width: `${width}px`, backgroundColor: `${color}` }}>
        <button onClick={()=>handleRemoveButton(index)} className=' h-5 px-3  text-[2px]  rounded-md bg-red-400'>Delete</button>
    </div>
  )
}

export default Card