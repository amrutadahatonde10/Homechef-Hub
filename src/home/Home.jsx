import React from 'react';
import Navbar1 from './Navbar/Navbar1';
import Navbar2 from './Navbar/Navbar2';
import Cards from './LatestRecipe/Cards';
import Round from './Round';
// import Collaboration from './Collaboration';
import Adv from './Adv';
import Pop from './PopularRecipe/Pop';
import Popular from './PopularRecipe/Popular';

const Home = () => {
  return (
    <div>

    <Navbar1 />   
    <Navbar2 />
    <Cards />
    <Round />
    {/* <Collaboration /> */}
    <Adv />
    <Pop val={"Popular Recipes"}/>
    <Popular />
    </div>
  )
}

export default Home;
