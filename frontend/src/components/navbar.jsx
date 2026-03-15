import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import icon from '../assets/applogo.JPG';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#09090b]/80 border-b border-white/5"
    >
      <div className="flex justify-between items-center px-6 py-4 lg:px-12 max-w-screen-2xl mx-auto">
        
        {/* App Icon Integration */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img 
            src={icon}
            alt="Stitchy Logo" 
            className="w-12 h-12 rounded-xl object-cover shadow-lg border border-white/10"
          />
          {/* Optional: You can keep the text or remove it since the logo has the name */}
          <span className="text-xl font-serif font-medium tracking-wide hidden sm:block">Stitchy.</span>
        </motion.div>
        
        {/* Desktop Links with Animated Underlines */}
        <div className="hidden md:flex gap-8 text-xs tracking-[0.15em] uppercase text-zinc-400 font-medium">
          {[{ label: 'Services', id: 'services' }, { label: 'The Atelier', id: 'atelier' }, { label: 'About', id: 'about' }, { label: 'Journal', id: 'journal' }].map((item) => (
            <a key={item.id} href={`#${item.id}`} className="relative group hover:text-white transition-colors py-2">
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button onClick={() => navigate('/login')} className="hidden md:block border border-zinc-700 hover:border-zinc-300 px-6 py-2.5 rounded-full text-xs tracking-[0.1em] uppercase transition-all hover:bg-white hover:text-black font-semibold">
          Sign In
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden z-50 relative w-6 h-6" onClick={() => setIsOpen(!isOpen)}>
          <span className={`absolute left-0 top-1 block w-6 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`absolute left-0 top-3 block w-6 h-[1.5px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`absolute left-0 top-5 block w-6 h-[1.5px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-[#09090b]/95 backdrop-blur-xl border-b border-zinc-800 flex flex-col items-center py-8 gap-6 md:hidden shadow-2xl"
            >
              {[{ label: 'Services', id: 'services' }, { label: 'The Atelier', id: 'atelier' }, { label: 'About', id: 'about' }, { label: 'Journal', id: 'journal' }].map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setIsOpen(false)} className="text-sm tracking-[0.2em] uppercase text-zinc-300 hover:text-white">
                  {item.label}
                </a>
              ))}
              <button onClick={() => navigate('/login')} className="mt-4 border border-zinc-700 px-8 py-3 rounded-full text-xs tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-colors">
                Sign In
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;