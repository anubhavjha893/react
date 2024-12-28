import React from 'react'

const Card = ({data,index,clicked}) => {
    const {song,artist,image,added} = data
  return (
    <div>
      <div key={index} className="w-64 h-46 bg-gray-200 rounded-lg shadow-lg p-4">
        <div className="flex items-center gap-5">
          <img src={image} alt="Song Image" className="w-16 h-16 object-cover rounded-md" />
          <div className="ml-4">
            <p className="text-lg font-semibold">{song}</p>
            <p className="text-sm text-gray-600">{artist}</p>
          </div>
        </div>
        <button onClick={()=>clicked(index)} className={`mt-4 ${added ? "bg-yellow-500" : "bg-gray-700"} text-white py-2 px-4 rounded-md ${added ? "hover:bg-gray-700" : "hover:bg-blue-700"} transition duration-200 text-sm text-gray-600`}>{added ? "Remove from favourites" : "Add to Favourites"}</button>
      </div>
    </div>
  )
}

export default Card