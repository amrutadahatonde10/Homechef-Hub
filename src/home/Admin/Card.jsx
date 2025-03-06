import React from 'react';

const Card = ({ color, value, label, href }) => {
  const handleClick = (event) => {
    event.preventDefault(); // 🔥 Default anchor behavior ko rokta hai
    if (href) {
      navigate(href);
    }
  };
  return (
    <div
      className={`${color} text-white rounded-lg shadow p-6 text-center transform hover:scale-105 transition-transform cursor-pointer`}
      onClick={handleClick} // ✅ Now it will navigate without refresh
    >
      <h2 className="text-4xl font-bold mb-2">{value}</h2>
      <p className="text-lg">{label}</p>
    </div>
  );
};

export default Card;
