import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/this.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050814] text-white pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />
      
      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-fuchsia-600/20 blur-[150px] rounded-full top-10 left-20"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full bottom-10 right-20"></div>

      {/* Secondary Navigation */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative z-10 bg-[#0c1025]/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold">Stitch</h1>
            
            {/* Mobile: Show only key actions */}
            <div className="md:hidden flex gap-2">
              <button className="bg-fuchsia-600/20 text-fuchsia-400 px-3 py-2 rounded-lg text-xs font-medium hover:bg-fuchsia-600/30 transition">
                Request
              </button>
              <button className="bg-purple-600/20 text-purple-400 px-3 py-2 rounded-lg text-xs font-medium hover:bg-purple-600/30 transition">
                Prices
              </button>
            </div>
            
            {/* Desktop: Show all options */}
            <div className="hidden md:flex gap-8 text-sm text-gray-400">
              <button className="hover:text-white transition">Request a stitch</button>
              <button className="hover:text-white transition">Reserve a tailor</button>
              <button className="hover:text-white transition">See prices</button>
              <button className="hover:text-white transition">Explore stitch options</button>
              <button className="hover:text-white transition">Premium tailors</button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex items-center gap-2 text-sm mb-6"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Delhi NCR, IN</span>
              <button className="underline ml-2 text-fuchsia-400 hover:text-fuchsia-300">Change city</button>
            </motion.div>

            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight"
            >
              Request a stitch for<br />now or later
            </motion.h2>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex items-start gap-2 mb-8"
            >
              <svg className="w-5 h-5 text-fuchsia-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium">Up to 50% off your first 5 Stitchy orders. T&Cs apply.*</p>
                <p className="text-sm text-gray-400">*Valid within 15 days of signup.</p>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="bg-[#0c1025]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <button className="text-left font-medium flex items-center gap-2">
                  Pickup now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-lg p-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Pickup location" 
                    className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
                  />
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                <div className="flex items-center gap-3 bg-black/30 border border-white/10 rounded-lg p-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <rect x="3" y="3" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Dropoff location" 
                    className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <button className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white py-4 rounded-lg font-medium transition">
                See prices
              </button>
            </motion.div>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <img 
              src={heroImage} 
              alt="Stitchy Service" 
              className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Footer/About Section */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="relative z-10 bg-black border-t border-white/10 mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><button className="hover:text-white transition">About us</button></li>
                <li><button className="hover:text-white transition">Our services</button></li>
                <li><button className="hover:text-white transition">Newsroom</button></li>
                <li><button className="hover:text-white transition">Investors</button></li>
                <li><button className="hover:text-white transition">Blog</button></li>
                <li><button className="hover:text-white transition">Careers</button></li>
                <li><button className="hover:text-white transition">Stitchy Premium</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><button className="hover:text-white transition">Stitch</button></li>
                <li><button className="hover:text-white transition">Design</button></li>
                <li><button className="hover:text-white transition">Alterations</button></li>
                <li><button className="hover:text-white transition">Stitchy for Business</button></li>
                <li><button className="hover:text-white transition">Custom Orders</button></li>
                <li><button className="hover:text-white transition">Gift cards</button></li>
                <li><button className="hover:text-white transition">Stitchy Premium</button></li>
              </ul>
            </div>

            {/* Global citizenship */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Global citizenship</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><button className="hover:text-white transition">Safety</button></li>
                <li><button className="hover:text-white transition">Sustainability</button></li>
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Locations</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><button className="hover:text-white transition">Reserve</button></li>
                <li><button className="hover:text-white transition">Cities</button></li>
              </ul>
            </div>
          </div>

          {/* Social Links & Language */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 py-6 border-t border-white/10">
            <div className="flex items-center gap-4">
              <button className="hover:text-gray-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
              <button className="hover:text-gray-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </button>
              <button className="hover:text-gray-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button className="hover:text-gray-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <button className="flex items-center gap-2 text-sm hover:text-gray-400 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                English
              </button>
              <button className="flex items-center gap-2 text-sm hover:text-gray-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Delhi NCR
              </button>
            </div>
          </div>

          {/* App Store Links */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 py-6">
            <button className="border border-white/20 rounded-lg px-4 py-2 hover:bg-white/5 transition">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </button>
            <button className="border border-white/20 rounded-lg px-4 py-2 hover:bg-white/5 transition">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </div>
            </button>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 pt-6 border-t border-white/10 text-sm text-gray-400">
            <div>© 2024 Stitchy Technologies Inc</div>
            <div className="flex gap-4 sm:gap-6">
              <button className="hover:text-white transition">Privacy</button>
              <button className="hover:text-white transition">Accessibility</button>
              <button className="hover:text-white transition">Terms</button>
            </div>
          </div>
        </div>
      </motion.footer>

    </div>
  );
};

export default Home;