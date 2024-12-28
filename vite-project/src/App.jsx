import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Card from "./components/Card";


const App = () => {

const raw = [
  {image: "https://images.unsplash.com/photo-1494178270175-e96de2971df9?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",song: "chana mere ya",artist: "ajay nagar",status:false},
  {image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",song: "jadu ki jhappi",artist: "tony kakar",status:false},
  {image: "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",song: "chal waha jate hai",artist: "rohit nayar",status:false},
  {image: "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",song: "chal waha jate hai",artist: "rohit nayar",status:false},
]
  const [data,setData] = useState(raw);
  const handleButton = (change)=> {
    setData((prev)=> {
return prev.map((item,index)=> {
 if(index === change) {
return {...item, status:!item.status}
  }
return item
})
    })
  }

  return (

  <div className='font-sans text-lg font-semibold'>
   <Navbar data={data} />
   <div className="card-div w-full flex gap-5 flex-wrap justify-evenly">
   {data.map((item,index)=> <Card raw={item} handleButton={handleButton} key={index} index={index} />)}

   </div>
  </div>
  )
}

export default App