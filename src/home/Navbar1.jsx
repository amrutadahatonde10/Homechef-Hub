import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <div>
      <div 
        className='h-20 w-full flex'>
        <div className='w-[3%] flex'>
          <FaArrowLeft className='mt-1 ml-3'/>
        </div>

        <div className="h-full w-[22%] flex">
          <img
            src="https://imgs.search.brave.com/h4eZqHO0NUYV2xHHaGPiRIP-7W7k9qiCxDJjjUr_B2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzcxLzk2LzM4/LzM2MF9GXzE3MTk2/MzgzMF9kYWdxUHBX/cVphZ2pnNkpTYlFh/YW9PT0h5TlI2R2lW/ay5qcGc"
            alt="logo" className='w-20vh h-full bg-blue-100 '
          />
          <h1 className='mt-5 italic'>
            <b>
              Home
              <span className='text-gray-600'>Chef</span>
              Hub
            </b>
          </h1>
        </div>

        <div className='h-full w-[45%]'>
          <b>
            <div className='bg-black-200 mt-5 ml-40'>
              Simple recipes made for 
              <span className='text-purple-400 italic'> real, actual, everyday life.</span>
            </div>
          </b>
        </div>

        <div className='h-full w-[30%]'>
          <div className='mt-5 flex ml-60'>
            <b>
              <span className='italic ml-8'>Hello</span>
              ,user
            </b>
            <FaHouseUser className='ml-1 mt-1'/>
            <Link to="/login" className='ml-2 px-4 pb-1 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Login
            </Link>  
          </div>
        </div>
      </div>

      <div className='w-full bg-gray-200 h-px'></div>
    </div>
  );
}

export default Navbar1;
