import React from 'react';
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";

const About = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />

      <div className='pt-[14vh]'>
        {/* 3D About Us Title */}
        <div className="text-center mt-12">
          <h1 className="text-5xl font-bold text-gray-800" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
            About Us
          </h1>
        </div>

        {/* Info Section - Latest Recipes */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg mt-10 mx-auto w-[60%]">
          <h2 className="text-xl font-bold mb-4 text-center">Latest Recipes</h2>
          <p className="text-justify text-lg px-4">
            At Latest Recipes, we aim to keep your culinary adventures exciting. Dive into a platform filled with the freshest recipes contributed by home chefs and passionate food enthusiasts. Each recipe is crafted with love, inspired by the latest trends, seasonal ingredients, and creative innovations. Explore and indulge in a world of flavors!
          </p>
        </div>

        {/* Image Section - Latest Recipes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mx-auto w-[60%]">
          <div className="flex justify-center">
            <img
              className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
              src="https://imgs.search.brave.com/gHwXjR-WBNXuRFrgRC9VHvzjYg_JIr768XapxFhMrPI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXdlc29tZWN1aXNp/bmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAyL1Zh/ZGEtcGFhdi5wbmc"
              alt="Recipe 1"
            />
          </div>

          <div className="flex justify-center">
            <img
              className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
              src="https://imgs.search.brave.com/ckXEO3nP4Qmh5qvc-oG640qjb5OPq49XfheegW2S8Io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBiL0RhbEJhdGku/anBn"
              alt="Recipe 2"
            />
          </div>

          <div className="flex justify-center">
            <img
              className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
              src="https://imgs.search.brave.com/Pgs_9p4ySSKCTsSA_in99y-9RnNfpI_LyhyIrH8Semg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NDc4MDc0MC9waG90/by90b21hdG8tc291/cC1vbi13b29kZW4t/dGFibGUtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9S2V2N2JV/amJYVHBYbnF1MDJK/VXFYSl9JRkF1NGI3/ZmRCdDBsVUtuc1dl/UT0"
              alt="Recipe 3"
            />
          </div>
        </div>

        {/* Info Section - Category */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg mt-14 mx-auto w-[60%]">
          <h2 className="text-xl font-bold mb-4 text-center">Category</h2>
          <p className="text-justify text-lg px-4">
          Discover recipes by category to suit your taste and preferences. Whether you’re in the mood for comforting meals, healthy dishes, or indulgent desserts, our carefully curated categories make it easy to find what you’re looking for. Dive in and explore the best recipes for any occasion, including breakfast, lunch, dinner, snacks, salads, soups, and healthy options!
          </p>
        </div>

        {/* Image Section - Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mx-auto w-[60%]">
          <div className="flex justify-center">
            <img
              className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
              src="https://imgs.search.brave.com/mlD0-MnB3K627BH68hjA9CukS65swSaRx4307ScYoGs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjaXBldGluZWF0/cy5jb20vdGFjaHlv/bi8yMDIxLzA4L0dh/cmRlbi1TYWxhZF80/NS5qcGc_dz05MDA"
              alt="Category 1"
            />
          </div>

          <div className="flex justify-center">
            <img
              className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
              src="https://imgs.search.brave.com/XarQaFABdLrBmYoMR_Yu61H6CI0o7-ZCXLDIIXRPnXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LWJvd2wtd2l0/aC1zYWx0eS1zbmFj/a3NfMjMtMjE0ODU4/MjYzNC5qcGc_c2Vt/dD1haXNfaHlicmlk"
              alt="Category 2"
            />
          </div>

          <div className="flex justify-center">
            <img
              className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
              src="https://imgs.search.brave.com/Nd2Mc4vaxDTDCtuj9FuD3VKD0g047tIq7Vy-Ql438Bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMi8y/MDIxLzEwL09saXZl/X0V2ZXJ5ZGF5X0hl/YWx0aHlfUXVpY2tf/UGFuZWVyX2FuZF9D/aGlja3BlYV9DdXJy/eV9EVy1hY2Q5NWJi/LmpwZz9xdWFsaXR5/PTkwJmNyb3A9N3B4/LDIxODhweCw0NTY4/cHgsMzA0M3B4JnJl/c2l6ZT03MDAsNDY2"
              alt="Category 3"
            />
          </div>
        </div>
        

        {/* Advertisement Section */}
<div className="bg-yellow-100 p-6 rounded-2xl shadow-lg mt-14 mx-auto w-[60%]">
  <h2 className="text-xl font-bold mb-4 text-center text-yellow-800">Join the Culinary Journey!</h2>
  <p className="text-justify text-lg px-4">
    Unlock the secret to better cooking with our exclusive recipe collection and expert tips. Whether you're a seasoned chef or just starting your culinary adventure, our platform is here to inspire, guide, and support you. 
    <span className="font-bold"> Advertise your recipes</span> and become a part of a thriving food community. Share your creations, attract a following, and let the world taste your passion. Your cooking dreams, made real!
  </p>
  <div className="flex justify-center mt-6">
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full shadow-lg">
      Get Started Now
    </button>
  </div>
</div>


      </div>
    </>
  );
};

export default About;
