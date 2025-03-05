import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from '../Admin/Header';
import Card from './Card';
import Navbar1 from '../Navbar/Navbar1';
import Navbar2 from '../Navbar/Navbar2';
import Footer from '../Footer/Footer';

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

    const [totalRecipes, setTotalRecipes] = useState(0); // Dummy data, replace with actual recipe count
    const [categoriesCount, setCategoriesCount] = useState(0);
  const [categoryData, setCategoryData] = useState({});
    const navigate = useNavigate(); // React Router ka useNavigate hook
  
  useEffect(() => {
    const fetchRecipesCount = async () => {
      try {
        const response = await fetch("https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/login"); 
        const data = await response.json();
        setTotalRecipes(data.length);
        const categoryCounts = data.reduce((acc, recipe) => {
          acc[recipe.Type] = (acc[recipe.Type] || 0) + 1;
          return acc;
        }, {});

        setCategoryData(categoryCounts);
        setCategoriesCount(Object.keys(categoryCounts).length);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipesCount();
  }, []); 

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  
  // Card Click Handler Function
  const handleCardClick = (href) => {
    if (href) {
      navigate(href); 
    } else {
      console.error("No route defined for this card");
    }
  };

  const cardsData = [
    { color: 'bg-purple-400', value: '0', label: 'Total Users', href: 'users.html' },
    { color: 'bg-purple-400', value: '0', label: 'Total Views', href: 'dashboard.html' },
    { color: 'bg-purple-400', value: categoriesCount, label: 'Total Categories', href: 'categories.html' },
    { color: 'bg-purple-400', value: totalRecipes, label: 'Total Recipes',href:'/recipes' },
  ];
  
  return (
    <>
    <div className="fixed top-0 left-0 w-full z-10">
    <Navbar1/>
    <Navbar2/>
    </div>
    <div className="">
    <div className="flex h-screen bg-gray-100 mt-28">
      <Sidebar visible={sidebarVisible} />
      <div className={`flex-1 min-h-screen transition-margin ${sidebarVisible ? 'ml-64' : 'ml-0'}`}>
        <Header onToggle={toggleSidebar} />
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <div key={index} onClick={() => handleCardClick(card.href)} className="cursor-pointer">
              <Card {...card} />
            </div>
          ))}
        </div>
        <div className="mt-2 p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4 ">Recipes per Category</h2>
            <ul className="list-disc pl-5 text-gray-700">
              {Object.entries(categoryData).map(([category, count]) => (
                <li key={category}>
                  <span className="font-semibold">{category}:</span> {count} recipes
                </li>
              ))}
            </ul>
          </div>

      </div>
     
    </div>
    </div>
    <Footer/>
    </>
    
  );
};


export default Dashboard;
