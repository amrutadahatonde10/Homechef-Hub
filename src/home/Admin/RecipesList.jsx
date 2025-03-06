import React, { useEffect, useState } from "react";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";

const RecipesList = () => {
  const [recipess, setRecipes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    Image: "",
    RecipeName: "",
    Time: "",
    Ingredients: "",
    Rating: "",
    Like: false,
    Type: ""
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/login");
        if (!response.ok) throw new Error("Failed to fetch recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  // 🆕 Start Editing
  const handleEdit = (recipe) => {
    setEditingId(recipe.Id);
    setEditData(recipe);
  };

  // 🆕 Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditData({ 
      ...editData, 
      [name]: type === "checkbox" ? checked : value
    });
  };

  // 🆕 Save Edited Recipe to API
  const handleSave = async () => {
    try {
      const response = await fetch(`https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/login/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });

      if (!response.ok) throw new Error("Failed to update recipe");

      // 🆕 Update UI after edit
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) => (recipe.Id === editingId ? editData : recipe))
      );
      setEditingId(null);
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     const response = await fetch(`https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/login/${id}`, {
  //       method: "DELETE",
  //     });
  
  //     if (!response.ok) throw new Error("Failed to delete recipe");
  
  //     // 🆕 UI se deleted recipe hatao
  //     setRecipes(recipess.filter(recipe => recipe.Id !== id));
  //   } catch (error) {
  //     console.error("Error deleting recipe:", error);
  //   }
  // };
  


  return (
    <>
    <Navbar1/>
    <Navbar2/>
    <div className="bg-gradient-to-r from-orange-200 to-purple-200 p-6 bg-gray-100 min-h-screen mt-28">
      <h2 className=" text-3xl font-bold text-center mb-6">Edit & Save Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipess.map((recipe) => (
          <div key={recipe.Id} className="bg-purple-100 p-4 rounded-lg shadow-md">
            {editingId === recipe.Id ? (
              <>
                <input type="text" name="RecipeName" value={editData.RecipeName} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Recipe Name" />

                <input type="text" name="Type" value={editData.Type} onChange={handleChange} className="w-full p-2 border rounded mt-2" placeholder="Recipe Type" />

                <input type="text" name="Time" value={editData.Time} onChange={handleChange} className="w-full p-2 border rounded mt-2" placeholder="Cooking Time (in minutes)" />

                <textarea name="Ingredients" value={editData.Ingredients} onChange={handleChange} className="w-full p-2 border rounded mt-2" placeholder="Ingredients"></textarea>

                <input type="number" name="Rating" value={editData.Rating} onChange={handleChange} className="w-full p-2 border rounded mt-2" placeholder="Rating (1-5)" />

                <input type="text" name="Image" value={editData.Image} onChange={handleChange} className="w-full p-2 border rounded mt-2" placeholder="Image URL" />

                {/* <label className="flex items-center mt-2">
                  <input type="checkbox" name="Like" checked={editData.Like} onChange={handleChange} />
                  <span className="ml-2">Like</span>
                </label> */}

                <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 mt-2 rounded">Save</button>
              </>
            ) : (
              <>
                <img src={recipe.Image} alt={recipe.RecipeName} className="w-full h-52 object-cover object-center rounded-lg overflow-hidden" />
                <h3 className="text-xl font-semibold">{recipe.RecipeName}</h3>
                <p className="text-gray-600">Type: {recipe.Type}</p>
                <p className="text-gray-600">Time: {recipe.Time} min</p>
                <p className="text-gray-600">Rating: {recipe.Rating}</p>
                <p className="text-gray-600">Ingredients: {recipe.Ingredients}</p>
                {/* <p className="text-gray-600">Liked: {recipe.Like ? "Yes" : "No"}</p> */}

                <button onClick={() => handleEdit(recipe)} className="bg-blue-500 text-white px-3 py-1 mt-2 rounded">Edit</button>
                {/* <button onClick={() => handleDelete(recipe.Id)} className="bg-red-500 text-white px-3 py-1 mt-2 ml-2 rounded">Delete</button> */}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
    
  );
};

export default RecipesList;
