import React from 'react'
import Home from './home/Home';
import Login from './userinfo/Login';
import Register from './userinfo/Register';
import { Route, Routes } from 'react-router-dom';
import ViewType from './home/Category/ViewType';

import About from './home/About/About'; ///////////
import Contact from './home/Contact/Contact'; //////////
import RecipeForm from './home/Add_Reciepe/RecipeForm';
import Admin_login from './home/Admin/Admin_login';
// import RecipeDetails from './home/Navbar/RecipeDetails';
// import RecipeTypes from './home/Navbar/RecipeTypes';
import RecipeDetail from './home/Navbar/RecipeDetail';
import SearchResults from './home/Navbar/SearchResults';
import Recipes from './home/Navbar/Recipes';
import Dashboard from './home/Admin/Dashboard';
import RecipesList from './home/Admin/RecipesList';

import AllRecipe from './home/Recipes/AllRecipe';
import LikeRecipe from './home/Recipes/LikeRecipe';

import Advertise from './home/Admin/Updation/Advertise';
import RecipesByType from './home/Admin/Updation/RecipesByType';
// import Types from '/home/Admin/Updation/Types';
// import Dashboard from './home/Admin/Dashboard';

const App = () => {
  
  return (
    
   <div>
      <Routes>        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/breakfast" element={<ViewType />} />

        <Route exact path="/about" element={<About />} /> 
        <Route exact path="/contact" element={<Contact />} /> 
        <Route exact path="/add-recipe" element={<RecipeForm />} />

        <Route exact path="/Admin" element={<Admin_login />} />
        <Route exact path="/Dashboard" element={<Dashboard/>} />
        
        {/* <Route exact path="/recipe-details" element={<RecipeDetails />} />    */}
        {/* <Route path="/recipes/:type" element={<RecipeTypes />} />   */}
        <Route path="/search" element={<SearchResults />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="recipes/" element={<Recipes/>} />
        <Route path="/recipes/:id" element={<RecipeDetail />} /> 
        <Route path="/recipes/:Id" element={<RecipeDetail />} />
        <Route path="/recipess" element={<RecipesList/>}/>
        
        <Route path="/Recipes123" element={<AllRecipe />} />  
        <Route path="/LikeRecipe" element={<LikeRecipe />} />
        <Route path="/ads" element={<Advertise />} />
        {/* <Route Path="types" element={<Types/>} /> */}
        <Route path="/types/:type" element={<RecipesByType/>} />
        <Route path="//recipes/" element={<Dashboard/>} />


      </Routes> 
   </div>
  );

  
}


export default App