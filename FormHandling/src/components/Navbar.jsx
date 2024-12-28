import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className="text-red-600 bg-gray-200 py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/" className="text-lg font-semibold">Home</a>
      </div>
      <div className="flex items-center">
        <input type="text" placeholder="What do you want to play?" className="bg-gray-700 text-gray-300 py-2 px-4 rounded-md w-64" />
        <button className="ml-4 bg-gray-700 text-gray-300 py-2 px-4 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="ml-4 bg-gray-700 text-gray-300 py-2 px-4 rounded-md">
          <span className='capitalize text-xs'>no. of cards</span>
          <sup>0</sup>
        </button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar