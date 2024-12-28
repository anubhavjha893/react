import React, { useState } from 'react'

const ControlledComponents = () => {
    const [val,setVal] = useState({name:"",age:""});
    const onsubmit = (e)=> {
        e.preventDefault();
        console.log(val);
        
    }
 
  return (
    <div>
         <form onSubmit={onsubmit} action="">
           <div className="input flex gap-2">
           <input onChange={(event)=>setVal({...val,name: event.target.value})} type="text" placeholder='name' className='border border-black px-2' />
           <input onChange={(event)=>setVal({...val,age: event.target.value})} type="text" placeholder='name' className='border border-black px-2' />
           </div>
           <input type="submit" className='px-4 uppercase  py-1 bg-blue-200 rounded-md mt-5' />
        </form>
    </div>
  )
}

export default ControlledComponents