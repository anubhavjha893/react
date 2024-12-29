import React, { useState } from 'react'
import Cards from './components/Cards'
import Forms from './components/Forms'
import Navbar from './components/Navbar'

const App = () => {
 const [user,setUser] = useState([])
 const handleSubmitData = (data)=> {
setUser([...user,data])
 }
 const handleRemove = (id)=> {
  setUser(()=>user.filter((item,index)=> index!=id))
 }
  return (
    <>
    <Navbar/>
    <div className='w-full h-screen bg-gray-200 flex items-center justify-center'>
      <div className="container flex flex-col gap-5 items-center">
        <Cards user={user} handleRemove={handleRemove} />
        <Forms handleSubmitData={handleSubmitData} />
      </div>
    </div>
    </>
  )
}

export default App