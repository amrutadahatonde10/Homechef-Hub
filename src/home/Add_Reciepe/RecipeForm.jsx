import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";

function RecipeForm() {
  const [formData, setFormData] = useState({
    RecipeName: "",
    Type: "",
    Time: "",
    Ingredients: [""],
    Image: "",
    // YouTubeLink: "",
    Like: false,
    Rating: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.Ingredients];
    newIngredients[index] = value;
    setFormData({ ...formData, Ingredients: newIngredients });
  };

  const addIngredient = () => {
    setFormData({ ...formData, Ingredients: [...formData.Ingredients, ""] });
  };


  const handleImageChange = (e) => {
    setFormData({ ...formData, Image: e.target.value });
  };
  
  // const getYouTubeVideoID = (url) => {
  //   const match = url.match(
  //     /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/
  //   );
  //   return match ? match[1] : "";
  // };
  



  const resetForm = (event) => {
    event.preventDefault();
    setFormData({
      RecipeName: "",
      Type: "",
      Time: "",
      Ingredients: [""],
      Image: "",
      // YouTubeLink: "",
      Like: false,
      Rating: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ingredients ko comma-separated string me convert karna
    const updatedFormData = {
      ...formData,
      Ingredients: formData.Ingredients.join(", "),
      Time: parseInt(formData.Time) || 0, // Time ko integer banana
    };
    if (!formData.RecipeName || !formData.Type || !formData.Time || formData.Ingredients.some(ing => ing.trim() === "")) {
      alert("Please fill all required fields before submitting.");
      return;
    }
  
    // Ingredients ko comma-separated string me convert karna

    try {
      const response = await fetch(
        "https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );

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
      <div className="bg-gradient-to-r from-orange-200 to-purple-200 flex justify-center mt-18 p-4 pt-12">
        <div className="bg-gray-100 rounded-lg shadow-md w-full max-w-2xl ml-50 mt-20 p-7">
          <h3 className="text-center text-2xl font-bold mb-4">YOUR RECIPE DETAILS</h3>
          <form id="recipe-form" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Recipe Title</label>
              <input
                type="text"
                name="RecipeName"
                value={formData.RecipeName}
                onChange={handleChange}
                placeholder="Enter recipe title"
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Recipe Type</label>
              <input
                type="text"
                name="Type"
                value={formData.Type}
                onChange={handleChange}
                placeholder="e.g. Lunch, Dinner, Breakfast etc..."
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Total Time (in minutes)</label>
              <input
                type="number"
                name="Time"
                value={formData.Time}
                onChange={handleChange}
                placeholder="Enter total cooking time"
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Ingredients</label>
              {formData.Ingredients.map((ingredient, index) => (
                <input
                  key={index}
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  placeholder="Enter ingredient"
                  className="w-full p-2 border rounded mb-2"
                />
              ))}
              <button type="button" onClick={addIngredient} className="bg-zinc-200 text-black px-3 py-1 rounded">
                Add More
              </button>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Upload Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
              {formData.Image && (
                <img src={formData.Image} alt="Selected" className="mt-3 w-full h-48 object-cover rounded" />
              )}
            </div>

            {/* <div className="mb-4 flex items-center">
              <label className="block mb-1 mr-2">Like this Recipe?</label>
              <input
                type="checkbox"
                name="Like"
                checked={formData.Like}
                onChange={() => setFormData({ ...formData, Like: !formData.Like })}
                className="w-5 h-5"
              />
            </div> */}


            <div className="mb-4">
  <label className="block mb-1">Image URL</label>
  <input
    type="text"
    name="Image"
    value={formData.Image}
    onChange={handleImageChange}
    placeholder="Enter image URL"
    className="w-full p-2 border rounded"
  />
  {formData.Image && (
    <img src={formData.Image} alt="Selected" className="mt-3 w-full h-48 object-cover rounded" />
  )}
</div>



{/*   
<div className="mb-4">
  <label className="block mb-1">YouTube Video Link</label>
  <input
    type="text"
    name="YouTubeLink"
    value={formData.YouTubeLink}
    onChange={handleChange}
    placeholder="Enter YouTube video URL"
    className="w-full p-2 border rounded"
  />
  {formData.YouTubeLink && (
    <div className="mt-3">
      <iframe
        className="w-full h-64 rounded"
        src={`https://www.youtube.com/embed/${getYouTubeVideoID(formData.YouTubeLink)}`}
        title="YouTube Video"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )}
</div>

 */}



            <div className="flex items-center justify-center gap-7 mt-2 p-2">
              <button type="button" onClick={() => navigate("/")} className="bg-blue-400 text-white px-4 py-2 rounded">
                Back
              </button>
              <button type="button" onClick={resetForm} className="bg-blue-400 text-white px-4 py-2 rounded">
                Clear
              </button>
              <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RecipeForm;
