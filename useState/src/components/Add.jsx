import React, { useState } from 'react'

const add = () => {
   const [val,setVal] = useState([{name: 'foo', age: 12}, {name: 'bar', age:33},{name: 'baz', age:32}]);

  return (
    <div className='h-screen w-full flex flex-col gap-2 items-center justify-center'>
   {val.map((item,index)=><div>
    <h1 key={index}>{item.name}</h1>
    <h1 key={index}>{item.age}</h1>
   </div>)} 
  <button onClick={()=> setVal(()=>val.map(item =>item.name === "bar" ? ({name :"shivam",age: 21 }) : item))} className='text-white bg-black p-2 text-xs rounded'>change</button>
</div>
  )
}

export default add