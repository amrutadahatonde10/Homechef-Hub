// import React, { useState } from "react";
// import { IoMdHeart } from "react-icons/io"; // Use the filled heart icon
// import { useNavigate } from "react-router-dom";

// const Card = ({ Id, image, title, ingredients, time }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const navigate = useNavigate();

//   // Toggle like button color on click
//   const handleHeartClick = () => {
//     setIsLiked(!isLiked);
//   };

//   return (
//     <div className="pt-[16vh]">
//       <div className="bg-purple-100 rounded-lg shadow-lg overflow-hidden p-4 relative">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-48 object-cover rounded-md"
//         />

//         <div
//           className="absolute top-5 right-5 p-1 rounded-full bg-white/80 cursor-pointer"
//           onClick={handleHeartClick}
//         >
//           <IoMdHeart
//             className={`text-lg ${isLiked ? "text-red-600" : "text-gray-400"}`}
//           />
//         </div>

//         <h3 className="text-center text-xl font-semibold mt-4">{title}</h3>
//         <p className="text-sm mt-2 text-center flex ml-[35%]">
//           <span className="font-semibold">Time:</span> {time}<h4>minutes</h4>
//         </p>

//         <h4 className="text-md font-semibold mt-2 text-center">Ingredients:</h4>
//         <ul className="ml-[28%] list-disc pl-6 mt-2">
//           <ul className="list-disc pl-6 mt-2 text-gray-600 text-sm">
//             {Array.isArray(ingredients)
//               ? ingredients.map((ingredient, index) => (
//                   <li key={index}>{ingredient}</li>
//                 ))
//               : ingredients
//                   .split(",")
//                   .map((ingredient, index) => (
//                     <li key={index}>{ingredient.trim()}</li>
//                   ))}
//           </ul>
//         </ul>

//         <div className="flex justify-center mt-4">
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//             onClick={() => navigate(`/recipes/${Id}`)} // Navigate to recipe details
//           >
//             View Recipe
//           </button>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default Card;
