import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 px-8">
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="border border-gray-400 rounded-3xl p-8 mb-8">
          <div className="border border-gray-400 rounded-2xl h-48 mb-6 bg-gray-900"></div>
          <p className="text-center text-lg font-light">
            get your desired tailor in 10 minutes - wehre skill meets speed
          </p>
        </div>

        {/* Find Ur Tailor Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-light mb-6">FIND UR TAILOR</h2>
          
          <div className="grid grid-cols-12 gap-4">
            {/* Left side - Search bar and large rectangle */}
            <div className="col-span-5 space-y-4">
              <button className="w-full border border-gray-400 rounded-xl h-12 hover:bg-gray-800 transition-colors"></button>
              <button className="w-full border border-gray-400 rounded-xl h-32 hover:bg-gray-800 transition-colors"></button>
            </div>
            
            {/* Right side - Grid of rectangles */}
            <div className="col-span-7 grid grid-cols-2 gap-4">
              <button className="border border-gray-400 rounded-xl h-20 hover:bg-gray-800 transition-colors"></button>
              <button className="border border-gray-400 rounded-xl h-20 hover:bg-gray-800 transition-colors"></button>
              <button className="border border-gray-400 rounded-xl h-20 hover:bg-gray-800 transition-colors"></button>
              <button className="border border-gray-400 rounded-xl h-20 hover:bg-gray-800 transition-colors"></button>
            </div>
          </div>
          
          {/* Bottom center rectangle */}
          <div className="flex justify-center mt-4">
            <button className="border border-gray-400 rounded-xl h-16 w-32 hover:bg-gray-800 transition-colors"></button>
          </div>
        </div>

        {/* Sign In Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-light mb-6">SIGN IN TO GET MORE OPTIONS</h2>
        </div>

        {/* Bottom border line */}
        <div className="border-t border-gray-400 mt-16"></div>
      </div>
    </div>
  );
};

export default Home;