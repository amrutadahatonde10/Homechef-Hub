import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons
import Axios from "../../Axios"; 


const Popular = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await Axios().get("/login"); // Replace with your API endpoint
        const filteredRecipes = response.data.slice(8,14); // Slice between 8 and 14
        setPopularRecipes(filteredRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);  
      }
    };     

    fetchRecipes();
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); 
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex justify-center mt-1">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={i} className="text-yellow-400" />
        ))}
      </div>
    );
  };
   
  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-3 gap-4">
        {popularRecipes.map((recipe) => (
          <div key={recipe.Id} className="rounded-lg overflow-hidden text-center">
            <img
              src={recipe.Image} 
              alt={recipe.RecipeName}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{recipe.RecipeName}</h3>
            <div className="flex justify-center items-center mt-1">
              {renderStars(recipe.Rating)}
              <span className="ml-2 text-sm font-semibold text-gray-600">
                ({recipe.Rating})
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
