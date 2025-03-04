import React, { useEffect, useState } from "react";
import Card from "./Card";
import Card4 from "./Card4";
import Axios from "../../Axios"; // Ensure Axios is correctly imported

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios().get("/login"); // Fix Axios call
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto flex flex-col md:flex-row w-full gap-4 p-4">
      {/* Cards Container (75%) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-[75%]">
        {data.slice(0, 3).map((card) => (
          <Card
            key={card.Id}
            image={card.Image}
            title={card.RecipeName}
            ingredients={card.Ingredients}
            time={card.Time}
          />
        ))}
      </div>

      {/* Card4 (25%) */}
      <div className="w-full md:w-[25%]">
        <Card4 />
      </div>
    </div>
  );
};

export default Cards;
