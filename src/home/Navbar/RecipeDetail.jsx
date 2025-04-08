import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Footer from "../Footer/Footer";

const RecipeDetails = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/login/${id}`) 
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.error("Error fetching recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-xl mt-10">Loading...</p>;
  }


  // const getYouTubeID = (url) => {
  //   const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  //   const match = url.match(regExp);
  //   return match && match[2].length === 11 ? match[2] : null;
  // };
  

  return (
    <>
    <div className="bg-gradient-to-r from-orange-100 to-purple-100" >
      <Navbar1 />
      <Navbar2 />
      <div className=" container mx-auto mt-8 pt-[16vh] p-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Image */}
          <div className="md:w-2xs">
            <img
              src={recipe.Image}
              alt={recipe.RecipeName}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Details */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl font-bold">{recipe.RecipeName}</h1>
            <p className="text-lg mt-2">
              <span className="font-semibold">Type:</span> {recipe.Type}
            </p>
            <p className="text-lg mt-2">
              <span className="font-semibold">Time:</span> {recipe.Time} minutes
            </p>

            <h3 className="text-xl font-semibold mt-4">Ingredients:</h3>
            <ul className="list-disc pl-3 mt-2 text-black-900 text-90 font-semibold ml-[1%]">
  {recipe.Ingredients 
    ? recipe.Ingredients.split(",").map((Ingredient, index) => (
        <li key={index}>{Ingredient.trim()}</li>
      ))
    : <li>No ingredients available</li>}
</ul>

          </div>
        </div>

        {/* Instructions - Recipe Process */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Instructions:</h2>
          <p className="text-lg mt-2 text-gray-800">{recipe.Instructions}</p>
          {/* Instructions - Recipe Process */}


  <h3 className="text-xl font-semibold mt-4">General Cooking Steps:</h3>
  <ul className="list-disc pl-5 mt-2 text-gray-800 text-lg">
     <li><strong>Preparation:</strong> Gather all ingredients and measure them as needed. Wash vegetables, meats, or grains as required.</li>
     <li><strong>Chopping & Cutting:</strong> Finely chop, dice, or slice ingredients like onions, tomatoes, and herbs. Cut meat or vegetables into desired sizes.</li>
     <li><strong>Preheating:</strong> If using an oven, preheat it to the required temperature. If using a stove, heat oil/butter in a pan.</li>
     <li><strong>Sautéing:</strong> Fry spices, onions, garlic, and other base ingredients in oil/ghee until fragrant and golden brown.</li>
     <li><strong>Adding Ingredients:</strong> Add main ingredients like vegetables, meats, or pulses. Stir well and cook for a few minutes.</li>
     <li><strong>Seasoning:</strong> Add salt, spices, and seasonings as per taste. Stir to mix evenly.</li>
     <li><strong>Cooking Process:</strong></li>
     <ul className="list-disc pl-8">
      <li><strong>For curries & gravies:</strong> Add water, broth, or tomato puree and let it simmer until cooked.</li>
      <li><strong>For stir-fries:</strong> Keep stirring and cooking on medium-high heat until done.</li>
      <li><strong>For baked items:</strong> Place in the oven and bake for the required time at the set temperature.</li>
    </ul>
    <li><strong>Final Touch:</strong> Garnish with fresh herbs, cream, or toppings as per recipe.</li>
    <li><strong>Serving:</strong> Serve hot with rice, bread, or as per dish requirement.</li>
  </ul>


        </div>

{/* 


        {recipe.YouTubeLink && (
  <div className="mt-10">
    <h2 className="text-2xl font-bold mb-2">Watch Recipe Video:</h2>
    <div className="aspect-w-4 aspect-h-5">
      <iframe
        className="w-full h-[400px] rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${getYouTubeID(recipe.YouTubeLink)}`}
        title="Recipe Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

 */}


      </div>
      <Footer />
      </div>
    </>
  );
};

export default RecipeDetails;
