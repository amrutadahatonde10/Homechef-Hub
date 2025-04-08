import React from 'react';

const Header = ({ onToggle }) => {
  return (
    <div className="bg-white py-4 px-6 border-b border-gray-300 flex justify-center items-center">
       <div className='w-1/3'></div>
      <h1 className="font-bold text-black-800 text-2xl text-center w-1/3">Admin</h1>
      <div className='w-1/3 flex justify-end'>
      <button
        onClick={onToggle}
        className="bg-zinc-100 text-black px-4 py-2 rounded shadow hover:bg-purple-300"
      >
       <i className="ri-menu-line"></i>
      </button>
    </div>
    </div>
  );
};

export default Header;
