import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className='w-full bg-red-400 h-fit p-2 flex items-center justify-center gap-5 capitalize font-bold font-mono'>
    <NavLink style ={(e)=> {
return {color: e.isActive ? "green" : ""}
    }} to="/user">user</NavLink>
    <NavLink style ={(e)=> {
return {color: e.isActive ? "green" : ""}
    }}  to="/about">About</NavLink>
    <NavLink className={(e)=> {
      return [e.isActive ? "text-green-500 scale-[1.3]" : ""].join(" ")
    }} to="/">home</NavLink>
</nav>
  )
}

export default Navbar