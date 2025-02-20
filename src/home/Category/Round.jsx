import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Breakfast",
    img: "https://imgs.search.brave.com/f0aOGZp_uTe4mJNT2scKWgaYui6mEAdvG5EXXqfovtE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29va3dpdGhtYW5h/bGkuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE0LzA4L1Bv/aGEtUmVjaXBlLmpw/Zw",
  },
  {
    name: "Lunch",
    img: "https://imgs.search.brave.com/6NSVG6C0V6crBeqZY714sOwcC1G_1i7oh_IljcgCDSk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9vbWVsZXQtd2l0/aC1mcmVzaC10b21h/dG9lcy1hdm9jYWRv/LW1venphcmVsbGEt/Y2hlZXNlLW9tZWxl/dHRlLXNhbGFkLWJy/ZWFrZmFzdC1oZWFs/dGh5LWZvb2RfMjgy/OS02MDQ3LmpwZz9z/ZW10PWFpc19oeWJy/aWQ",
  },
  {
    name: "Snack",
    img: "https://imgs.search.brave.com/XarQaFABdLrBmYoMR_Yu61H6CI0o7-ZCXLDIIXRPnXg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LWJvd2wtd2l0/aC1zYWx0eS1zbmFj/a3NfMjMtMjE0ODU4/MjYzNC5qcGc_c2Vt/dD1haXNfaHlicmlk",
  },
  {
    name: "Dinner",
    img: "https://imgs.search.brave.com/Nd2Mc4vaxDTDCtuj9FuD3VKD0g047tIq7Vy-Ql438Bc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMi8y/MDIxLzEwL09saXZl/X0V2ZXJ5ZGF5X0hl/YWx0aHlfUXVpY2tf/UGFuZWVyX2FuZF9D/aGlja3BlYV9DdXJy/eV9EVy1hY2Q5NWJi/LmpwZz9xdWFsaXR5/PTkwJmNyb3A9N3B4/LDIxODhweCw0NTY4/cHgsMzA0M3B4JnJl/c2l6ZT03MDAsNDY2",
  },
  {
    name: "Soup",
    img: "https://imgs.search.brave.com/NcobPdzVvLyBeYyyCmkGumtYbUlxsXKv8eQfAF4j0Ic/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9kZWww/Njk5MjMtdG9tYXRv/LXNvdXAtMTMxLXJ2/LWxlYWQtNjQ5ZGVk/NzUwYzliNy5qcGc_/Y3JvcD0wLjY2NjY2/NjY2NjY2NjY2NjZ4/dzoxeGg7Y2VudGVy/LHRvcCZyZXNpemU9/OTgwOio",
  },
  {
    name: "Salads",
    img: "https://imgs.search.brave.com/mlD0-MnB3K627BH68hjA9CukS65swSaRx4307ScYoGs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjaXBldGluZWF0/cy5jb20vdGFjaHlv/bi8yMDIxLzA4L0dh/cmRlbi1TYWxhZF80/NS5qcGc_dz05MDA",
  },
  {
    name: "Healthy",
    img: "https://img.freepik.com/free-photo/top-view-sliced-vegetable-salad-peppered-with-chicken-slices-inside-plate-with-fresh-vegetables-blue-desk-snack-lunch-salad-vegetable-food_140725-38926.jpg?t=st=1737551840~exp=1737555440~hmac=03ad5c9ab8b4cc09b9b083b1994df06e2bb83200a91035ce9332a60060ce80bb&w=996",
  },
];

const Round = () => {
  return (
    <div
      className="grid grid-cols-7 gap-2 p-4 "
      style={{
        background:
          "linear-gradient(to right,rgb(247, 220, 209),rgb(226, 198, 245))",
      }}
    >
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full overflow-hidden border border-purple-400  shadow-md">
            <img
              src={category.img}
              alt={category.name}
              className="w-full h-full object-cover shadow-32l"
            />
          </div>
          <div className="h-10 mt-2 flex items-center justify-center bg-white border border-purple-300 rounded-md shadow-md w-40">
            <Link
              to="/breakfast" // Navigate to the category-specific route
              onClick={() => {
                // Save category name to localStorage
                localStorage.setItem("name", category.name);
              }}
              className="hover:text-gray-500 font-medium"
            >
              {category.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Round;
