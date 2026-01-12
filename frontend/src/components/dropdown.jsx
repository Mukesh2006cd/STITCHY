import React, { useState } from 'react';

const Dropdown = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="hover:opacity-80 cursor-pointer">
        {title}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-3 w-40 origin-top rounded-lg bg-white text-gray-800 shadow-lg z-10">
          <div className="px-4 py-2 cursor-pointer hover:bg-purple-100">
            Casual
          </div>
          <div className="px-4 py-2 cursor-pointer hover:bg-purple-100">
            Formal
          </div>
          <div className="px-4 py-2 cursor-pointer hover:bg-purple-100">
            Party Wear
          </div>
        </div>
      )}
    </div>
  )
}
export default Dropdown;