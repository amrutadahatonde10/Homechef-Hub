import React, { useEffect, useState } from "react";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";
import Axios from "../../Axios";
import { IoMdHeart } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Card = ({ image, title, ingredients, time, type }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(0);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg overflow-hidden relative">
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

      <h3 className="text-center text-xl font-semibold mt-1 ">{title}</h3>
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
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          View Recipe
        </button>
      </div>
    </div>
  );
};

const AllRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios().get("/login"); // Replace with the correct endpoint
        setRecipes(response.data.slice(0, 26)); // Fetch 0 to 25 recipes
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-10">{error}</div>;
  }

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="pt-[16vh]">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recipes.map((recipe) => (
              <Card
                key={recipe.Id}
                image={recipe.Image}
                title={recipe.RecipeName}
                ingredients={recipe.Ingredients}
                time={recipe.Time}
                type={recipe.Type}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRecipe;
