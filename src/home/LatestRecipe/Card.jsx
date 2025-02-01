import React, { useState } from "react";
import { IoMdHeart } from "react-icons/io"; // Use the filled heart icon

const Card = ({ image, title, ingredients, time }) => {
  const [isLiked, setIsLiked] = useState(false); // state to track if the icon is clicked

  // Toggle like button color on click
  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="pt-[16vh]">
      <div className=" bg-purple-100 rounded-lg shadow-lg overflow-hidden p-4 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md "
        />

        <div
          className="absolute top-5 right-5 p-1 rounded-full bg-zinc-400 cursor-pointer "
          onClick={handleHeartClick}
        >
          <IoMdHeart
            className={`text-lg ${isLiked ? "text-red-600" : "text-white"}`}
          />
        </div>

        <h3 className="text-center text-xl font-semibold mt-4">{title}</h3>
        <p className="text-sm mt-2 text-center">
          <span className="text-md font-semibold">Time:</span> {time}
        </p>

        <h4 className="text-md font-semibold ml-[30%] mt-2">Ingredients:</h4>
        <div className="grid grid-cols-2 gap-2 ml-[30%] mt-2">
          <ul className="list-disc pl-6">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-sm text-gray-600">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-[30%]">
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;










// // Cards.js
// import React from "react";
// import Card from "./Card";

// const Cards = () => {
//   const cardData = [
//     {
//       id: 1,
//       image:
//         "https://imgs.search.brave.com/ckXEO3nP4Qmh5qvc-oG640qjb5OPq49XfheegW2S8Io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBiL0RhbEJhdGku/anBn",
//       title: "Dal bati",
//       ingredients: [
//         "Wheat flour",
//         "Lentils",
//         "Ghee",
//         "Spices",
//         "Coriander",
//         "Cumin",
//         "Chili powder",
//       ],
//       time: "45 minutes",
//     },
//     {
//       id: 2,
//       image:
//         "https://imgs.search.brave.com/Pgs_9p4ySSKCTsSA_in99y-9RnNfpI_LyhyIrH8Semg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NDc4MDc0MC9waG90/by90b21hdG8tc291/cC1vbi13b29kZW4t/dGFibGUtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9S2V2N2JV/amJYVHBYbnF1MDJK/VXFYSl9JRkF1NGI3/ZmRCdDBsVUtuc1dl/UT0",
//       title: "Tomato Soup",
//       ingredients: [
//         "Tomatoes",
//         "Garlic",
//         "Onions",
//         "Spices",
//         "Carrots",
//         "Basil",
//         "Olive oil",
//       ],
//       time: "30 minutes",
//     },
//     {
//       id: 3,
//       image:
//         "https://imgs.search.brave.com/ZpaY4AaZlsVhWdgUcEDwrf1cVVgFVPNzV4HGHNKN3dI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjgw/MjY4MTkwL3Bob3Rv/L21pc28tcmFtZW4t/bm9vZGxlLXNvdXAu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWgzQlNSanlDYkZo/SHF3b1FwcGlMc2Ny/M2lHS3VIZFIzdU5K/dXU4U1phMkU9",
//       title: "Noodles",
//       ingredients: [
//         "Noodles",
//         "Vegetables",
//         "Soy sauce",
//         "Spices",
//         "Ginger",
//         "Garlic",
//         "Sesame oil",
//       ],
//       time: "20 minutes",
//     },
//     {
//       id: 4,
//       image:
//         "https://imgs.search.brave.com/YjzGHVOoIEoSLQIjdZ26WXWncPPLtwG8PMnDfMH52e4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzUxLzUxLzEw/LzM2MF9GXzk1MTUx/MTAxOV9NMElwSDNu/NjhwTFpkZGJNNXl0/SXY5SmtMTDdrRkox/dC5qcGc",
//       title: "Veg Thali",
//       ingredients: [
//         "Rice",
//         "Dal",
//         "Roti",
//         "Vegetables",
//         "Pickle",
//         "Curd",
//         "Chapati",
//       ],
//       time: "1 hour",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-4 gap-4 p-4">
//       {cardData.map((card, index) => (
//         <Card
//           key={card.id}
//           image={card.image}
//           title={card.title}
//           ingredients={card.ingredients}
//           time={card.time}
//           isSpecial={index === 3} // Mark the 4th card as special
//         />
//       ))}
//     </div>
//   );
// };

// export default Cards;

// // Card.js
// import React, { useState } from "react";
// import { IoMdHeart } from "react-icons/io";
// import { motion } from "framer-motion";

// const Card = ({ image, title, ingredients, time, isSpecial }) => {
//   const [isLiked, setIsLiked] = useState(false);

//   const handleHeartClick = () => {
//     setIsLiked(!isLiked);
//   };

//   if (isSpecial) {
//     return (
//       <div className="pt-[16vh] bg-purple-100 rounded-lg shadow-lg overflow-hidden relative">
//         <motion.div
//           className="text-center text-2xl font-bold text-red-600 mb-4"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//         >
//           Latest Recipe
//         </motion.div>
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-48 object-cover rounded-md"
//         />
//         <h3 className="text-center text-xl font-semibold mt-4">{title}</h3>
//       </div>
//     );
//   }

//   return (
//     <div className="pt-[16vh]">
//       <div className=" bg-purple-100 rounded-lg shadow-lg overflow-hidden p-4 relative">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-48 object-cover rounded-md "
//         />

//         <div
//           className="absolute top-5 right-5 p-1 rounded-full bg-zinc-400 cursor-pointer "
//           onClick={handleHeartClick}
//         >
//           <IoMdHeart
//             className={`text-lg ${isLiked ? "text-red-600" : "text-white"}`}
//           />
//         </div>

//         <h3 className="text-center text-xl font-semibold mt-4">{title}</h3>
//         <p className="text-sm mt-2 text-center">
//           <span className="text-md font-semibold">Time:</span> {time}
//         </p>

//         <h4 className="text-md font-semibold ml-[30%] mt-2">Ingredients:</h4>
//         <div className="grid grid-cols-2 gap-2 ml-[30%] mt-2">
//           <ul className="list-disc pl-6">
//             {ingredients.map((ingredient, index) => (
//               <li key={index} className="text-sm text-gray-600">
//                 {ingredient}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="flex justify-between items-center mt-4">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-[30%]">
//             View Recipe
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
