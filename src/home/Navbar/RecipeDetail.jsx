import { div } from "framer-motion/client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://679de9fe946b0e23c06214a8.mockapi.io/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="text-center text-lg">Loading...</p>;

  return (
    < >
    <div>
         <Navbar1 />
        <Navbar2 />
        </div>
    <div className="border-2 border-purple-500 container mx-auto mt-28 pt-1">
      <h2 className="text-3xl font-bold text-center mb-5">{recipe.title}</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <img src={recipe.image} alt={recipe.title} className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-md" />
        <div className="md:w-1/2">
          <p className="text-lg"><strong>Type:</strong> {recipe.type}</p>
          <p className="text-lg"><strong>Time Required:</strong> {recipe.prepTime} mins</p>
          <p className="text-lg"><strong>Description:</strong> {recipe.description}</p>
          <h3 className="text-xl font-bold mt-4">Ingredients  </h3>
          <ul className="list-disc pl-5">
            {recipe.ingredients && recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {/* <h3 className="text-xl font-bold mt-4"></h3> */}
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default RecipeDetail;
