import React from 'react';
import { motion } from 'framer-motion';
import HeroContent from './herocontent';
import BookingCard from './bookingcard';
import AboutSection from './about';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans overflow-x-hidden selection:bg-indigo-500/30">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />

      <main className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 pt-10 lg:pt-20 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 min-h-[85vh] items-center">
        
        {/* Left Side Component */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <HeroContent />
        </div>

        {/* Right Side: Archway Image & Form Component */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center order-1 lg:order-2 h-[500px] lg:h-[700px] w-full">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] h-[400px] sm:h-[500px] lg:h-[650px] rounded-t-full rounded-b-3xl overflow-hidden relative border border-white/5 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop" 
              alt="Tailor working" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80"></div>
          </motion.div>

          <BookingCard />
          
        </div>
      </main>

      <AboutSection />

    </div>
  );
};

export default Home;