import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className='text-black p-5 flex flex-col  w-full items-center  h-screen'>
      <h1 className='text-8xl uppercase font-extrabold font-serif'>users</h1>
 <div className="div flex flex-col gap-5">
 <NavLink className="bg-red-200 hover:bg-blue-400 w-24 rounded-md text-xl font-mono font-bold capitalize p-2" to="/user/ayush">Ayush</NavLink>
      <NavLink className="bg-red-200 hover:bg-blue-400 w-24 rounded-md text-xl font-mono font-bold capitalize p-2" to="/user/panther">panther</NavLink>
      <NavLink className="bg-red-200 hover:bg-blue-400 w-24 rounded-md text-xl font-mono font-bold capitalize p-2" to="/user/akash">Akash</NavLink>
 </div>

<div className="line w-full h-[2px] bg-black mt-5 mb-5 "></div>
 <Outlet />
    </div>
  )
}

export default User
