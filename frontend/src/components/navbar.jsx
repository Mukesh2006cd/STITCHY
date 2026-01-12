import React from 'react'
import Dropdown from './dropdown';
import logo from '../assets/logo.PNG';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 px-8 py-2 z-50">
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Stitchy Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          <div className="flex gap-8 text-white font-medium">

            {/* Dropdown */}
            <Dropdown title="Women" />
            <Dropdown title="Kids" />
            <Dropdown title="Men" />

            <span className="cursor-pointer hover:opacity-80">
              Occasion
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="relative max-w-md">
            <input 
              type="text" 
              placeholder="Search for products..."
              className="w-full px-4 py-2 pl-10 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">🎤</button>
          </div>
          <div className="flex items-center text-white text-sm">
            <span className="mr-1">📍</span>
            Home - New Delhi, Delhi
          </div>
          <button className="text-white hover:opacity-80">🔔</button>
          <button className="text-white hover:opacity-80">🛍️</button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar

