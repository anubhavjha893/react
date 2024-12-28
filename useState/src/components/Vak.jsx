import React, { useState } from 'react'

const Vak = () => {
   const [val,setVal] = useState(12);

  return (
    <div className='h-screen w-full flex flex-col gap-2 items-center justify-center'>
        <h1>{val}</h1>
      <button onClick={()=> setVal((prev)=> prev + 1)} className='text-white bg-black p-2 text-xs rounded'>change</button>
    </div>
  )
}

export default Vak