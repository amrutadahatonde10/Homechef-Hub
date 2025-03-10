import React from 'react';
import Navbar1 from './Navbar/Navbar1';
import Navbar2 from './Navbar/Navbar2'; 
import Cards from './LatestRecipe/Cards';
import Round from './Category/Round';
import Adv from './Advertise/Adv';
import Pop from './PopularRecipe/Pop';
import Popular from './PopularRecipe/Popular';
import Footer from './Footer/Footer';


const Home = () => {
  return (
    <div>

    <Navbar1 />   
    <Navbar2 />
    <Cards />
    <Round />
    <Adv />
    <Pop val={"Popular Recipes"}/>
    <Popular />
    <Footer />

    </div>
  )
}

export default Home;
