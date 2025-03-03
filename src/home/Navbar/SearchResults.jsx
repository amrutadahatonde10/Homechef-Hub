import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Footer from "../Footer/Footer";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || []; // Fetching filtered recipes

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="pt-[16vh]">
        <div className="container mx-auto flex flex-col md:flex-row w-full gap-4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {results.length === 0 ? (
              <p className="text-center text-lg">No recipes found.</p>
            ) : (
              results.map((recipe,ind) => (
                <Card
                  key={recipe.Id}
                  id={recipe.Id}
                  image={recipe.Image}
                  title={recipe.RecipeName}
                  ingredients={recipe.Ingredients}
                  time={recipe.Time}
                  type={recipe.Type}
                  navigate={navigate}  // ✅ Pass navigate as a prop
                />

              ))
            )}
          </div>
        </div>
      </div>
      <div>
    <Footer/>
    </div>
    </>
  );
};

const Card = ({id, image, title, ingredients, time, type, navigate }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(0);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <div
        className="absolute top-5 right-5 p-1 rounded-full bg-white/80 cursor-pointer"
        onClick={handleHeartClick}
      >
        <IoMdHeart className={`text-lg ${isLiked ? "text-red-600" : "text-gray-400"}`} />
      </div>

      {/* Star Rating */}
      <div className="flex justify-center mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} onClick={() => handleRating(star)} className="cursor-pointer">
            {star <= rating ? <AiFillStar className="text-yellow-500 text-xl" /> : <AiOutlineStar className="text-yellow-400 text-xl" />}
          </div>
        ))}
      </div>

      <h3 className="text-center text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm mt-2 text-center">
        <span className="font-semibold">Time:</span> {time} minutes
      </p>
      <p className="text-sm mt-2 text-center font-semibold">{type}</p>
      <h4 className="text-md font-semibold mt-2 text-center">Ingredients:</h4>
      <ul className="list-disc pl-6 mt-2 text-gray-600 text-sm ml-[35%]">
        {ingredients.split(",").map((ingredient, index) => (
          <li key={index}>{ingredient.trim()}</li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => navigate(`/recipe/${id}`)}
        >
          View Recipe
        </button>
      </div>
    </div>
    
    
    
  );
};

export default SearchResults;
