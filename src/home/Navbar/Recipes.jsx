import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Footer from "../Footer/Footer";
import { IoMdHeart } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/login");
        const data = await response.json();
        setRecipes(data);
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
      <div className="container mx-auto flex flex-col w-full gap-8 p-4">

              {["Approved", "Pending", "Rejected"].map((statusType) => {
        const filteredRecipes = recipes.filter(
          (recipe) =>
            recipe.Status === statusType ||
            (statusType === "Pending" && (!recipe.Status || recipe.Status === ""))
        );

        return (
          <div key={statusType} className="mb-10 w-full bg-white rounded-xl shadow-md p-4">

            <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
              {statusType} Recipes
            </h2>

            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredRecipes.map((recipe) => (
                  <Card
                    key={recipe.Id}
                    id={recipe.Id}
                    image={recipe.Image}
                    title={recipe.RecipeName}
                    ingredients={recipe.Ingredients}
                    time={recipe.Time}
                    type={recipe.Type}
                    status={recipe.Status}
                    reason={recipe.Reason}
                    navigate={navigate}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No {statusType.toLowerCase()} recipes found.
              </p>
            )}
          </div>
  );
})}

        </div>
      </div>
      <Footer />
    </>
  );
};

const Card = ({ id, image, title, ingredients, time, type ,status, reason, navigate }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <div className="absolute top-5 right-5 p-1 rounded-full bg-white/80 cursor-pointer" onClick={() => setIsLiked(!isLiked)}>
        <IoMdHeart className={`text-lg ${isLiked ? "text-red-600" : "text-gray-400"}`} />
      </div>

      <div className="flex justify-center mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} onClick={() => setRating(star)} className="cursor-pointer">
            {star <= rating ? <AiFillStar className="text-yellow-500 text-xl" /> : <AiOutlineStar className="text-yellow-400 text-xl" />}
          </div>
        ))}
      </div>

      <h3 className="text-center text-xl git font-semibold mt-4">{title}</h3>
      <p className="text-sm mt-2 text-center"><span className="font-semibold">Time:</span> {time} minutes</p>
      <p className="text-sm mt-2 text-center font-semibold">{type}</p>
      <h4 className="text-md font-semibold mt-2 text-center">Ingredients:</h4>
      <ul className="list-disc pl-6 mt-2 text-gray-600 text-sm ml-[35%]">
        {ingredients.split(",").map((ingredient, index) => (
          <li key={index}>{ingredient.trim()}</li>
        ))}
      </ul>

      <p className="text-center mt-2 font-semibold">
        Status:{" "}
        <span
          className={`${
            status === "Approved"
              ? "text-green-600"
              : status === "Rejected"
              ? "text-red-600"
              : "text-gray-600"
          }`}
        >
          {status || "Pending"}
        </span>
      </p>

      {status === "Rejected" && reason && (
        <p className="text-center text-sm text-red-500 mt-1">
          <span className="font-semibold">Reason:</span> {reason}
        </p>
      )}

      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => navigate(`/recipes/${id}`)}>
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default Recipes;
