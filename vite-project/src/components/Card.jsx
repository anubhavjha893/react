import React from 'react'

const Card = ({raw ,index,key,handleButton}) => {
    const {image , song , status , artist} = raw;
  return (
    <div className='p-3 bg-gray-100 w-48 rounded-lg shadow-lg' key={index}>
<div className="flex items-center w-full gap-4">
<div className="img w-12 bg-gray-200 h-12 overflow-hidden rounded-lg">
    <img className='w-full h-full object-cover' src={image} alt="" />
</div>
<div className="text">
    <h1 className='text-xs font-bold text-blue-500 uppercase'>{song}</h1>
    <h2 className='text-xs font-semibold text-gray-600 capitalize'>{artist}</h2>
</div>
</div>
<button onClick={()=>handleButton(index)} className={`px-4 py-2 ${status ? "bg-orange-500 hover:bg-yellow-600" : "bg-yellow-500 hover:bg-yellow-600"} mt-3 text-xs font-semibold rounded-lg`}>{status ? "Remove from favourites" : "Add to favourites"}</button>
    </div>
  )
}

export default Card