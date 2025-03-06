import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Axios from "../../Axios";

const Card4 = () => {
  const [recipes, setRecipes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await Axios().get("/login"); // Adjust endpoint as needed
        setRecipes(response.data.slice(3, 8));
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % recipes.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [recipes]);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  if (!recipes.length) return null; // Prevent render if no recipes

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[500px] h-[562px] bg-purple-100 flex flex-col items-center justify-start text-white text-xl font-semibold shadow-lg rounded-lg p-6 overflow-hidden">
        <motion.h2
          className="text-2xl mt-5 px-5 bg-red-500 py-3 rounded-lg shadow-lg tracking-wider text-center"
          animate={{
            y: [0, -10, 0],
            textShadow: ["0px 0px 5px #fff", "0px 0px 20px #ff0", "0px 0px 5px #fff"],
          }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          ✨ Latest Recipes ✨
        </motion.h2>

        <motion.img
          key={recipes[activeIndex]?.id}
          src={recipes[activeIndex]?.Image}
          alt={recipes[activeIndex]?.RecipeName}
          className="w-[300px] h-80 object-cover rounded-lg shadow-lg mt-8 mb-2"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1 }}
        />

        <motion.p
          key={recipes[activeIndex]?.RecipeName}
          className="mt-6 text-2xl text-purple-900 font-bold"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {recipes[activeIndex]?.RecipeName}
        </motion.p>
      </div>
    </div>
  );
};

export default Card4;
