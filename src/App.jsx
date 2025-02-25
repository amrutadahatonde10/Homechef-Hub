import React from 'react'
import Home from './home/Home';
import Login from './userinfo/Login';
import Register from './userinfo/Register';
import { Route, Routes } from 'react-router-dom';
import ViewType from './home/Category/ViewType';
import RecipeForm from './home/Add_Reciepe/RecipeForm';
import Admin_login from './home/Admin/Admin_login';
// import RecipeDetails from './home/Navbar/RecipeDetails';
import RecipeTypes from './home/Navbar/RecipeTypes';
import RecipeDetail from './home/Navbar/RecipeDetail';

import AllRecipe from './home/Recipes/AllRecipe';

const App = () => {
  
  return (
    
   <div>
      <Routes>        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/breakfast" element={<ViewType />} />
        <Route exact path="/add-recipe" element={<RecipeForm />} />

        <Route exact path="/Admin" element={<Admin_login />} />
        {/* <Route exact path="/recipe-details" element={<RecipeDetails />} />    */}
        <Route path="/recipes/:type" element={<RecipeTypes />} />  
        <Route path="/recipe/:id" element={<RecipeDetail />} />

        <Route path="/Recipes" element={<AllRecipe />} />  
      </Routes> 
   </div>
  );

  
}


export default App