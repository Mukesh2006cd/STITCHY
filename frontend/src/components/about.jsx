import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Animation variants for scrolling
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="relative w-full py-24 lg:py-40 px-6 lg:px-12 max-w-screen-2xl mx-auto overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent -z-10"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }} // Triggers animation when section is in view
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
      >
        
        {/* Left Side: Bold Statement */}
        <div className="lg:col-span-5">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-indigo-500"></span>
            <span className="text-indigo-400 text-xs tracking-[0.2em] uppercase font-semibold">Our Philosophy</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-tight">
            The art of bespoke, <br/>
            <span className="italic text-zinc-500">reimagined for the modern world.</span>
          </motion.h2>
        </div>

        {/* Right Side: Professional Copy & Stats */}
        <div className="lg:col-span-7 flex flex-col gap-8 lg:pt-12">
          <motion.p variants={itemVariants} className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
            At Stitchy, we believe that a perfect fit shouldn't require compromising your schedule. We bridge the gap between traditional tailoring craftsmanship and modern on-demand convenience. 
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-zinc-500 text-sm sm:text-base leading-relaxed font-light">
            Whether it's a slight alteration to your favorite denim or a completely custom-measured suit, our network of master tailors brings the fitting room directly to your doorstep. We handle the logistics, the precision measuring, and the final delivery, so you can focus on looking your absolute best.
          </motion.p>

          {/* Aesthetic Stat/Feature Bar */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 mt-4 border-t border-zinc-800">
            <div>
              <h4 className="text-white font-medium text-lg mb-1">Expert</h4>
              <p className="text-zinc-500 text-xs tracking-widest uppercase">Master Tailors</p>
            </div>
            <div>
              <h4 className="text-white font-medium text-lg mb-1">Premium</h4>
              <p className="text-zinc-500 text-xs tracking-widest uppercase">Fabric Sourcing</p>
            </div>
            <div className="hidden sm:block">
              <h4 className="text-white font-medium text-lg mb-1">Seamless</h4>
              <p className="text-zinc-500 text-xs tracking-widest uppercase">Doorstep Delivery</p>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default AboutSection;