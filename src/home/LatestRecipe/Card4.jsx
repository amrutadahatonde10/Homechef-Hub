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
    image: 'https://imgs.search.brave.com/UKqSZavjqVZxBPnfNF6SRrN8HyWC0FOIqsnr3UZUe-w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2RlbC5oLWNk/bi5jby9hc3NldHMv/MTcvMjIvNjQweDk1/OS9nYWxsZXJ5LTE0/OTYxNjYzMjEtZGVs/aXNoLXZlZ2dpZS1i/dXJnZXJzLXBpbi0x/LTEwMjQuanBnP3Jl/c2l6ZT05ODA6Kg',
    title: 'Veg Burger'
  },
  {
    id: 3,
    image: 'https://imgs.search.brave.com/gHwXjR-WBNXuRFrgRC9VHvzjYg_JIr768XapxFhMrPI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXdlc29tZWN1aXNp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAyL1Zh/ZGEtcGFhdi5wbmc',
    title: 'Vada Pav'
  },
  {
    id: 4,
    image: 'https://imgs.search.brave.com/ZyuJAhiMhHTNkMKkgJZmpMFBidFwsId2WXVxxb1Us5U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3RvcnlwaWNrLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NC8wOS9QYXYtQmhh/amkuanBn',
    title: 'Pav-Bhaji'
  },
  {
    id: 5,
    image: 'https://imgs.search.brave.com/ucRUOpdWEU2-RC66urFxI192qnl8cZldnHnnv_pJHCU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NDkzMWQyYWVlMTg1/MTBiNDdmNGJiMWYv/NjVkZmIwYjQ5NzBl/ZTE2NGQxN2RhNzAx/X1NhYnVkYW5hLUto/aWNoZGkuanBlZw',
    title: 'Sabudana Khichdi'
  }

];  

const Card4 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % recipes.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-[16vh] flex justify-center items-center">
      <div className="relative w-[500px] h-[530px] bg-purple-100 flex flex-col items-center justify-start text-white text-xl font-semibold shadow-lg rounded-lg p-6 overflow-hidden ">
        
        {/* Animated "Latest Recipes" Title */}
        <motion.h2 
          className="text-2xl mt-4 px-5 bg-red-500 py-3 rounded-lg shadow-lg tracking-wider text-center"
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
          className="w-[300px] h-80 object-cover rounded-lg shadow-lg mt-6 mb-4"
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
