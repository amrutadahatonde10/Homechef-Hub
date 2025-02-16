import React from 'react'
import Home from './home/Home';
import Login from './userinfo/Login';
import Register from './userinfo/Register';
import { Route, Routes } from 'react-router-dom';
import ViewType from './home/Category/ViewType';


const App = () => {
  
  return (
    
   <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/breakfast" element={<ViewType />} />

      </Routes> 
   </div>
  );

  
}


export default App