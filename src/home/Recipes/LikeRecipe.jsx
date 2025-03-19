  import React, { useEffect, useState } from "react";
  import Navbar1 from "../Navbar/Navbar1";
  import Navbar2 from "../Navbar/Navbar2";
  import Axios from "../../Axios";
  import Card from "./Card";

  const LikeRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await Axios().get("/login"); // Replace with the correct endpoint
          const updatedRecipes = response.data.map((recipe) => ({
            ...recipe,
            Like: recipe.Like || false, // Ensure Like property is present
          }));
          setRecipes(updatedRecipes.slice(0, 27)); // Fetch 0 to 25 recipes
        } catch (err) {
          console.error("Error fetching data:", err);
          setError("Failed to fetch data.");
        } finally {
          setLoading(false);
        }
      };
      fetchData(); 
    }, []);

    const toggleLike = async (id) => {
      try {
        const updatedRecipes = recipes.map((recipe) =>
          recipe.Id === id ? { ...recipe, Like: !recipe.Like } : recipe
        );
        setRecipes(updatedRecipes); // Optimistically update the state

        const response = await Axios().put(`/login/${id}`, {
          Like: updatedRecipes.find((recipe) => recipe.Id === id).Like,
        }); // Replace with the correct API endpoint

        if (response.status !== 200) {
          throw new Error("Failed to update like status on the server");
        }
      } catch (err) {
        console.error("Error toggling like status:", err);
        setRecipes((prevRecipes) =>
          prevRecipes.map((recipe) =>
            recipe.Id === id ? { ...recipe, Like: !recipe.Like } : recipe
          )
        ); // Revert state if the request fails
      }
    };

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
              {recipes
                .filter((recipe) => recipe.Like === true) // Only display liked recipes
                .map((recipe) => (
                  <Card
                    key={recipe.Id}
                    id={recipe.Id}
                    image={recipe.Image}
                    title={recipe.RecipeName}
                    ingredients={recipe.Ingredients}
                    time={recipe.Time}
                    type={recipe.Type}
                    initialLike={recipe.Like} // Pass initial Like state
                  />
                ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  export default LikeRecipe;


