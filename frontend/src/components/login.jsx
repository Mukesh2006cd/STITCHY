import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, User, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import applogo from '../assets/applogo.JPG';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050814] text-white relative overflow-hidden">
      {/* Background Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" 
      />

      {/* Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="absolute w-[500px] h-[500px] bg-fuchsia-600/20 blur-[150px] rounded-full top-10 left-20"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full bottom-10 right-20"
      />

      {/* Main Card */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="relative z-10 w-full max-w-md px-6 py-4"
      >
        {/* Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mb-4"
        >
          <img 
            src={applogo} 
            alt="Stitchy Icon" 
            className="w-16 h-16 mx-auto mb-2 cursor-pointer rounded-lg" 
            onClick={() => navigate('/')}
          />
          <h1 className="text-2xl font-bold tracking-wide text-fuchsia-400">
            STITCHY
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Get your clothes stitched in a click
          </p>
        </motion.div>

        {/* Auth Box */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0c1025]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-5"
        >
          {/* Tabs */}
          <div className="flex bg-black/30 rounded-xl p-1 mb-5">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl transition ${
                activeTab === "login"
                  ? "bg-fuchsia-600 text-white"
                  : "text-gray-400"
              }`}
            >
              <Lock size={16} />
              Login
            </button>

            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl transition ${
                activeTab === "signup"
                  ? "bg-fuchsia-600 text-white"
                  : "text-gray-400"
              }`}
            >
              <User size={16} />
              Sign Up
            </button>
          </div>

          {/* Animated Form Switch */}
          <AnimatePresence mode="wait">
            {activeTab === "login" ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.4 }}
              >
                {/* LOGIN FORM */}
                <AuthInput
                  label="Email Address"
                  placeholder="your@email.com"
                  icon={<Mail size={18} />}
                />

                <AuthInput
                  label="Password"
                  placeholder="••••••••"
                  type="password"
                  icon={<Lock size={18} />}
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-4 py-2.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 transition font-semibold shadow-lg"
                >
                  Access Stitchy
                </motion.button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-[1px] bg-white/10"></div>
                  <p className="text-xs text-gray-500 uppercase">or sign in with</p>
                  <div className="flex-1 h-[1px] bg-white/10"></div>
                </div>

                {/* Google Button */}
                <button className="w-full py-2.5 rounded-xl border border-white/10 bg-black/30 hover:bg-black/40 transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                {/* SIGNUP FORM */}
                <AuthInput
                  label="Username"
                  placeholder="Choose a username"
                  icon={<User size={18} />}
                />

                <AuthInput
                  label="Email Address"
                  placeholder="your@email.com"
                  icon={<Mail size={18} />}
                />

                <AuthInput
                  label="Password"
                  placeholder="••••••••"
                  type="password"
                  icon={<Lock size={18} />}
                />

                <AuthInput
                  label="Confirm Password"
                  placeholder="••••••••"
                  type="password"
                  icon={<Lock size={18} />}
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full mt-4 py-2.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 transition font-semibold shadow-lg"
                >
                  Create Account
                </motion.button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-[1px] bg-white/10"></div>
                  <p className="text-xs text-gray-500 uppercase">or sign up with</p>
                  <div className="flex-1 h-[1px] bg-white/10"></div>
                </div>

                {/* Google Button */}
                <button className="w-full py-2.5 rounded-xl border border-white/10 bg-black/30 hover:bg-black/40 transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* 🔥 Reusable Input Component */
function AuthInput({ label, placeholder, type = "text", icon }) {
  return (
    <div className="mb-4">
      <label className="text-xs text-gray-300">{label}</label>

      <div className="mt-1.5 flex items-center gap-2 bg-black/30 border border-white/10 rounded-xl px-3 py-2.5">
        <span className="text-gray-400">{icon}</span>

        <input
          type={type}
          placeholder={placeholder}
          className="bg-transparent outline-none w-full text-sm text-gray-200 placeholder-gray-500"
        />
      </div>
    </div>
  );
}

