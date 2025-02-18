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
    Type: "Salad"
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
    Image: "https://imgs.search.brave.com/wqs2qYcP7vWJ79BvNg83qclrpoo0FjFMs_Eb7IBSh0E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNmLzgx/LzY3LzNmODE2N2Fk/MDkwODYzOTdjOWFm/Y2MyNjA4ZThlZGQz/LmpwZw",
    RecipeName: "Noodles",
    Ingredients: "Noodles, Vegetables, Soy sauce, Spices, Ginger, Garlic, Sesame oil",
    Time: 48,
    Type: "Snack",
  },
  {
    id: 7,
    Image: "https://imgs.search.brave.com/TcIk-8eANK7rpECz-jogmgZYED23WH7BVmxUujN9NPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ob3QtZ29sZGVu/LWZyZW5jaC1mcmll/cy13aXRoLXNhdWNl/LXdvb2Rlbi1iYWNr/Z3JvdW5kLWhvbWVt/YWRlLXJ1c3RpYy1m/b29kXzE4Mzc5My00/MjcuanBnP3NlbXQ9/YWlzX2h5YnJpZA",
    RecipeName: "French Fries",
    Ingredients: "Potatoes, Olive Oil, Salt, Pepper, Paprika, Garlic powder, Parsley",
    Time: 30,
    Type: "Snack",
  },
  {
    id: 8,
    Image: "https://imgs.search.brave.com/vsa1SKauP7nsrnk3cCF7ZHQmpF09MxF0uJP3pJobsjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3cy4xMjNyZi5j/b20vaW1hZ2VzL2Vz/cGllcy9lc3BpZXMy/MTExL2VzcGllczIx/MTEwMjE3OC8xNzc4/NTEzNjEtbWlzYWwt/cGF2LWlzLWEtcG9w/dWxhci1tYWhhcmFz/aHRyaWFuLXN0cmVl/dC1mb29kLW9mLXVz/YWwtc3Byb3V0cy1j/dXJyeS10b3BwZWQt/d2l0aC1vbmlvbnMu/anBn",
    RecipeName: "Misal Pav",
    Ingredients: "Matki (moth beans), Onion, Tomato, Red Chili Powder, Turmeric, Pav (Bread Rolls), Farsan",
    Time: 45,
    Type: "Breakfast",
  },
  {
    id: 9,
    Image: "https://imgs.search.brave.com/VhMWjVkpqU-1t6wuVfstDBxmylUJzbaTn0sx5MWqcBc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iaGFq/YW5pLXRoYWxpcGVl/dGgtYmhhamFuaS10/aGFsaXBlZXRoLW11/bHRpLWdyYWluLXBh/bmNha2UtcG9wdWxh/ci1zbmFjay1tYWhh/cmFzaHRyYS0xNTc4/MjE4NjIuanBn",
    RecipeName: "Thalipeeth",
    Ingredients: "Bhajani Flour, Onion, Green Chili, Coriander, Cumin Seeds, Salt, Ghee",
    Time: 30,
    Type: "Snack",
  },
  {
    id: 10,
    Image: "https://imgs.search.brave.com/_7MrXiiT1en-DvaucKe3r4YY8ojqbvRI6PeB2w_koZU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzE1Lzg1LzI0/LzM2MF9GXzMxNTg1/MjQwNF9PR3lLbDYz/NE9DZGp2bXR4a29v/TWVaejkwZ3ZucjhP/NS5qcGc",
    RecipeName: "Pithla Bhakri",
    Ingredients: "Gram Flour (Besan), Onion, Green Chili, Turmeric, Jowar Bhakri, Coriander, Salt",
    Time: 25,
    Type: "Dinner",
  },
  {
    id: 11,
    Image: "https://imgs.search.brave.com/VoFlOHH0COhnMiZLTRnbo1Xo3xGE3JQDsrMCXe9rcqQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTE5/MTQxNTYwL3Bob3Rv/L3BvaGEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUtiVDFY/Q1VLT2pkbUZweFNa/Y3hRSXVDb2NGVlQ2/VmZBQ2NSWnhuWFBl/SW89",
    RecipeName: "Kanda Pohe",
    Ingredients: "Flattened Rice (Poha), Onion, Green Chili, Turmeric, Curry Leaves, Coriander, Salt",
    Time: 15,
    Type: "Breakfast",
  },
  {
    id: 12,
    Image: "https://imgs.search.brave.com/Pf1IeNkoBmDM0bkDKyTW5tt5ziiwWeNXehSlKJp5G1Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bXlnaW5nZXJnYXJs/aWNraXRjaGVuLmNv/bS9pbWFnZXMvODAw/cHgvODAwcHgtZGFs/LXBhbGFrLTEuanBn",
    RecipeName: "Dal Palak",
    Ingredients: "Split Pigeon Pea (Toor Dal), Spinach, Garlic, Green Chili, Turmeric, Ghee, Salt",
    Time: 30,
    Type: "Healthy",
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


