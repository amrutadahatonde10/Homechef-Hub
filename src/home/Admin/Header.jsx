import React from 'react';

const Header = ({ onToggle }) => {
  return (
    <div className="bg-white py-4 px-6 border-b border-gray-300 flex justify-between items-center">
      <div className="text-lg font-semibold">Home Chef Hub</div>
      <button
        onClick={onToggle}
        className="bg-blue-400 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
       <i className="ri-menu-line"></i>
      </button>
    </div>
  );
};

export default Header;
