import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";

const Card = ({ image, title, ingredients, time }) => {
  return (
    <div className="bg-zinc-200 rounded-lg shadow-lg overflow-hidden p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-center text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm mt-2 text-center"><span className='text-md font-semibold'>Time:</span> {time}</p>
      
      <h4 className="text-md font-semibold mt-2">Ingredients:</h4>
      <div className="grid grid-cols-2 gap-2">
        <ul className="list-disc pl-6 ">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-sm text-gray-600">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View Recipe</button>
        <IoMdHeartEmpty className="text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;
