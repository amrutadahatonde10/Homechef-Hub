import React, { useEffect, useState } from "react";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";
import Axios from "../../Axios";
import Card from "../Recipes/Card";

const ViewType = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [savedType, setSavedType] = useState("All");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const savedType = localStorage.getItem("name") || "All";
        setSavedType(savedType);

        const { data } = await Axios().get("/login"); 
        const slicedRecipes = data.slice(0, 26);
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
                id={recipe.Id}
                image={recipe.Image}
                title={recipe.RecipeName}
                ingredients={recipe.Ingredients}
                time={recipe.Time}
                type={recipe.Type}
                initialLike={recipe.Like}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewType;

