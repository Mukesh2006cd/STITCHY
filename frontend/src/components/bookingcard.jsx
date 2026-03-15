import React from 'react';
import { motion } from 'framer-motion';

const BookingCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      className="absolute bottom-[-20px] lg:bottom-12 lg:-left-12 w-[90%] sm:w-[380px] backdrop-blur-xl bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-20"
    >
      <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        Schedule a Fitting
      </h3>

      <div className="space-y-4">
        <div className="group border-b border-white/20 pb-2 transition-colors focus-within:border-indigo-400">
          <label className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 block">Your Location</label>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
            <input 
              type="text" 
              placeholder="Enter pickup address" 
              className="bg-transparent w-full text-sm text-white focus:outline-none placeholder-zinc-600"
            />
          </div>
        </div>

        <div className="group border-b border-white/20 pb-2 transition-colors focus-within:border-white">
          <label className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 block">Dropoff (Optional)</label>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-sm border border-white"></div>
            <input 
              type="text" 
              placeholder="Enter delivery address" 
              className="bg-transparent w-full text-sm text-white focus:outline-none placeholder-zinc-600"
            />
          </div>
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-8 bg-zinc-800 text-white text-sm font-medium tracking-wide py-4 rounded-xl transition-colors duration-300 flex justify-center items-center gap-2"
      >
        View Estimates
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </motion.button>
    </motion.div>
  );
};

export default BookingCard;