import React from 'react'
import { Route, Routes} from 'react-router-dom'
import User from "../components/User"
import About from "../components/About"
import Landing from '../components/Landing'
import Userdetails from '../components/Userdetails'
const Routing = () => {
  
  return (

     <Routes>
       <Route path="" element={<Landing/>} />
       <Route path="/about" element={<About />} />
       <Route path="/user" element={<User />} >
       <Route path="/user/:name" element={<Userdetails />} />
       </Route>
     
    
   </Routes>
  )
}

export default Routing