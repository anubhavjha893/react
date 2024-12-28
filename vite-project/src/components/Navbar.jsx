import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full h-20  flex items-center justify-between p-5'>
        <h1 className='text-xs font-semibold uppercase text-orange-400'>Component</h1>      
        <h1 className='text-xs font-semibold uppercase text-white bg-orange-400 p-2 rounded-lg'>Favourite <sup>{data.filter( item => item.status).length}</sup>
        </h1>
    </div>
  )
}

export default Navbar