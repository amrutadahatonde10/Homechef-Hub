import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const Navbar2 = () => {
  return (
    <div className="fixed top-[8vh] w-full z-40 bg-purple-300 ">
      <div className="h-[8vh] w-full bg-purple-300 ">
        <nav className="shadow-md py-2 ">
          <div className="flex items-center justify-between ">
            <ul className="flex ml-5 space-x-10 mt-1">
              <li>
                <a
                  href="#"
                  className="text-base hover:text-gray-500 transition duration-300"
                >
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-base hover:text-gray-500 transition duration-300"
                >
                  <b>About</b>
                </a>
              </li>
              <li>
                <a
                  href="#recipe"
                  className="text-base hover:text-gray-500 transition duration-300"
                >
                  <b>Recipes</b>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-base hover:text-gray-500 transition duration-300"
                >
                  <b>Contact</b>
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  className="text-base hover:text-gray-500 transition duration-300"
                >
                  <b>Add Recipe</b>
                </a>
              </li>
            </ul>

            <div className="relative mr-2">
              <MdOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search By Ingredients"
                className="pl-6 rounded-md border-2 w-96 h-10"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;
