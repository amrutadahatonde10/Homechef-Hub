import React, { useEffect, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";
import Axios from "../../Axios"; 


const Card = ({ image, title, ingredients, time, type }) => {
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
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div
        className="absolute top-5 right-5 p-1 rounded-full bg-white/80 cursor-pointer"
        onClick={handleHeartClick}
      >
        <IoMdHeart
          className={`text-lg ${isLiked ? "text-red-600" : "text-gray-400"}`}
        />
      </div>

      {/* Star Rating */}
      <div className="flex justify-center mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            onClick={() => handleRating(star)}
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

      <h3 className="text-center text-xl font-semibold mt-2">{title}</h3>
      <p className="text-sm mt-1 text-center">
        <span className="font-semibold">Time:</span> {time} minutes
      </p>
      <p className="text-sm mt-1 text-center font-semibold text-purple-500">{type}</p>
      <h4 className="text-md font-semibold mt-1 text-center">Ingredients:</h4>
      <ul className="list-disc pl-6 mt-2 text-gray-600 text-sm ml-[35%]">
        {ingredients.split(",").map((ingredient, index) => (
          <li key={index}>{ingredient.trim()}</li>
        ))}
      </ul>
      <div className="flex justify-center mt-4 ml-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          View Recipe
        </button>
      </div>
    </div>
  );
};
const ViewType = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [savedType, setSavedType] = useState("All");

  useEffect(() => {
    // Fetch recipes and filter based on saved type
    const fetchRecipes = async () => {
      try {
        // Get the category name from localStorage
        const savedType = localStorage.getItem("name") || "All";
        setSavedType(savedType);

        // Fetch recipes from the API
        const { data } = await Axios().get("/login"); // Replace with your mock API endpoint
        const slicedRecipes = data.slice(0, 26); // Slice the data for specific items

        // Filter recipes based on the saved type
        const filtered =
          savedType === "All"
            ? slicedRecipes
            : slicedRecipes.filter((recipe) => recipe.Type === savedType);

        setRecipes(slicedRecipes);
        setFilteredRecipes(filtered);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="pt-[16vh]">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredRecipes.map((recipe) => (
              <Card
                key={recipe.Id}
                image={recipe.Image}
                title={recipe.RecipeName}
                ingredients={recipe.Ingredients}
                time={recipe.Time}
                type={recipe.Type}
                rating={recipe.Rating}

              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewType;
