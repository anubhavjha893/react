import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({handleSubmitButton}) => {
   const {register,handleSubmit,reset} = useForm()

  return (
    <div>
        <form className='mt-10' onSubmit={handleSubmit((data) =>{
            handleSubmitButton(data);
            reset();
        })} action="">
            <input {...register('height')} className='border-2 border-black ml-5 text-center' type="text" placeholder='enter height' />
            <input {...register('width')} className='border-2 border-black ml-5 text-center' type="text" placeholder='enter width' />
            <input {...register('color')} className='border-2 border-black ml-5 text-center' type="text" placeholder='enter color' />
            <input type="submit" className='p-2 ml-5 bg-red-400' />
        </form>
    </div>
  )
}

export default Form