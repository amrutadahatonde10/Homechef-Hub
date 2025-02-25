// import React, { useState, useEffect } from "react";
// import { FaHouseUser } from "react-icons/fa6";
// import { Link, useNavigate } from "react-router-dom";
// import img from "../../assets/m.png";

// const Navbar1 = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(loggedInStatus === "true");
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("user");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <div className="fixed top-0 w-full z-50">
//       <div className="h-[8vh] w-full flex bg-gray-200 shadow-md py-[1px]">
//         <div className="h-full w-[22%] flex bg-purple-200">
//           <img src={img} alt="homecheflogo" className="w-10vh h-full bg-purple-200" />
//           <h1 className="mt-4 italic ">
//             <b>
//               Home<span className="text-gray-600">Chef</span>Hub
//             </b>
//           </h1>
//         </div>

//         <div className="h-full w-[58%] bg-purple-200">
//           <b>
//             <div className="bg-black-200 mt-4 ml-60">
//               Simple recipes made for
//               <span className="text-purple-600 italic"> real, actual, everyday life.</span>
//             </div>
//           </b>
//         </div>

//         <div className="h-full w-[20%] bg-purple-200">
//           <div className="mt-4 flex ml-20">
//             <FaHouseUser className="ml-[50%] mt-1" />
//             {isLoggedIn ? (
//               <button
//                 onClick={handleLogout}
//                 className="ml-2 px-4 pb-1 bg-red-500 text-white rounded hover:bg-red-700"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 to="/login"
//                 className="ml-2 px-4 pb-1 bg-blue-500 text-white rounded hover:bg-blue-700"
//               >
//                 LogIn
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-gray-200 h-px"></div>
//     </div>
//   );
// };

// export default Navbar1;


import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa"; // Importing the "like" icon
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/m.png";

const Navbar1 = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="h-[8vh] w-full flex bg-gray-200 shadow-md py-[1px]">
        <div className="h-full w-[22%] flex bg-purple-200">
          <img src={img} alt="homecheflogo" className="w-10vh h-full bg-purple-200" />
          <h1 className="mt-4 italic ">
            <b>
              Home<span className="text-gray-600">Chef</span>Hub
            </b>
          </h1>
        </div>

        <div className="h-full w-[58%] bg-purple-200">
          <b>
            <div className="bg-black-200 mt-4 ml-60">
              Simple recipes made for
              <span className="text-purple-600 italic"> real, actual, everyday life.</span>
            </div>
          </b>
        </div>

        <div className="h-full w-[20%] bg-purple-200">
          <div className="mt-4 flex ml-20">
            <FaRegHeart className="ml-[50%] mt-1" /> {/* Replacing the user icon with a like icon */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="ml-2 px-4 pb-1 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="ml-2 px-4 pb-1 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                LogIn
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 h-px"></div>
    </div>
  );
};

export default Navbar1;
