import React from 'react'
import {useNavigate, useParams } from 'react-router-dom'

const Userdetails = () => {
   const {name} =  useParams();
   const Navigate = useNavigate();
  return (
    <div className='p-5'>
        <h1>Hii! {name}</h1>
        <button onClick={()=>{Navigate("/user")}} className='bg-red-300 hover:bg-blue-300 p-2 rounded-md capitalize mt-5'>go back</button>
        </div>
  )
}

export default Userdetails