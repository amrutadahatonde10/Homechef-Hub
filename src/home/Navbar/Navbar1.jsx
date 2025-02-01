import React from "react";
// import { FaArrowLeft } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img from "../../assets/m.png";

const Navbar1 = () => {
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="h-[8vh] w-full flex bg-gray-200 shadow-md py-[1px]">
        {/* <div className='w-[3%] flex'>
          <FaArrowLeft className='mt-1 ml-3'/>
        </div> */}

        <div className="h-full w-[22%] flex bg-purple-200">
          <img
            // src="https://imgs.search.brave.com/h4eZqHO0NUYV2xHHaGPiRIP-7W7k9qiCxDJjjUr_B2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzcxLzk2LzM4/LzM2MF9GXzE3MTk2/MzgzMF9kYWdxUHBX/cVphZ2pnNkpTYlFh/YW9PT0h5TlI2R2lW/ay5qcGc"
            src={img}
            alt="homecheflogo"
            className="w-10vh h-full bg-purple-200 "
          />
          <h1 className="mt-4 italic ">
            <b>
              Home
              <span className="text-gray-600 ">Chef</span>
              Hub
            </b>
          </h1>
        </div>

        <div className="h-full w-[58%] bg-purple-200">
          <b>
            <div className="bg-black-200 mt-4 ml-60">
              Simple recipes made for
              <span className="text-purple-600 italic">
                {" "}
                real, actual, everyday life.
              </span>
            </div>
          </b>
        </div>

        <div className="h-full w-[20%] bg-purple-200">
          <div className="mt-4 flex ml-20">
            {/* <b>
              <span className='italic ml-8'>Hello</span>
              ,user
            </b> */}
            <FaHouseUser className="ml-[50%] mt-1" />
            <Link
              to="/login"
              className="ml-2 px-4 pb-1 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              LogIn
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 h-px"></div>
    </div>
  );
};

export default Navbar1;
