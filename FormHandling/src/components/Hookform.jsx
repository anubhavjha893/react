import React from 'react'
import { useForm } from "react-hook-form";

const Hookform = () => {

const {register,handleSubmit}= useForm()
  return (
    <div>
           <div>
         <form  action="" onSubmit={handleSubmit(data => console.log(data))}>
           <div className="input flex gap-2">
           <input {...register('name')} type="text" placeholder='name' className='border border-black px-2' />
           <input {...register('age')} type="text" placeholder='age' className='border border-black px-2' />
           </div>
           <input  type="submit" className='px-4 uppercase  py-1 bg-blue-200 rounded-md mt-5' />
        </form>
    </div>
    </div>
  )
}

export default Hookform