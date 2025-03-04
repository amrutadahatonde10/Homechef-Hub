// Card .jsx
// import React from 'react';

// const Card = ({ color, value, label, href }) => {
//   const handleClick = (event) => {
//     event.preventDefault(); // 🔥 Default anchor behavior ko rokta hai
//     if (href) {
//       navigate(href);
//     }
//   };
//   return (
//     <div
//       className={`${color} text-white rounded-lg shadow p-6 text-center transform hover:scale-105 transition-transform cursor-pointer`}
//       onClick={handleClick} // ✅ Now it will navigate without refresh
//     >
//       <h2 className="text-4xl font-bold mb-2">{value}</h2>
//       <p className="text-lg">{label}</p>
//     </div>
//   );
// };

// export default Card;


// Dashboard.jsx
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import Card from './Card';
// import Navbar1 from '../Navbar/Navbar1';
// import Navbar2 from '../Navbar/Navbar2';
// import Footer from '../Footer/Footer';

// const Dashboard = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(true);
//     const [totalRecipes, setTotalRecipes] = useState(0); // Dummy data, replace with actual recipe count
//   const navigate = useNavigate(); // React Router ka useNavigate hook
  
//   useEffect(() => {
//     const fetchRecipesCount = async () => {
//       try {
//         const response = await fetch("https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/login"); // ✅ Correct MockAPI endpoint
//         const data = await response.json();
//         setTotalRecipes(data.length); // ✅ Total recipes ka count update karna
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//       }
//     };

//     fetchRecipesCount();
//   }, []); 

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   // Card Click Handler Function
//   const handleCardClick = (href) => {
//     if (href) {
//        navigate(href, { replace: true }); // ✅ Yeh ab sahi tarike se navigate karega
//     } else {
//       console.error("No route defined for this card");
//     }
//   };

//   const cardsData = [
//     { color: 'bg-purple-400', value: '0', label: 'Total Users', href: '/users' },
//     { color: 'bg-purple-400', value: '0', label: 'Total Views', href: '/dashboard' },
//     { color: 'bg-purple-400', value: '0', label: 'Total Categories', href: '/categories' },
//     { color: 'bg-purple-400', value: totalRecipes, label: 'Total Recipes', href: '/recipes' },
//   ];
  
  
  
//   return (
//     <>
//     <div className="fixed top-0 left-0 w-full z-10">
//     <Navbar1/>
//     <Navbar2/>
//     </div>
//     <div className="">
//     <div className="flex h-screen bg-gray-100 mt-28">
//       <Sidebar visible={sidebarVisible} />
//       <div className={`flex-1 min-h-screen transition-margin ${sidebarVisible ? 'ml-64' : 'ml-0'}`}>
//         <Header onToggle={toggleSidebar} />
//         <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {cardsData.map((card, index) => (
//             <div key={index} onClick={() => handleCardClick(card.href)} className="cursor-pointer">
//               <Card {...card} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//     <Footer className="relative w-full bg-gray-900 text-white text-center py-4 mt-auto"/>
//     </>
    
//   );
// };


// export default Dashboard;

// Header.jsx
// import React from 'react';

// const Header = ({ onToggle }) => {
//   return (
//     <div className="bg-white py-4 px-6 border-b border-gray-300 flex justify-between items-center">
//       <div className="text-lg font-semibold">Home Chef Hub</div>
//       <button
//         onClick={onToggle}
//         className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
//       >
//         Dashboard
//       </button>
//     </div>
//   );
// };

// export default Header;


// sidebar.jsx
// import React from 'react';
// import img from '../Admin/cheflogo.jpg'
// const Sidebar = ({ visible }) => {
//   const menuItems = [
//     { href: 'dashboard.html', label: 'Home' },
//     { href: 'settings.html', label: 'Settings' },
//     { href: 'users.html', label: 'Users' },
//     { href: 'categories.html', label: 'Categories' },
//     { href: 'recipes.html', label: 'Recipes' },
//     { href: 'ads.html', label: 'Ads' },
//   ];

//   return (
//     <div className='fixed top-0 left-0 w-full z-10'>
//     <div
//       className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform mt-28 ${
//         visible ? 'translate-x-0' : '-translate-x-full'
//       } w-64`}
//     >
//       <div className="flex items-center justify-center py-6 border-b border-gray-700">
//         <img src={img} alt="Home Chef Hub Logo" className="h-20 w-20 mr-2 transition-transform duration-300" />
//         <span className="text-xl font-bold">Home Chef Hub</span>
//       </div>
//       <ul className="mt-4">
//         {menuItems.map((item, index) => (
//           <li key={index} className="border-b border-gray-700">
//             <a href={item.href} className="block py-4 px-6 hover:bg-gray-700">
//               {item.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//     </div>
//   );
// };

// export default Sidebar;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar1 from "../Navbar/Navbar1";
// import Navbar2 from "../Navbar/Navbar2";
// import Footer from "../Footer/Footer";

// function RecipeForm() {
//   const [formData, setFormData] = useState({
//     title: "",
//     type: "",   
//     prepTime: "",
//     cookTime: "",
//     ingredients: [""],
//     description: "",
//     image: ""
//   });
  
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleIngredientChange = (index, value) => {
//     const newIngredients = [...formData.ingredients];
//     newIngredients[index] = value;
//     setFormData({ ...formData, ingredients: newIngredients });
//   };

//   const addIngredient = () => {
//     setFormData({ ...formData, ingredients: [...formData.ingredients, ""] });
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setFormData({ ...formData, image: imageUrl });
//     }
//   };

//   const resetForm = (event) => {
//     event.preventDefault();
//     setFormData({
//       title: "",
//       type: "",  // 🆕 Reset type on clear
//       prepTime: "",
//       cookTime: "",
//       ingredients: [""],
//       description: "",
//       image: ""
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://679de9fe946b0e23c06214a8.mockapi.io/recipes", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData), // 🔥 type bhi bhej raha hai
//       });

//       if (response.ok) {
//         alert("Recipe added successfully!");
//         navigate("/");
//       } else {
//         alert("Error adding recipe.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to add recipe.");
//     }
//   };

//   return (
//     <>
//       <div>
//         <Navbar1 />
//         <Navbar2 />
//       </div>
//       <div className=" bg-gradient-to-r from-orange-200 to-purple-200 flex justify-center mt-18 p-4 pt-12">
//         <div className="bg-gray-100 rounded-lg shadow-md w-full max-w-2xl ml-50 mt-20">
//           <h3 className="text-center text-2xl font-bold mb-4">YOUR RECIPE DETAILS</h3>
//           <form id="recipe-form" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block mb-1">Recipe Title</label>
//               <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Enter recipe title" className="w-full p-2 border rounded" />
//             </div>

//             {/* 🆕 Type Field */}
//             <div className="mb-4">
//               <label className="block mb-1">Recipe Type</label>
//               <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="e.g. Cheese Vada Pav, Schezwan Vada Pav" className="w-full p-2 border rounded" />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-1">Preparation Time (in minutes)</label>
//               <input type="number" name="prepTime" value={formData.prepTime} onChange={handleChange} placeholder="Enter preparation time" className="w-full p-2 border rounded" />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-1">Cook Time (in minutes)</label>
//               <input type="number" name="cookTime" value={formData.cookTime} onChange={handleChange} placeholder="Enter cook time" className="w-full p-2 border rounded" />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-1">Ingredients</label>
//               {formData.ingredients.map((ingredient, index) => (
//                 <input key={index} type="text" value={ingredient} onChange={(e) => handleIngredientChange(index, e.target.value)} placeholder="Enter ingredient" className="w-full p-2 border rounded mb-2" />
//               ))}
//               <button type="button" onClick={addIngredient} className="bg-zinc-200 text-black px-3 py-1 rounded">Add More</button>
//             </div>

//             <div className="mb-4">
//               <label className="block mb-1">Description</label>
//               <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Recipe description" className="w-full p-4 border rounded" />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-1">Pictures</label>
//               <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
//               {formData.image && <img src={formData.image} alt="Selected" className="mt-3 w-full h-48 object-cover rounded" />}
//             </div>

//             <div className="flex items-center justify-center gap-7 mt-2 p-2">
//               <button type="button" onClick={() => navigate("/")} className="bg-blue-400 text-white px-4 py-2 rounded">Back</button>
//               <button type="button" onClick={resetForm} className="bg-blue-400 text-white px-4 py-2 rounded">Clear</button>
//               <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// }

// export default RecipeForm;
