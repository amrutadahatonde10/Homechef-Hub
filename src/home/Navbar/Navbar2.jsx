import React, { useState, useEffect } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom"; //  Import useNavigate

const Navbar2 = () => {
  const [query, setQuery] = useState("");
  const [recipeTypes, setRecipeTypes] = useState([]); // To store unique recipe types
  const [filteredTypes, setFilteredTypes] = useState([]); // Filtered search results
  const navigate = useNavigate(); //  Initialize useNavigate()

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://679de9fe946b0e23c06214a8.mockapi.io/recipes");
        const data = await response.json();

        // Extract unique recipe types
        const uniqueTypes = [...new Set(data.map(recipe => recipe.type))];
        setRecipeTypes(uniqueTypes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);

    // Filter recipe types based on search input
    if (searchValue.length > 1) {
      const filtered = recipeTypes.filter((type) =>
        type.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredTypes(filtered);
    } else {
      setFilteredTypes([]); 
    }
  };

  // Handle Recipe Type Click
  const handleTypeClick = (type) => {
    setQuery(type); 
    navigate(`/recipes/${type}`); 
  };

  return (
    <div className="fixed top-[8vh] w-full z-40 bg-purple-300 ">
      <div className="h-[8vh] w-full bg-purple-300 ">
        <nav className="shadow-md py-2 ">
          <div className="flex items-center justify-between ">
            <ul className="flex ml-5 space-x-10 mt-1">
              <li>
                <a
                  href="#"
                  className="text-base hover:text-gray-500 transition duration-300"
                >
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-base hover:text-gray-500 transition duration-300"
                >
                  <b>About</b>
                </a>
              </li>
              <li>
                <a
                  href="#recipe"
                  className="text-base hover:text-gray-500 transition duration-300"
                >
                  <b>Recipes</b>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-base hover:text-gray-500 transition duration-300"
                >
                  <b>Contact</b>
                </a>
              </li>
              <li><a href="/add-recipe" className="text-base hover:text-gray-500"><b>Add Recipe</b></a></li>

            </ul>

            <div className="relative mr-2">
              <MdOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                
                value={query}
                onChange={handleSearch}
                placeholder="Search By Ingredients"
                className="pl-6 rounded-md border-2 w-96 h-10"
              />
              {/* Search Suggestions Dropdown */}
              {filteredTypes.length > 0 && (
                <div className="absolute bg-white border rounded-md mt-1 w-96 max-h-40 overflow-y-auto shadow-lg">
                  {filteredTypes.map((type, index) => (
                    <div 
                      key={index} 
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleTypeClick(type)} //  Updated Event
                    >
                      {type}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;
