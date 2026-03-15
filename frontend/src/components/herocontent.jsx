import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center pt-10 lg:pt-0"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
        <span className="h-[1px] w-8 bg-indigo-500"></span>
        <span className="text-indigo-400 text-xs tracking-[0.2em] uppercase font-semibold">Delhi NCR & Beyond</span>
      </motion.div>

      <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light leading-[1.1] tracking-tight mb-6">
        Perfect fit, <br />
        <span className="italic text-zinc-400">delivered.</span>
      </motion.h1>

      <motion.p variants={fadeUp} className="text-zinc-400 text-base sm:text-lg max-w-md leading-relaxed font-light mb-12">
        Experience bespoke tailoring from the comfort of your home. Master tailors, premium fabrics, and exact measurements at your doorstep.
      </motion.p>
    </motion.div>
  );
};

export default HeroContent;