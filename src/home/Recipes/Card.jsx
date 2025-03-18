import React, { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Axios from "../../Axios"; 
import { useNavigate } from "react-router-dom";

const Card = ({ id, image, title, ingredients, time, type, initialLike }) => {
  const [isLiked, setIsLiked] = useState(initialLike); // Use initialLike from props
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const Id = id;

  const handleHeartClick = async () => {
    try {
      const response = await Axios().put(`/login/${id}`, {
        Like: !isLiked,
      }); 
      if (response.status === 200) {
        setIsLiked(!isLiked); 
      } else {                              
        console.error("Failed to update like status");
      }
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  const handleRatingClick = (newRating) => {
    setRating(newRating);                                
  };

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg overflow-hidden relative ">
      {/* Image with Like Icon */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
        <div
          className="absolute top-1 right-1 bg-white/80 p-1 rounded-full cursor-pointer"
          onClick={handleHeartClick}
        >
          <IoMdHeart
            className={`text-lg ${isLiked ? "text-red-600" : "text-gray-400"}`}
          />
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex justify-center mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            onClick={() => handleRatingClick(star)}
            className="cursor-pointer"
          >
            {star <= rating ? (
              <AiFillStar className="text-yellow-500 text-xl" />
            ) : (
              <AiOutlineStar className="text-yellow-400 text-xl" />
            )}
          </div>
        ))}
      </div>

      <h3 className="text-center text-xl font-semibold mt-1">{title}</h3>
      <p className="text-sm mt-1 text-center">
        <span className="font-semibold">Time:</span> {time} minutes
      </p>
      <p className="text-sm mt-1 text-center font-semibold text-purple-500">{type}</p>
      <h4 className="text-md font-semibold mt-1 text-center">Ingredients:</h4>
      <ul className="list-disc pl-6 mt-2 text-gray-600 text-sm ml-[34%]">
        {ingredients.split(",").map((ingredient, index) => (
          <li key={index}>{ingredient.trim()}</li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => navigate(`/recipes/${Id}`)} // Navigate to recipe details
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default Card;


