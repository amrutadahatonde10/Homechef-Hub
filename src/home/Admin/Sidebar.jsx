import React from 'react';
import { Link } from 'react-router-dom'; // 🆕 React Router Import
import img from '/src/assets/cheflogo.jpg';

const Sidebar = ({ visible }) => {
  const menuItems = [
    { to: '/',icon:"ri-home-7-line", label: 'Home' },
    { to: '/settings',icon: "ri-settings-4-line" , label: 'Settings' },
    { to: '/users',icon:"ri-group-line", label: 'Users' },
    { to: '/types/all',icon:"ri-folder-chart-line",label: 'Types' },
    { to: '/recipess',icon: "ri-edit-2-fill",  label: 'Edit the Recipes' }, 
    { to: '/ads',icon:"ri-advertisement-line", label: 'Ads' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-11">
      <div
        className={`fixed top-0 left-0 h-full bg-gray-700 text-white transition-transform transform mt-28 ${
          visible ? 'translate-x-0' : '-translate-x-full'
        } w-64`}
      >
        <div className="flex items-center justify-center py-6 border-b border-black-400">
          <img src={img} alt="Home Chef Hub Logo" className="h-20 w-20 mr-2" />
          {/* <span className="text-xl font-bold">Home Chef Hub</span> */}
        </div>
        <ul className="mt-4">
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-black-700">
              <Link to={item.to} className="block py-4 px-6 hover:bg-gray-700">
              <i className={`${item.icon} ml-1 text-lg mr-3`}></i>
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
