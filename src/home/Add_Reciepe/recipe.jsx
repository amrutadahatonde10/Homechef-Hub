import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";

function RecipeForm() {
  const [ingredients, setIngredients] = useState([""]);
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); 

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const resetForm = (event) => {
    event.preventDefault(); // Prevent default form reset behavior
  
    setIngredients([""]); // Reset ingredients array
    setImage(null); // Remove image preview
  
    document.getElementById("recipe-form").reset(); // Reset input fields
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
    <div>
    <Navbar1 />   
    <Navbar2 />
    </div>
    <div className="flex justify-center mt-18 p-4">
    <div className="bg-gray-100 rounded-lg shadow-md w-full max-w-2xl ml-50 mt-20">
      <h3 className="text-center text-2xl font-bold mb-4">YOUR RECIPE DETAILS</h3>
      <form id="recipe-form">
        <div className="mb-4">
          <label className="block mb-1">Recipe Title</label>
          <input type="text" placeholder="Enter recipe title" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Recipe Preparation Time (in minutes)</label>
          <input type="number" placeholder="Enter preparation time" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Recipe Cook Time (in minutes)</label>
          <input type="number" placeholder="Enter cook time" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Recipe Ingredients</label>
          {ingredients.map((_, index) => (
            <input key={index} type="text" placeholder="Enter ingredient" className="w-full p-2 border rounded mb-2" />
          ))}
          <button type="button" onClick={addIngredient} className="bg-zinc-200 text-black px-3 py-1 rounded">
            Add More
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <input type="text" placeholder="Recipe description" className="w-full p-4 border rounded" />
        </div>

        {/* Image Upload and Preview */}
        <div className="mb-4">
          <label className="block mb-1">Pictures</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
          {image && <img src={image} alt="Selected" className="mt-3 w-full h-48 object-cover rounded" />}
        </div>
        <div className="flex items-center justify-center gap-7 mt-2 p-2">
              <button type="button"onClick={()=>navigate("/")} className="bg-blue-400 text-white px-4 py-2 rounded">Back</button>

              <button type="button" onClick={resetForm} className="bg-blue-400 text-white px-4 py-2 rounded">
              Clear
             </button>
              <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded">Submit</button>
            </div>
      </form>
    </div>
    </div>
    </>

  );
}

export default RecipeForm;
