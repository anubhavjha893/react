import React from 'react'

const Card = () => {
  const data = [
    { name: 'pushpa',description : 'thapar marungi kiskik'},
    { name: 'pushpa2',description : 'thapar marungi kiskik efhsdjkkljsdfhkj'},
  ]

const dowloadBUtton = ()=> {alert('chal rha hai')} 
  return (
  <div className='flex item-center justify-center gap-5'>
{data.map((elem,index)=> (
    <div key={index} className='w-60 bg-black p-5'>
    <h1 className='text-white capitalize text-xs'>{elem.name}</h1>
    <p className='text-white capitalize text-sm'> {elem.description}</p>
    <button onClick={dowloadBUtton} className='text-white text-xs capitalize mt-5 px-2 py-1 bg-blue-400 rounded hover:scale-[1.2] transition-all'>download now</button>
        </div>
))}

  </div>
  )
}

export default Card