import React, { useState, useEffect } from "react";

const Adv = () => {
  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentRightImage, setCurrentRightImage] = useState(0);

  const leftImages = [
    {
      src: "https://imgs.search.brave.com/Rf2kAQ01zi46WBlNXAn1Ve5f_U9XPAa9eWEghujYyFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NjL1J1bm55X2h1/bm55LmpwZw",
      alt: "Honey",
      title: "Shop Pure and Premium Honey🍯",
      description: "🌼Taste Nature’s Sweetest Gift!",
      link: "https://www.thehoneyshopindia.com/store/",
    },
    {
      src: "https://imgs.search.brave.com/ACrPO1Ic82jBxXpogfZvA4RWHXgPv8F7iCWINO7ghEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/LnZpZ25vbGlmb29k/LmNvbS9jZG4vc2hv/cC9jb2xsZWN0aW9u/cy9zYXVjZXNfMTQw/MHgud2VicD92PTE2/ODA4MDYyMzc",
      alt: "Sauce",
      title: "International Sauces🌍",
      description: "🛒Bring Global Flavors to Your Table!",
      link: "https://www.sauceshop.co/collections/all",
    },
  ];

  const rightImages = [
    {
      src: "https://imgs.search.brave.com/-I2Gs7BtZpSWKWE8TBFdNTbpY9xvPls2ORzIIqIwrzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9raWlw/Zml0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMS9v/cmFuZ2UtcGFuY2Fr/ZXMtMy5qcGc",
      alt: "Alternate Spice Jars Image",
      title: " Way Explore Breakfast Essentials Today🥞",
      description: "🍳 Start Your Day the Delicious!",
      link: "https://www.walmart.com/browse/food/frozen-breakfast-food/976759_976791_1001417",
    },
    {
      src: "https://imgs.search.brave.com/zvOK267u5_gmh8F46J6SrzFKAEXeBSdRrurhk3lOPSA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taW5p/bWFsaXN0YmFrZXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzAyL0FNQVpJ/TkctQ2hhbmEtTWFz/YWxhLW1hZGUtaW4t/MS1Qb3QtU28taGVh/bHRoeS1mbGF2b3Jm/dWwtYW5kLWRlbGlj/aW91cy12ZWdhbi1n/bHV0ZW5mcmVlLWNo/YW5hbWFzYWxhLXJl/Y2lwZS1taW5pbWFs/aXN0YmFrZXIuanBn",
      alt: "Kitchen King Masala",
      title: "Explore Kitchen King Masalas for Better Taste✨",
      description: "🌿 Shop Our Vibrant Spice Collection!",
      link: "https://ramdevstore.com/product/kitchen-king-masala/",
    },
  ];

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setCurrentLeftImage((prev) => (prev + 1) % leftImages.length);
    }, 5000); // 5-second interval

    const rightInterval = setInterval(() => {
      setCurrentRightImage((prev) => (prev + 1) % rightImages.length);
    }, 5000); // 5-second interval

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return (
    <div className="h-auto w-full mt-4 flex flex-wrap">
      {/* Left Section */}
      <div className="h-[600px] w-[49%] bg-red-100 relative ml-2 mr-3 mt-1 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-1000">
          <img
            src={leftImages[currentLeftImage].src}
            alt={leftImages[currentLeftImage].alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h1 className="text-3xl font-bold mb-4">
              {leftImages[currentLeftImage].title}
            </h1>
            <p className="text-xl mb-6">{leftImages[currentLeftImage].description}</p>
            <a
              href={leftImages[currentLeftImage].link}
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
            src={rightImages[currentRightImage].src}
            alt={rightImages[currentRightImage].alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h1 className="text-3xl font-bold mb-4">
              {rightImages[currentRightImage].title}
            </h1>
            <p className="text-xl mb-6">{rightImages[currentRightImage].description}</p>
            <a
              href={rightImages[currentRightImage].link}
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
