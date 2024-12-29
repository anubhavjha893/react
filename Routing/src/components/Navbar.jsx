import React from 'react'

const Navbar = () => {
  return (
    <div className='w-60 mx-auto h-20 flex items-center justify-between'>
        <NavLink to="/" className="text-lg font-semibold capitalize text-stone-900">Home</NavLink>
        <NavLink to="/user" className="text-lg font-semibold capitalize text-stone-900">user</NavLink>
        <NavLink to="/about" className="text-lg font-semibold capitalize text-stone-900">about</NavLink>
      
    </div>
  )
}

export default Navbar