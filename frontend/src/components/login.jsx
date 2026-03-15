import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans flex overflow-hidden selection:bg-indigo-500/30">
      
      {/* Left Side: Editorial Imagery (Hidden on Mobile) */}
      <div className="hidden lg:block relative w-1/2 overflow-hidden bg-zinc-900">
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          // Close up of tailored fabric or threads
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1600&auto=format&fit=crop" 
          alt="Premium fabric texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        {/* Gradients to blend the image seamlessly into the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#09090b]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80"></div>
        
        {/* Aesthetic Overlay Text */}
        <div className="absolute bottom-12 left-12 max-w-md">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-4xl font-serif font-light mb-4">Crafted for you.</h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              Log in to access your measurements, track your bespoke orders, and consult with our master tailors.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-24 relative z-10">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />

        <div className="w-full max-w-md">
          {/* Back to Home Button */}
          <motion.button
            onClick={() => navigate('/')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors mb-16"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </motion.button>

          {/* Form Header */}
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl font-serif font-medium mb-2">
              Welcome back.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-zinc-400 text-sm mb-10">
              Please enter your details to sign in.
            </motion.p>

            {/* Inputs */}
            <form className="space-y-6">
              <motion.div variants={fadeUp} className="group border-b border-white/20 pb-2 transition-colors focus-within:border-white">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2 block">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="bg-transparent w-full text-base text-white focus:outline-none placeholder-zinc-700 transition-all"
                />
              </motion.div>

              <motion.div variants={fadeUp} className="group border-b border-white/20 pb-2 transition-colors focus-within:border-white relative">
                <div className="flex justify-between items-end mb-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 block">Password</label>
                  <button type="button" className="text-[10px] uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors">Forgot?</button>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="bg-transparent w-full text-base text-white focus:outline-none placeholder-zinc-700 transition-all tracking-widest"
                />
              </motion.div>

              {/* Login Button */}
              <motion.button 
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 bg-white text-black text-sm font-medium tracking-wide py-4 rounded-xl transition-all duration-300 hover:bg-zinc-200"
              >
                Sign In
              </motion.button>
            </form>

            {/* Divider */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 my-8">
              <div className="h-[1px] flex-1 bg-white/10"></div>
              <span className="text-xs tracking-widest uppercase text-zinc-500">Or continue with</span>
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </motion.div>

            {/* Social Logins */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-center items-center gap-2 py-3.5 border border-white/10 rounded-xl text-sm font-medium hover:border-white/30 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
              </motion.button>
              
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-center items-center gap-2 py-3.5 border border-white/10 rounded-xl text-sm font-medium hover:border-white/30 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email
              </motion.button>
            </motion.div>

            {/* Sign Up Link */}
            <motion.p variants={fadeUp} className="mt-10 text-center text-sm text-zinc-500">
              Don't have an account?{' '}
              <button type="button" onClick={() => navigate('/signup')} className="text-white hover:text-indigo-400 transition-colors underline underline-offset-4">
                Request access
              </button>
            </motion.p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Login;