import React, { useState, useEffect } from "react";

const Adv = () => {
  const [ads, setAds] = useState([]);
  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentRightImage, setCurrentRightImage] = useState(0);

  useEffect(() => {
    fetch("https://67b0179fdffcd88a678852bf.mockapi.io/api/ad")
      .then((response) => response.json())
      .then((data) => setAds(data))
      .catch((error) => console.error("Error fetching ads:", error));
  }, []);

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setCurrentLeftImage((prev) => (prev + 1) % (ads.length / 2 || 1));
    }, 5000);

    const rightInterval = setInterval(() => {
      setCurrentRightImage((prev) => (prev + 1) % (ads.length / 2 || 1));
    }, 5000);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, [ads]);

  if (ads.length === 0) return <p>Loading ads...</p>;

  const leftAds = ads.slice(0, Math.ceil(ads.length / 2));
  const rightAds = ads.slice(Math.ceil(ads.length / 2));

  return (
    <div className="h-auto w-full mt-4 flex flex-wrap">
      {/* Left Section */}
      <div className="h-[600px] w-[49%] bg-red-100 relative ml-2 mr-3 mt-1 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-1000">
          <img
            src={leftAds[currentLeftImage]?.image}
            alt={leftAds[currentLeftImage]?.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h1 className="text-3xl font-bold mb-4">
              {leftAds[currentLeftImage]?.name}
            </h1>
            <p className="text-xl mb-6">
              {leftAds[currentLeftImage]?.description}
            </p>
            <a
              href={leftAds[currentLeftImage]?.link}
              className="bg-purple-600 text-white py-2 px-6 rounded-full font-bold hover:bg-purple-500"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="h-[600px] w-[49%] bg-gray-100 relative ml-2 mt-1 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-1000">
          <img
            src={rightAds[currentRightImage]?.image}
            alt={rightAds[currentRightImage]?.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h1 className="text-3xl font-bold mb-4">
              {rightAds[currentRightImage]?.name}
            </h1>
            <p className="text-xl mb-6">
              {rightAds[currentRightImage]?.description}
            </p>
            <a
              href={rightAds[currentRightImage]?.link}
              className="bg-purple-600 text-white py-2 px-6 rounded-full font-bold hover:bg-purple-500"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adv;
