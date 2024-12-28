import React, { useState } from 'react'

const Score = () => {
  // const [a,b] = useState(false); a accpt the value and b accpt the FUNCTION
  const [banned,setbanned] = useState(false);


  return (
    <div className='flex flex-col items-center justify-center '>
      <h1>{banned.toString()}</h1>
      <button onClick={()=> setbanned(!banned)} className='text-white bg-black p-2 text-xs rounded'>change</button>
      </div>
  )
}

export default Score