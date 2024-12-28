import React, { useRef } from 'react'

const Form = () => {
   const name = useRef(null)
   const age = useRef(null)
   const handeleSubmit = (event)=> {
      event.preventDefault();
console.log(name.current.value,age.current.value);

   }
  return (
    <div>
<h1>
   // three ways to handle form useRef controllled components react hook form //
</h1>
        <form onSubmit={handeleSubmit} action="">
           <div className="input flex gap-2">
           <input ref={name} type="text" placeholder='name' className='border border-black px-2' />
           <input ref={age} type="texe" placeholder='age' className='border border-black px-2' />
           </div>
           <input type="submit" className='px-4 uppercase  py-1 bg-blue-200 rounded-md mt-5' />
        </form>
    </div>
  )
}

export default Form