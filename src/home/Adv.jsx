import React from 'react'

const Adv = () => {
  return (
    <div className="h-auto w-full bg-purple-100 mt-2 flex flex-wrap">

      {/* Left Section with Image */}
      <div className="h-[600px] w-[49%] bg-red-100 relative ml-2 mr-3 mt-1">
        <img
          src="https://m.media-amazon.com/images/I/81e-oTNd57L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          alt="Spices Image"
          className="h-full w-full object-fit"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-3xl font-bold mb-4">
            Shop Premium Spice Jars for Every Kitchen🌶️
        </h1>
          <p className="text-xl mb-6">
            🌶️ Shop Spices That Make a Difference!
          </p> 
          <a
            href="https://www.amazon.com/spice-jars/s?k=spice+jars"
            className="bg-purple-600 text-white py-2 px-6 rounded-full font-bold hover:bg-purple-500"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="h-[600px] w-[49%] bg-gray-100 relative ml-2 mt-1">
        <img
          src="https://i5.walmartimages.com/seo/Gw-Khamkar-Special-Kitchen-King-Masala-Powder-Spices-Essential-For-Any-Kitchen-Dish-Zip-Lock-Re-Usable-Pack-185-Gram_9516fdd5-a80f-4052-b9c3-a8d377413568.921baf2d023ab3e23f0961050a7abfbf.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
          alt="Spices Jars"
          className="h-full w-full object-fit"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-3xl font-bold mb-4">
          Explore Kichen King Masalas for Better Taste✨
          </h1>
          <p className="text-xl mb-6">
            🌿 Shop Our Vibrant Spice Collection!
          </p>
          <a
            href="https://www.walmart.com/c/kp/spice-king"
            className="bg-purple-600 text-white py-2 px-6 rounded-full font-bold hover:bg-purple-500"
          >
            Shop Now
          </a>
        </div>
      </div>

    </div>
  );
}

export default Adv;


// Image Idea: Close-up of a variety of colorful spices in wooden bowls with a wooden spoon.
// Tagline: "Add Color, Flavor, and Magic to Your Meals ✨"
// CTA: "🌿 Shop Our Vibrant Spice Collection!"
// Link for Purchase: Buy Fresh Spices at Spice Market