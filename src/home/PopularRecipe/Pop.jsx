import React from "react";

const Pop = ({ val }) => {
  return (
    <div className="h-10 w-full  mt-4 flex items-center justify-center">
      <div className="flex items-center px-80">
        <div className="h-1 w-60 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"></div>
        <span className="px-4 text-2xl font-bold">{val}</span>
        <div className="h-1 w-60 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
      </div>
    </div>
  );
};

export default Pop;
