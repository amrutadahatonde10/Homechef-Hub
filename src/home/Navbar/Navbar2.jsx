import React, { useState, useEffect } from "react";
// import { MdOutlineSearch } from "react-icons/md";
import {Link, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/login"
        );
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const searchValue = e.target.value.trim().toLowerCase();
    setQuery(searchValue);

    if (searchValue.length > 1) {
      // User input ko array me convert karna (comma-separated ingredients)
      const searchIngredients = searchValue.split(",").map((ing) => ing.trim());

      const filtered = recipes.filter((recipe) => {
        // Recipe ingredients ko array me convert karna
        const ingredientsArray =
          typeof recipe.Ingredients === "string"
            ? recipe.Ingredients.split(",").map((ing) =>
                ing.trim().toLowerCase()
              )
            : recipe.Ingredients.map((ing) => ing.toLowerCase());

        // Check agar koi bhi ingredient match karta hai
        return searchIngredients.every((searchIng) =>
          ingredientsArray.some((ing) => ing.includes(searchIng))
        );
      });

      setFilteredRecipes(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredRecipes([]);
      setShowSuggestions(false);
    }
  };

  const handleRecipesClick = () => {
    navigate("/recipes");
  };

  // Handle suggestion click
  const handleSuggestionClick = (selectedRecipe) => {
    setQuery(selectedRecipe.RecipeName); // Set search query as selected item
    setShowSuggestions(false);
    navigate("/search", { state: { results: [selectedRecipe] } }); // Navigate to search results page with selected recipe
  };

  // Navigate to Search Results Page
  const handleSearchSubmit = () => {
    if (filteredRecipes.length > 0) {
      navigate("/search", { state: { results: filteredRecipes } }); // Send search results
      setQuery("");
      setFilteredRecipes([]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="fixed top-[8vh] w-full z-40 bg-purple-300">
      <div className="h-[8vh] w-full bg-purple-300">
        <nav className="shadow-md py-2">
          <div className="flex items-center justify-between">
            <ul className="flex ml-5 space-x-10 mt-1">
              <li>
                <Link to="/" className="text-base hover:text-gray-500">
                  <b>Home</b>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-base hover:text-gray-500">
                  <b>About</b>
                </Link>
              </li>

              <li>
                <Link
                  to="/Recipes123"
                  className="text-base hover:text-gray-500 "
                >
                  <b>Recipes</b>
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-base hover:text-gray-500 transition duration-300"
                >
                  <b>Contact</b>
                </Link>
              </li>

              <li>
                <Link
                  to="/add-recipe"
                  className="text-base hover:text-gray-500"
                >
                  <b>Add Recipe</b>
                </Link>
              </li>
            </ul>

            {/* Search Box */}
            <div className="relative mr-2">
              {/* <MdOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" /> */}
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search by Ingredients..."
                className="pl-6 rounded-md border-2 w-96 h-10"
                onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
              />

              {/* Suggestions Dropdown */}
              {showSuggestions && (
                <ul className="absolute top-12 left-0 bg-white border rounded-md w-96 shadow-lg max-h-40 overflow-y-auto">
                  {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe) => (
                      <li
                        key={recipe.id}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleSuggestionClick(recipe)}
                      >
                        {recipe.RecipeName}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">No matches found</li>
                  )}
                </ul>
              )}

              {/* Search Button */}
              <button
                onClick={handleSearchSubmit}
                className="ml-2 bg-purple-500 text-white px-4 py-2 rounded-md"
              >
                Search
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;
