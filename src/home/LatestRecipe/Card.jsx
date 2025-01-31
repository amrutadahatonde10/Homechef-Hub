import React, { useState } from 'react';
import { IoMdHeart } from "react-icons/io"; // Use the filled heart icon

const Card = ({ image, title, ingredients, time }) => {
  const [isLiked, setIsLiked] = useState(false); // state to track if the icon is clicked

  // Toggle like button color on click
  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className=" bg-zinc-200 rounded-lg shadow-lg overflow-hidden p-4 relative">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md " />
      
      <div 
        className="absolute top-5 right-5 p-1 rounded-full bg-zinc-400 cursor-pointer "
        onClick={handleHeartClick}
      >
        <IoMdHeart className={`text-lg ${isLiked ? 'text-red-600' : 'text-white'}`} />
      </div>

      <h3 className="text-center text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm mt-2 text-center"><span className='text-md font-semibold'>Time:</span> {time}</p>
      
      <h4 className="text-md font-semibold ml-[30%] mt-2">Ingredients:</h4>
      <div className="grid grid-cols-2 gap-2 ml-[30%] mt-2">
        <ul className="list-disc pl-6">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-sm text-gray-600">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-[30%]">View Recipe</button>
      </div>
    </div>
  );
};

export default Card;
