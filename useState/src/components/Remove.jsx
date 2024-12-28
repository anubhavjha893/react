import React, { useState } from 'react'

const Remove = () => {
    const [val,setVal] = useState([1,2,3,4,5,6])
  return (
    <div className='flex flex-col items-center justify-center '>
    {val.map((item)=><h1>{item}</h1>)}
    <button onClick={()=>setVal(()=>val.filter(item => item%2 !== 0))} className='text-white bg-black p-2 text-xs rounded'>change</button>
      
    </div>
  )
}

export default Remove

  {/* <button onClick={()=> {
      const arr = val;
      arr.pop();
      setVal([...arr]);
      }} className='text-white bg-black p-2 text-xs rounded'>change</button> */}

      // onClick={()=>setVal(()=>val.filter((item,index)=>index!= val.length-1))}

      // onClick={()=>setVal(()=>val.filter((item,index)=>index!=2))}