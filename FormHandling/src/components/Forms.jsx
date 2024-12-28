import React from 'react'
import { useForm } from "react-hook-form";

const Forms = ({handleFormSubmit}) => {
const {register,handleSubmit,reset}= useForm()
const submit = (data)=> {
  handleFormSubmit(data);
  reset()
}
  return (
    <div w-full h-20vh>
        <form className='' onSubmit={handleSubmit(submit)}>
        <div className="inputs flex flex-row gap-2">
        <input {...register('name')}  type='text' placeholder='name' className='w-full px-2 py-1 rounded-md outline-none' />
        <input {...register('email')} type='text' placeholder='email' className='w-full px-2 py-1 rounded-md outline-none' />
        <input {...register('image')} type='text' placeholder='image url' className='w-full px-2 py-1 rounded-md outline-none' />
        </div>
          <button className='bg-blue-500 ml-[38vw] mt-10 text-white px-5 py-2 rounded-md'>Submit</button>
        </form>
  
    </div>
  )
}

export default Forms