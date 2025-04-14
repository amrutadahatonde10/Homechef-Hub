import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar1 from "../../Navbar/Navbar1";
import Navbar2 from "../../Navbar/Navbar2";
import Footer from "../../Footer/Footer";

const RecipesByType = () => {
  const { type } = useParams(); // 🆕 Get Type from URL
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipesByType = async () => {
      try {
        const response = await fetch(
          "https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/login"
        );
        if (!response.ok) throw new Error("Failed to fetch recipes");

        const data = await response.json();

        // 🆕 Filter Recipes by Type
        const filteredRecipes =
          type === "all"
            ? data // Show all if type is 'all'
            : data.filter((recipe) => recipe.Type === type);

        setRecipes(filteredRecipes);
      } catch (error) {
        console.error("Error fetching recipes by type:", error);
      }
    };

    fetchRecipesByType();
  }, [type]);

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="bg-zinc-100 p-6 min-h-screen mt-28">
        <h2 className="text-3xl font-bold text-center mb-6">
          Recipes for {type === "all" ? "All Types" : type}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={recipe.Image}
                alt={recipe.RecipeName}
                className="w-full h-52 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-2">{recipe.RecipeName}</h3>
              <p className="text-gray-600">Type: {recipe.Type}</p>
              <p className="text-gray-600">Time: {recipe.Time} min</p>
              <p className="text-gray-600">Rating: {recipe.Rating}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipesByType;