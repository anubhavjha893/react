import React, { useState } from 'react'

const Advanced = () => {
   const [val,setVal] = useState({name: 'Harsh',isBanned: false});
  return (
    <div className='p-5'>
<h1>Name : {val.name}</h1>
<h2>Banned : {val.isBanned.toString()}</h2>
<button onClick={()=> setVal({...val,isBanned: !val.isBanned})} className={`px-3 py-2 ${val.isBanned ? 'bg-red-400' : 'bg-blue-400'} rounded text-xs text-white`}>change it</button>
    </div>
  )
}

export default Advanced