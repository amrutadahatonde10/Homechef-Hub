import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const recipes = [
  {
    id: 1,
    image: 'https://imgs.search.brave.com/ckXEO3nP4Qmh5qvc-oG640qjb5OPq49XfheegW2S8Io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBiL0RhbEJhdGku/anBn',
    title: 'Dal Bati'
  },
  {
    id: 2,
    image: 'https://imgs.search.brave.com/Pgs_9p4ySSKCTsSA_in99y-9RnNfpI_LyhyIrH8Semg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NDc4MDc0MC9waG90/by90b21hdG8tc291/cC1vbi13b29kZW4t/dGFibGUtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9S2V2N2JV/amJYVHBYbnF1MDJK/VXFYSl9JRkF1NGI3/ZmRCdDBsVUtuc1dl/UT0',
    title: 'Tomato Soup'
  },
  {
    id: 3,
    image: 'https://imgs.search.brave.com/ZpaY4AaZlsVhWdgUcEDwrf1cVVgFVPNzV4HGHNKN3dI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjgw/MjY4MTkwL3Bob3Rv/L21pc28tcmFtZW4t/bm9vZGxlLXNvdXAu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWgzQlNSanlDYkZo/SHF3b1FwcGlMc2Ny/M2lHS3VIZFIzdU5K/dXU4U1phMkU9',
    title: 'Noodles'
  }
];  

const Card4 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % recipes.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-[16vh] flex justify-center items-center">
      <div className="relative w-[500px] h-[530px] bg-purple-100 flex flex-col items-center justify-start text-white text-xl font-semibold shadow-lg rounded-lg p-6 overflow-hidden">
        
        {/* Animated "Latest Recipes" Title */}
        <motion.h2 
          className="text-3xl px-5 bg-red-500 py-3 rounded-lg shadow-lg tracking-wider text-center"
          animate={{
            y: [0, -10, 0], 
            textShadow: ["0px 0px 5px #fff", "0px 0px 20px #ff0", "0px 0px 5px #fff"], 
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.1 }}
        >
          ✨ Latest Recipes ✨
        </motion.h2>

        {/* Animated Image (Right to Left) */}
        <motion.img
          key={recipes[activeIndex].id}
          src={recipes[activeIndex].image}
          alt={recipes[activeIndex].title}
          className="w-[300px] h-80 object-cover rounded-lg shadow-lg mt-4      "
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1 }}
        />

        {/* Animated Recipe Name (Right to Left) */}
        <motion.p
          key={recipes[activeIndex].title}
          className="mt-4 text-2xl text-purple-900 font-bold"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {recipes[activeIndex].title}
        </motion.p>

      </div>
    </div>
  );
}

export default Card4;
