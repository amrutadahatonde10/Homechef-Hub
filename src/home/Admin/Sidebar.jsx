import React from 'react';
import { Link } from 'react-router-dom'; // 🆕 React Router Import
import img from '../Admin/cheflogo.jpg';

const Sidebar = ({ visible }) => {
  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/settings', label: 'Settings' },
    { to: '/users', label: 'Users' },
    { to: '/categories', label: 'Categories' },
    { to: '/recipess', label: 'Edit the Recipes' }, 
    { to: '/ads', label: 'Ads' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform mt-28 ${
          visible ? 'translate-x-0' : '-translate-x-full'
        } w-64`}
      >
        <div className="flex items-center justify-center py-6 border-b border-gray-700">
          <img src={img} alt="Home Chef Hub Logo" className="h-20 w-20 mr-2" />
          <span className="text-xl font-bold">Home Chef Hub</span>
        </div>
        <ul className="mt-4">
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-gray-700">
              <Link to={item.to} className="block py-4 px-6 hover:bg-gray-700">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
