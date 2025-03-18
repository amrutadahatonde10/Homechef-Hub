import React, { useEffect, useState } from "react";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";
import Axios from "../../Axios";
import Card from "./Card";


const AllRecipe = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios().get("/login"); // Replace with the correct endpoint
        setdata(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
            {data.map((recipe) => (
              <Card
                key={recipe.Id}
                id={recipe.Id}
                image={recipe.Image}
                title={recipe.RecipeName}
                ingredients={recipe.Ingredients}
                time={recipe.Time}
                type={recipe.Type}
                initialLike = {recipe.Like}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllRecipe;

