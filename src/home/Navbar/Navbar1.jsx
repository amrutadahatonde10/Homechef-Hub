// import React, { useState, useEffect } from "react";
// import { FaRegHeart, FaHeart } from "react-icons/fa"; // Importing filled and outline heart icons
// import { Link, useNavigate } from "react-router-dom";
// import img from "../../assets/m.png";

// const Navbar1 = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLiked, setIsLiked] = useState(false); // State for the like icon

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

//   const toggleLike = () => {
//     setIsLiked(!isLiked); // Toggle the like state
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
//           <div className="mt-4 flex ml-[60%] items-center gap-4">

//             <Link
//               className="cursor-pointer"
//               to="/LikeRecipe"
//             >
//               {isLiked ? (
//                 <FaHeart className="text-red-600 text-xl" /> // Filled heart when liked
//               ) : (
//                 <FaRegHeart className="text-gray-700 text-xl" /> // Outline heart when unliked
//               )}
//             </Link>
            
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
import { FaRegHeart, FaHeart } from "react-icons/fa"; // Importing filled and outline heart icons
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/m.png";

const Navbar1 = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLiked, setIsLiked] = useState(false); // State for the like icon

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

  const toggleLike = () => {
    setIsLiked(!isLiked); // Toggle the like state
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
          <div className="mt-4 flex ml-[60%] items-center gap-4">
            {isLoggedIn && ( // Show "like" icon only if the user is logged in
              <Link
                className="cursor-pointer"
                to="/LikeRecipe"
                onClick={toggleLike} // Optional: Toggle like state when clicked
              >
                {isLiked ? (
                  <FaHeart className="text-red-600 text-xl" /> // Filled heart when liked
                ) : (
                  <FaRegHeart className="text-gray-700 text-xl" /> // Outline heart when unliked
                )}
              </Link>
            )}
            
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="mr-2 px-4 pb-1 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="ml-10 px-4 pb-1 bg-blue-500 text-white rounded hover:bg-blue-700"
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
