
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Show from './components/Show';

const App = () => {

  return (
   <div className="div">
    <nav className='w-full gap-5 flex justify-center'> 
    <NavLink className={(e)=>`text-xl uppercase ${e.isActive ? 'text-red-600' : ""} font-mono font-semibold hover:text-red-600`} to="/">home </NavLink>
    <NavLink className={(e)=>`text-xl uppercase ${e.isActive ? 'text-red-600' : ""} font-mono font-semibold hover:text-red-600`} to="/services">services </NavLink>
    <NavLink className={(e)=>`text-xl uppercase ${e.isActive ? 'text-red-600' : ""} font-mono font-semibold hover:text-red-600`} to="/show">show </NavLink>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/show" element={<Show />} />
    </Routes>
   </div>
  )
}

export default App