import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />

      <div className="pt-[14vh]">
        {/* 3D About Us Title */}
        <div className="text-center mt-12">
          <h1
            className="text-5xl font-bold text-gray-800"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            About Us
          </h1>
        </div>

        {/* Info Section - Latest Recipes */}
        <div className="bg-purple-100 p-6 rounded-2xl shadow-lg mt-10 mx-auto w-[60%]">
          <h2 className="text-xl font-bold mb-4 text-center">Latest Recipes</h2>
          <p className="text-justify text-lg px-4">
            At Latest Recipes, we aim to keep your culinary adventures exciting.
            Dive into a platform filled with the freshest recipes contributed by
            home chefs and passionate food enthusiasts. We show newly added
            recipes on the 'Latest Recipes' page, making it easy for you to find
            fresh ideas. Explore dishes shared by home chefs, inspired by
            seasonal ingredients and creative twists!
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
        <div className="bg-purple-100 p-6 rounded-2xl shadow-lg mt-14 mx-auto w-[60%]">
          <h2 className="text-xl font-bold mb-4 text-center">Category</h2>
          <p className="text-justify text-lg px-4">
            Discover recipes by category to suit your taste and preferences.
            Whether you’re in the mood for comforting meals, healthy dishes, or
            indulgent desserts, our carefully curated categories make it easy to
            find what you’re looking for. Dive in and explore the best recipes
            for any occasion, including breakfast, lunch, dinner, snacks,
            salads, soups, and healthy options!
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
          <h2 className="text-xl font-bold mb-4 text-center text-yellow-800">
            Advertisements
          </h2>
          <p className="text-justify text-lg px-4">
            "Enhance your culinary experience with recipes that not only inspire
            but also help you discover the best ingredients and tools. Every
            recipe highlights the products used, giving you a seamless way to
            explore and purchase them. Simply click on the 'Shop Now' button to
            visit our exclusive product page, where you can shop for premium
            cooking essentials at great prices!"
          </p>

          {/* Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mx-auto w-[80%]">
            <div className="flex flex-col items-center">
              <img
                className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
                src="https://imgs.search.brave.com/ACrPO1Ic82jBxXpogfZvA4RWHXgPv8F7iCWINO7ghEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/LnZpZ25vbGlmb29k/LmNvbS9jZG4vc2hv/cC9jb2xsZWN0aW9u/cy9zYXVjZXNfMTQw/MHgud2VicD92PTE2/ODA4MDYyMzc"
                alt="Product 1"
              />
              <p className="text-center mt-2 font-semibold">
                International Sauces🌍
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
                src="https://imgs.search.brave.com/Rf2kAQ01zi46WBlNXAn1Ve5f_U9XPAa9eWEghujYyFs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NjL1J1bm55X2h1/bm55LmpwZw"
                alt="Product 2"
              />
              <p className="text-center mt-2 font-semibold">Pure Honey🍯</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
                src="https://imgs.search.brave.com/-I2Gs7BtZpSWKWE8TBFdNTbpY9xvPls2ORzIIqIwrzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9raWlw/Zml0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMS9v/cmFuZ2UtcGFuY2Fr/ZXMtMy5qcGc"
                alt="Product 3"
              />
              <p className="text-center mt-2 font-semibold">
                Breakfast Essentials🥞
              </p>
            </div>
          </div>
        </div>

        {/* Info Section - Popular Recipes */}
        <div className="bg-purple-100 p-6 rounded-2xl shadow-lg mt-12 mx-auto w-[60%]">
          <h2 className="text-xl font-bold mb-4 text-center">
            Popular Recipes
          </h2>
          <p className="text-justify text-lg px-4">
            "Discover the best of the best in our 'Popular Recipes' section,
            where we showcase top-rated dishes loved by our community. These
            recipes are handpicked based on ratings and reviews, ensuring you
            get only the most tried-and-true culinary delights. From timeless
            classics to trending favorites, explore recipes that have won the
            hearts of food enthusiasts everywhere!"
          </p>
        </div>

        {/* Image Section - Popular Recipes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mx-auto w-[60%]">
          <div className="flex justify-center">
            <img
              className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
              src="https://imgs.search.brave.com/WzgH7SQm4puaRpPyEpGJy2uPYQYbjY7_njIQR1fjidY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzAzLzQ5LzEz/LzM2MF9GXzkwMzQ5/MTMxNl9DSWE4dUJH/QzhTdGI0Q3RheWdz/NWtyMFNGVlR0MXhV/bi5qcGc"
              alt="Recipe 1"
            />
          </div>

          <div className="flex justify-center">
            <img
              className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
              src="https://imgs.search.brave.com/3VwGlgbboyhZeveR-tOJRfoZjUyckV8vVNF52v-O5sk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/Mi8yOC8xNy80NS9t/b3RpY2hvb3ItNzY4/MzQ4N182NDAuanBn"
              alt="Recipe 2"
            />
          </div>

          <div className="flex justify-center">
            <img
              className="h-[200px] w-[200px] rounded-full shadow-lg object-cover"
              src="https://imgs.search.brave.com/Llwtc4rLwLNNQBi1HS2lX3FaxZm1rTgTGS_QYBR7hnY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMz/NDU4NTcwL3Bob3Rv/L2JlZXQtc2FsYWQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTVCbXpKT0NGNEFz/VkNzTWYwZUx6eFpF/SVRMbUpEV3JrRlcx/SGJCMlVJaDg9"
              alt="Recipe 3"
            />
          </div>
        </div>

        {/* Separator Line */}
        <div className="bg-gray-300 h-[2px] w-[60%] mx-auto mt-14"></div>

        {/* Team Members */}
        <div className="mt-6 mx-auto w-[40%]">
          <h2 className="text-xl font-bold mb-6 text-center">Our Team</h2>
          <p className="text-center text-gray-900 mb-6">
            We have an entire team of geniuses behind us at HomeChef-Hub who are
            experts in a little bit of everything – from customer service, to
            social media.
          </p>

          {/* Team Member 1 */}
          <div className="flex items-center mb-8 bg-gray-100 p-4 rounded-xl shadow-md">
            <img
              className="h-[200px] w-[200px] rounded-full object-cover shadow-md object-top flex-shrink-0"
              src="https://imgs.search.brave.com/Fo-wJIu7JPESFPWSwiN6pWQd5QCn5dB38nSgrZKO4lQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qb3lmdWwtYnVz/aW5lc3Mtd29tYW4t/c3RhbmRpbi1vZmZp/Y2UtaG9sZGluZy1s/YXB0b3BfMTMzOTkw/MS00NjIuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZA"
            />
            <div className="ml-6">
              <h3 className="text-lg font-bold">Amruta Dahatonde</h3>
              <p className="text-sm text-gray-900">
                Amruta is a dedicated and knowledgeable frontend developer who
                truly embodies the spirit of Home Chef Hub. With her deep
                understanding of the platform and exceptional design skills, she
                brings both creativity and functionality to the user experience,
                making her an integral part of the team.
              </p>
              <a
                href="https://github.com/amrutadahatonde10"
                className="mt-4 inline-block bg-black text-white px-2 py-1 rounded-md shadow hover:bg-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex items-center mb-8 bg-gray-100 p-4 rounded-xl shadow-md">
            <img
              className="h-[200px] w-[200px] rounded-full object-cover shadow-md object-top flex-shrink-0"
              src="https://imgs.search.brave.com/GcRvt9s-YNHngtcAPHxlaWt0_GFzuXne0NAV6BhWiq4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/cm9udC12aWV3LXNt/aWxleS1tYW4taG9s/ZGluZy1sYXB0b3Bf/MjMtMjE0OTkyNzYw/OC5qcGc_c2VtdD1h/aXNfaHlicmlk"
              alt="Team Member 1"
            />
            <div className="ml-6">
              <h3 className="text-lg font-bold">Satyam Nalkar</h3>
              <p className="text-sm text-gray-900">
                Satyam is a skilled and detail-oriented frontend developer whose
                expertise shapes the visual and interactive experience of Home
                Chef Hub. With a passion for crafting intuitive user interfaces,
                he brings creativity and precision to every aspect of the
                platform's design and functionality.
              </p>

              <a
                href="https://github.com/Satyam-nalkar"
                className="mt-4 inline-block bg-black text-white px-2 py-1 rounded-md shadow hover:bg-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex items-center mb-8 bg-gray-100 p-4 rounded-xl shadow-md">
            <img
              className="h-[200px] w-[200px] rounded-full object-cover shadow-md object-top flex-shrink-0"
              src="https://imgs.search.brave.com/_1MFOXJmSlIc-ZDTU9g0C3zeYVAcqMQTAzY0dYFGpls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/dXNpbmVzc3dvbWFu/LWJyb3dzaW5nLWxh/cHRvcC1zdHJlZXRf/MjMtMjE0Nzc4Nzcy/OS5qcGc_c2VtdD1h/aXNfaHlicmlk"
              alt="Team Member 1"
            />
            <div className="ml-6">
              <h3 className="text-lg font-bold">Tahera Sayyed</h3>
              <p className="text-sm text-gray-900">
                Tahera is a proficient and dedicated backend developer who
                ensures the seamless functionality and robustness of Home Chef
                Hub. With a passion for building efficient systems, she
                specializes in designing and managing the platform's core
                infrastructure and data flow.
              </p>
              <a
                href="https://github.com/SayyedTaheraEhsan"
                className="mt-4 inline-block bg-black text-white px-2 py-1 rounded-md shadow hover:bg-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="flex items-center mb-8 bg-gray-100 p-4 rounded-xl shadow-md">
            <img
              className="h-[200px] w-[200px] rounded-full object-cover shadow-md object-top flex-shrink-0"
              src="https://imgs.search.brave.com/Qt7UrzE9fmlDDpwpGkqhmDsQokbza4rqdKL_V-yYgqA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbWlsaW5nLW1h/bi1wb3J0cmFpdF81/MzQxOS02NTkyLmpw/Zz9zZW10PWFpc19o/eWJyaWQ"
              alt="Team Member 1"
            />
            <div className="ml-6">
              <h3 className="text-lg font-bold">Dipak Patil</h3>
              <p className="text-sm text-gray-900">
                Dipak is a talented and resourceful backend developer who plays
                a vital role in powering the core operations of Home Chef Hub.
                With a strong focus on performance and reliability, he excels in
                creating scalable solutions that keep the platform running
                smoothly.
              </p>
              <a
                href="https://github.com/issc-dipak"
                className="mt-4 inline-block bg-black text-white px-2 py-1 rounded-md shadow hover:bg-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
