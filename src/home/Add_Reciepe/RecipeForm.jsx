import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";

function RecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    type: "",   
    prepTime: "",
    cookTime: "",
    ingredients: [""],
    description: "",
    image: ""
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addIngredient = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ""] });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const resetForm = (event) => {
    event.preventDefault();
    setFormData({
      title: "",
      type: "",  // 🆕 Reset type on clear
      prepTime: "",
      cookTime: "",
      ingredients: [""],
      description: "",
      image: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://679de9fe946b0e23c06214a8.mockapi.io/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // 🔥 type bhi bhej raha hai
      });

      if (response.ok) {
        alert("Recipe added successfully!");
        navigate("/");
      } else {
        alert("Error adding recipe.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add recipe.");
    }
  };

  return (
    <>
      <div>
        <Navbar1 />
        <Navbar2 />
      </div>
      <div className=" bg-gradient-to-r from-orange-200 to-purple-200 flex justify-center mt-18 p-4 pt-12">
        <div className="bg-gray-100 rounded-lg shadow-md w-full max-w-2xl ml-50 mt-20">
          <h3 className="text-center text-2xl font-bold mb-4">YOUR RECIPE DETAILS</h3>
          <form id="recipe-form" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Recipe Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter recipe title" className="w-full p-2 border rounded" />
            </div>

            {/* 🆕 Type Field */}
            <div className="mb-4">
              <label className="block mb-1">Recipe Type</label>
              <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="e.g. Cheese Vada Pav, Schezwan Vada Pav" className="w-full p-2 border rounded" />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Preparation Time (in minutes)</label>
              <input type="number" name="prepTime" value={formData.prepTime} onChange={handleChange} placeholder="Enter preparation time" className="w-full p-2 border rounded" />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Cook Time (in minutes)</label>
              <input type="number" name="cookTime" value={formData.cookTime} onChange={handleChange} placeholder="Enter cook time" className="w-full p-2 border rounded" />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Ingredients</label>
              {formData.ingredients.map((ingredient, index) => (
                <input key={index} type="text" value={ingredient} onChange={(e) => handleIngredientChange(index, e.target.value)} placeholder="Enter ingredient" className="w-full p-2 border rounded mb-2" />
              ))}
              <button type="button" onClick={addIngredient} className="bg-zinc-200 text-black px-3 py-1 rounded">Add More</button>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Description</label>
              <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Recipe description" className="w-full p-4 border rounded" />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Pictures</label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
              {formData.image && <img src={formData.image} alt="Selected" className="mt-3 w-full h-48 object-cover rounded" />}
            </div>

            <div className="flex items-center justify-center gap-7 mt-2 p-2">
              <button type="button" onClick={() => navigate("/")} className="bg-blue-400 text-white px-4 py-2 rounded">Back</button>
              <button type="button" onClick={resetForm} className="bg-blue-400 text-white px-4 py-2 rounded">Clear</button>
              <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RecipeForm;
