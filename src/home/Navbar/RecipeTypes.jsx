import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";

const RecipeTypeList = () => {
  const { type } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://679de9fe946b0e23c06214a8.mockapi.io/recipes");
        const data = await response.json();
        const filteredRecipes = data.filter((recipe) => recipe.type === type);
        setRecipes(filteredRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [type]);

  return (
    <>
    <div>
      <Navbar1/>
      <Navbar2/>
    </div>
    <div className="container mx-auto mt-28 pt-1">
      <h2 className="text-2xl font-bold text-center mb-5">Recipes for {type}</h2>
      <div className="ml-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 pt-1">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="no-underline">
            <div className="border-2 border-purple-300 bg-white shadow-md rounded-lg overflow-hidden w-64 cursor-pointer">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
              <div className="p-3 text-center">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default RecipeTypeList;
