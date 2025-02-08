import React from 'react';
import Card from './Card';
import Card4 from './Card4';

const Cards = () => {
  const cardData = [
    {
      id: 1,
      image: 'https://imgs.search.brave.com/ckXEO3nP4Qmh5qvc-oG640qjb5OPq49XfheegW2S8Io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBiL0RhbEJhdGku/anBn', 
      title: 'Dal bati',
      ingredients: ['Wheat flour', 'Lentils', 'Ghee', 'Spices', 'Coriander', 'Cumin', 'Chili powder'],
      time: '45 minutes'
    },
    {
      id: 2,
      image: 'https://imgs.search.brave.com/Pgs_9p4ySSKCTsSA_in99y-9RnNfpI_LyhyIrH8Semg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NDc4MDc0MC9waG90/by90b21hdG8tc291/cC1vbi13b29kZW4t/dGFibGUtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9S2V2N2JV/amJYVHBYbnF1MDJK/VXFYSl9JRkF1NGI3/ZmRCdDBsVUtuc1dl/UT0',
      title: 'Tomato Soup',
      ingredients: ['Tomatoes', 'Garlic', 'Onions', 'Spices', 'Carrots', 'Basil', 'Olive oil'],
      time: '30 minutes'
    },
    {
      id: 3,
      image: 'https://imgs.search.brave.com/ZpaY4AaZlsVhWdgUcEDwrf1cVVgFVPNzV4HGHNKN3dI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjgw/MjY4MTkwL3Bob3Rv/L21pc28tcmFtZW4t/bm9vZGxlLXNvdXAu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWgzQlNSanlDYkZo/SHF3b1FwcGlMc2Ny/M2lHS3VIZFIzdU5K/dXU4U1phMkU9',
      title: 'Noodles',
      ingredients: ['Noodles', 'Vegetables', 'Soy sauce', 'Spices', 'Ginger', 'Garlic', 'Sesame oil'],
      time: '20 minutes'
    },
  ];

  return (
    <div className="flex w-full gap-4 p-4">
      {/* Cards Container (75%) */}
      <div className="grid grid-cols-3 gap-4 w-[75%]">
        {cardData.map((card) => (
          <Card 
            key={card.id} 
            image={card.image} 
            title={card.title} 
            ingredients={card.ingredients} 
            time={card.time} 
          />
        ))}
      </div>

      {/* Card4 (25%) */}
      <div className="w-[25%] ">
        <Card4 />
      </div>
    </div>
  );
};

export default Cards;




