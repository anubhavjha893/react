import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

const Image = () => {
    const [val,setVal] = useState(false)
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className="image relative w-[30vw] bg-red-200 h-60 flex overflow-hidden rounded-lg">
            <img className={`w-full h-full ${val === false ? "-translate-x-0" : "-translate-x-[100%]"} object-cover shrink-0`} src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className= {`w-full h-full ${val === false ? "-translate-x-0" : "-translate-x-[100%]"} object-cover shrink-0`} src="https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span onClick={()=>setVal(()=>!val)} className='absolute bg-[#dadada7b] top-1/2 left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full'><FaArrowRight size={'1em'} /></span>
        </div>
    </div>
  )
}

export default Image;