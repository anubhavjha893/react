import React, { useState } from 'react'

const Hooks = () => {
     const [val,setVal] = useState(false)
  return (
    <div className='p-5'>
        <h1 className='text-lg font-bold capitalize'>{val === false ? "mat jao" : "chale jao"}</h1>
        <button onClick={()=>setVal(()=>!val)} className={`p-2 ${val === false ? "bg-red-200" : "bg-blue-200"} rounded-md`}>change</button>
    </div>
  )
}

export default Hooks