import React from 'react';
import Navbar1 from './Navbar/Navbar1';
import Navbar2 from './Navbar/Navbar2';
import Cards from './Card/Cards';
import Round from './Round';
// import Collaboration from './Collaboration';
import Adv from './Adv';
import Pop from './Pop';

const Home = () => {
  return (
    <div>

    <Navbar1 />   
    <Navbar2 />
    {/* <Pop val={"Latest"}/> */}
    <Cards />
    <Round />
    {/* <Collaboration /> */}
    <Adv />
    <Pop val={"Popular Recipes"}/>
    </div>
  )
}

export default Home;
