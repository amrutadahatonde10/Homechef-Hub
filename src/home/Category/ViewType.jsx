import React, { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";

const recipes = [
  {
    id: 1,
    Image: "https://imgs.search.brave.com/WzgH7SQm4puaRpPyEpGJy2uPYQYbjY7_njIQR1fjidY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzAzLzQ5LzEz/LzM2MF9GXzkwMzQ5/MTMxNl9DSWE4dUJH/QzhTdGI0Q3RheWdz/NWtyMFNGVlR0MXhV/bi5qcGc",
    RecipeName: "Paneer Tikka",
    Ingredients: "Paneer, Yogurt, Spices, Capsicum, Onion, Tomato, Garlic",
    Time: 83,
    Type: "Dinner",
  },
  {
    id: 2,
    Image: "https://imgs.search.brave.com/Pgs_9p4ySSKCTsSA_in99y-9RnNfpI_LyhyIrH8Semg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NDc4MDc0MC9waG90/by90b21hdG8tc291/cC1vbi13b29kZW4t/dGFibGUtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9S2V2N2JV/amJYVHBYbnF1MDJK/VXFYSl9JRkF1NGI3/ZmRCdDBsVUtuc1dl/UT0",
    RecipeName: "Tomato Soup",
    Ingredients: "Tomatoes, Garlic, Onions, Spices, Carrots, Basil, Olive oil",
    Time: 30,
    Type: "Soup",
  },
  {
    id: 3,
    Image: "https://imgs.search.brave.com/ckXEO3nP4Qmh5qvc-oG640qjb5OPq49XfheegW2S8Io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBiL0RhbEJhdGku/anBn",
    RecipeName: "Dal Bati",
    Ingredients: "Wheat flour, Lentils, Ghee, Spices, Coriander, Cumin, Chili powder",
    Time: 45,
    Type: "Lunch",
  },
  {
    id: 4,
    Image: "https://imgs.search.brave.com/Llwtc4rLwLNNQBi1HS2lX3FaxZm1rTgTGS_QYBR7hnY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMz/NDU4NTcwL3Bob3Rv/L2JlZXQtc2FsYWQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTVCbXpKT0NGNEFz/VkNzTWYwZUx6eFpF/SVRMbUpEV3JrRlcx/SGJCMlVJaDg9",
    RecipeName: "Beetroot Salad",
    Ingredients: "Beetroot, Carrots, Lettuce, Olive oil, Lemon juice, Spices, Feta cheese",
    Time: 87,
    Type: "Breakfast"
  },
  {
    id: 5,
    Image: "https://imgs.search.brave.com/k7IR1rVFIO-G9acC-SHYKndzTI0PwNUE9MyCKsWr7ew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzc4Lzk3LzA0/LzM2MF9GXzY3ODk3/MDQyNF85Um5tdHdo/SEppR05sb2w0OVN1/Q0xXZUZDczVHV0s3/TS5qcGc",
    RecipeName: "Veg Biryani",
    Ingredients: "Rice, Carrots, Potato, Green peas, Spring onions, Soy sauce, Sesame oil",
    Time: 55,
    Type: "Dinner",
  },
  {
    id: 6,
    Image: "https://imgs.search.brave.com/Pgs_9p4ySSKCTsSA_in99y-9RnNfpI_LyhyIrH8Semg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NDc4MDc0MC9waG90/by90b21hdG8tc291/cC1vbi13b29kZW4t/dGFibGUtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9S2V2N2JV/amJYVHBYbnF1MDJK/VXFYSl9JRkF1NGI3/ZmRCdDBsVUtuc1dl/UT0",
    RecipeName: "Tomato Soup",
    Ingredients: "Tomatoes, Garlic, Onions, Spices, Carrots, Basil, Olive oil",
    Time: 45,
    Type: "Soup",
  },
  {
    id: 7,
    Image: "https://via.placeholder.com/150",
    RecipeName: "Caesar Salad",
    Ingredients: "Lettuce, Croutons, Chicken, Parmesan, Caesar Dressing",
    Time: 15,
    Type: "Lunch",
  },
  {
    id: 8,
    Image: "https://via.placeholder.com/150",
    RecipeName: "Pancakes",
    Ingredients: "Flour, Eggs, Milk, Sugar, Baking Powder",
    Time: 20,
    Type: "Breakfast",
  },
];

const Card = ({ image, title, ingredients, time, type }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(0);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-lg overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div
        className="absolute top-5 right-5 p-1 rounded-full bg-white/80 cursor-pointer"
        onClick={handleHeartClick}
      >
        <IoMdHeart
          className={`text-lg ${isLiked ? "text-red-600" : "text-gray-400"}`}
        />
      </div>

      {/* Star Rating */}
      <div className="flex justify-center mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            onClick={() => handleRating(star)}
            className="cursor-pointer"
          >
            {star <= rating ? (
              <AiFillStar className="text-yellow-500 text-xl" />
            ) : (
              <AiOutlineStar className="text-yellow-400 text-xl" />
            )}
          </div>
        ))}
      </div>

      <h3 className="text-center text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm mt-2 text-center">
        <span className="font-semibold">Time:</span> {time} minutes
      </p>
      <p className="text-sm mt-2 text-center font-semibold">{type}</p>
      <h4 className="text-md font-semibold mt-2 text-center">Ingredients:</h4>
      <ul className="list-disc pl-6 mt-2 text-gray-600 text-sm ml-[35%]">
        {ingredients.split(",").map((ingredient, index) => (
          <li key={index}>{ingredient.trim()}</li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          View Recipe
        </button>
      </div>
    </div>
  );
};

const ViewType = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="pt-[16vh]">
        <div className="container mx-auto flex flex-col md:flex-row w-full gap-4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {recipes.map((recipe) => (
              <Card
                key={recipe.id}
                image={recipe.Image}
                title={recipe.RecipeName}
                ingredients={recipe.Ingredients}
                time={recipe.Time}
                type={recipe.Type}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewType;
