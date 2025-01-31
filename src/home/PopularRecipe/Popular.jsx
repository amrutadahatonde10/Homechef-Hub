import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons

const Popular = () => {
  const popularRecipes = [
    { id: 1, image: 'https://imgs.search.brave.com/WzgH7SQm4puaRpPyEpGJy2uPYQYbjY7_njIQR1fjidY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzAzLzQ5LzEz/LzM2MF9GXzkwMzQ5/MTMxNl9DSWE4dUJH/QzhTdGI0Q3RheWdz/NWtyMFNGVlR0MXhV/bi5qcGc', title: 'Paneer Tikka', rating: 4.5 },
    { id: 2, image: 'https://imgs.search.brave.com/cGBh_UDKGcBySVZVt4XVojAS8rcfKq9pq2jktxfxoh8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc5/MDg1NDk0L3Bob3Rv/L2luZGlhbi1iaXJ5/YW5pLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1WSkFVZml1/YXZGWUI3UFh3aXN2/VWhMcVdGSjIwLTlt/MDg3LWN6VUpwOUZz/PQ', title: 'Biryani', rating: 4.0 },
    { id: 3, image: 'https://imgs.search.brave.com/9rIyBv_4ZrQvYuy1R_Vt_hLFhiApulRB9igG4OCscSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzM1LzcxLzkx/LzM2MF9GXzEwMzU3/MTkxMDRfVzVjS2U5/WHhwZEJ1NXFodThx/QWpyeWU2b2hwd3Fl/a2guanBn', title: 'Chole Bhature', rating: 5.0 },
    { id: 4, image: 'https://imgs.search.brave.com/Llwtc4rLwLNNQBi1HS2lX3FaxZm1rTgTGS_QYBR7hnY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMz/NDU4NTcwL3Bob3Rv/L2JlZXQtc2FsYWQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTVCbXpKT0NGNEFz/VkNzTWYwZUx6eFpF/SVRMbUpEV3JrRlcx/SGJCMlVJaDg9', title: 'Beetroot Salad', rating: 4.7 },
    { id: 5, image: 'https://imgs.search.brave.com/wqs2qYcP7vWJ79BvNg83qclrpoo0FjFMs_Eb7IBSh0E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNmLzgx/LzY3LzNmODE2N2Fk/MDkwODYzOTdjOWFm/Y2MyNjA4ZThlZGQz/LmpwZw', title: 'Noodles', rating: 4.3 },
    { id: 6, image: 'https://imgs.search.brave.com/3VwGlgbboyhZeveR-tOJRfoZjUyckV8vVNF52v-O5sk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/Mi8yOC8xNy80NS9t/b3RpY2hvb3ItNzY4/MzQ4N182NDAuanBn', title: 'Ladoo', rating: 4.8 },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex justify-center mt-1">
        {[...Array(fullStars)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
        {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
        {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i} className="text-yellow-400" />)}
      </div>
    );
  };

  return (
    <div className='w-full p-6'>
      
      {/* First Row: 3 Recipe Images with Names & Ratings */}
      <div className='grid grid-cols-3 gap-4 mb-6'>
        {popularRecipes.slice(0, 3).map((recipe) => (
          <div key={recipe.id} className='rounded-lg overflow-hidden text-center'>
            <img src={recipe.image} alt={recipe.title} className='w-full h-60 object-cover rounded-lg' />
            <h3 className='text-lg font-semibold mt-2'>{recipe.title}</h3>

            {/* Rating Stars */}
            <div className="flex justify-center items-center mt-1">
              {renderStars(recipe.rating)}
              <span className="ml-2 text-sm font-semibold text-gray-600">({recipe.rating})</span>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row: 3 More Recipe Images with Names & Ratings */}
      <div className='grid grid-cols-3 gap-4'>
        {popularRecipes.slice(3, 6).map((recipe) => (
          <div key={recipe.id} className='rounded-lg overflow-hidden text-center'>
            <img src={recipe.image} alt={recipe.title} className='w-full h-60 object-cover rounded-lg' />
            <h3 className='text-lg font-semibold mt-2'>{recipe.title}</h3>

            {/* Rating Stars */}
            <div className="flex justify-center items-center mt-1">
              {renderStars(recipe.rating)}
              <span className="ml-2 text-sm font-semibold text-gray-600">({recipe.rating})</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Popular;
