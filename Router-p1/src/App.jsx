import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Routing from './utils/Routing'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <Header/>
      <Routing/>
      <Footer/>
    </div>
  )
}

export default App