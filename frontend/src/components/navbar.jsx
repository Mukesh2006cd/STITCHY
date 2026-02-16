import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import icon from '../assets/applogo.JPG';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-[#050814] text-white px-6 py-4 z-50 border-b border-white/10"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <img
            src={icon}
            alt="Stitchy Icon"
            className="h-8 w-8 object-contain rounded"
          />
          <span className="text-xl font-semibold">Stitchy</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="hidden md:flex gap-6 text-sm"
        >
          <button className="hover:text-gray-300 transition">Stitch</button>
          <button className="hover:text-gray-300 transition">Design</button>
          <button className="hover:text-gray-300 transition">Business</button>
          <button className="hover:text-gray-300 transition flex items-center gap-1">
            About
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>

        {/* Desktop Right Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="hidden md:flex items-center gap-4"
        >
          <button className="hover:text-gray-300 transition text-sm">Help</button>
          <button className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-6 py-2 rounded-full font-medium transition text-sm" onClick={() => navigate('/login')}>
            Log in
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 pb-4 border-t border-white/10"
        >
          <div className="flex flex-col space-y-4 pt-4">
            <button className="text-left hover:text-gray-300 transition">Stitch</button>
            <button className="text-left hover:text-gray-300 transition">Design</button>
            <button className="text-left hover:text-gray-300 transition">Business</button>
            <button className="text-left hover:text-gray-300 transition">About</button>
            <button className="text-left hover:text-gray-300 transition">Help</button>
            <button className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-6 py-2 rounded-full font-medium transition text-sm w-fit" onClick={() => navigate('/login')}>
              Log in
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar