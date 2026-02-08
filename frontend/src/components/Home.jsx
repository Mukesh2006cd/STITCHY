import React from 'react';
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
      <div className="relative z-10 bg-[#0c1025]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Stitch</h1>
            <div className="flex gap-8 text-sm text-gray-400">
              <button className="hover:text-white transition">Request a stitch</button>
              <button className="hover:text-white transition">Reserve a tailor</button>
              <button className="hover:text-white transition">See prices</button>
              <button className="hover:text-white transition">Explore stitch options</button>
              <button className="hover:text-white transition">Premium tailors</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-2 text-sm mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Delhi NCR, IN</span>
              <button className="underline ml-2 text-fuchsia-400 hover:text-fuchsia-300">Change city</button>
            </div>

            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Request a stitch for<br />now or later
            </h2>

            <div className="flex items-start gap-2 mb-8">
              <svg className="w-5 h-5 text-fuchsia-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-medium">Up to 50% off your first 5 Stitchy orders. T&Cs apply.*</p>
                <p className="text-sm text-gray-400">*Valid within 15 days of signup.</p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-[#0c1025]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4">
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
            </div>
          </div>

          {/* Right Section - Image */}
          <div>
            <img 
              src={heroImage} 
              alt="Stitchy Service" 
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;