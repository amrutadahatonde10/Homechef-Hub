import React, { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { RiShareForwardLine } from "react-icons/ri";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Axios from "../../Axios";
import { useNavigate } from "react-router-dom";

const Card = ({ id, image, title, ingredients, time, type, initialLike }) => {
  const [isLiked, setIsLiked] = useState(initialLike); // Use initialLike from props
  const [rating, setRating] = useState(0);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [shareLink, setShareLink] = useState(""); // Store the shareable link
  const [copyButtonText, setCopyButtonText] = useState("Copy"); // Button text state
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

  const handleShareClick = () => {
    const link = `http://localhost:5173/recipe/${Id}`; // Generate a shareable link
    setShareLink(link);
    setShowSharePopup(true); // Show the share popup
    setCopyButtonText("Copy"); // Reset button text to "Copy"

    setTimeout(() => {
      setShowSharePopup(false);
    },3000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    setCopyButtonText("Copied");
    setTimeout(() => {
      setShowSharePopup(false); // Close popup after delay
    }, 1000); // Close popup after 1 second
  };

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg overflow-hidden relative">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
        {/* Icons Column */}
        <div className="absolute top-1 right-1 flex flex-col items-center space-y-1">
          {/* Heart Icon */}
          <div
            className="bg-zinc-200 p-1 rounded-full cursor-pointer"
            onClick={handleHeartClick}
          >
            <IoMdHeart
              className={`text-lg ${
                isLiked ? "text-red-600" : "text-zinc-700"
              }`}
            />
          </div>
          {/* Share Icon */}
          <div
            className="bg-zinc-200 p-1 rounded-full cursor-pointer"
            onClick={handleShareClick}
          >
            <RiShareForwardLine className="text-lg text-zinc-900" />
          </div>
        </div>
      </div>

      {/* Share Popup */}
      {showSharePopup && (
        <div className="absolute top-12 right-2 bg-white p-4 rounded-lg shadow-md z-10">
          <h4 className="text-sm font-semibold mb-2">Share Recipe</h4>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={shareLink}
              readOnly
              className="border border-gray-300 p-1 rounded w-full"
            />
            <button
              className={`${
                copyButtonText === "Copied"
                  ? "bg-green-500"
                  : "bg-blue-500"
              } text-white px-2 py-1 rounded text-sm`}
              onClick={copyToClipboard}
            >
              {copyButtonText}
            </button>
          </div>
        </div>
      )}

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
      <p className="text-sm mt-1 text-center font-semibold text-purple-500">
        {type}
      </p>
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
