import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from '../Admin/Header';
import Card from './Card';
// import Navbar1 from '../Navbar/Navbar1';
// import Navbar2 from '../Navbar/Navbar2';
import Footer from '../Footer/Footer';
import img from "/src/assets/m.png";

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0);

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




  useEffect(() => {
    const fetchUsersCount = async () => {
      try {
        const response = await fetch("https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/users"); 
        const data = await response.json();
        setTotalUsers(data.length);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
  
    fetchUsersCount();
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
    { color: 'bg-purple-400', value: totalUsers, label: 'Total Users', href: '#' },
    { color: 'bg-purple-400', value: totalUsers, label: 'Total Views', href: '#' },
    { color: 'bg-purple-400', value: categoriesCount, label: 'Total Categories', href: '#' },
    { color: 'bg-purple-400', value: totalRecipes, label: 'Total Recipes',href:'/recipes' },
  ];
  
  return (
    <>
          <div className="fixed top-0 w-full z-50">
              <div className="h-[8vh] w-full flex bg-gray-200 shadow-md py-[1px]">
                <div className="h-full w-[22%] flex bg-purple-200">
                  <img src={img} alt="homecheflogo" className="w-10vh h-full bg-purple-200" />
                  <h1 className="mt-4 italic ">
                    <b>
                      Home<span className="text-gray-600">Chef</span>Hub
                    </b>
                  </h1>
                </div>
        
                <div className="h-full w-full bg-purple-200">
                  <b>
                    <div className="bg-black-200 mt-4 ml-[30%]">
                      Simple recipes made for
                      <span className="text-purple-600 italic"> real, actual, everyday life.</span>
                    </div>
                  </b>
                </div>
                </div>
                </div>
    <div className="fixed top-0 left-0 w-full z-10">
    {/* <Navbar1/> */}
    {/* <Navbar2/> */}
    <div className='bg-purple-300 w-full h-28'></div>
    </div>
    <div className="">
    <div className="flexh-screen bg-gray-100 mt-28">
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
            <h2 className="text-xl font-semibold mb-4 ">Recipes per Their Types</h2>
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
