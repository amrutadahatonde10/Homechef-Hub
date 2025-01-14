import React from 'react';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
// import Image from './Image';
import Cards from './Cards';
import Round from './Round';
import Nav3 from './Nav3';
import Adv from './Adv';

const Home = () => {
  return (
    <div>

    <Navbar1 />
    <Navbar2 />
    {/* <Image /> */}
    <Cards />
    <Round />
    <Nav3 />
    <Adv />
    </div>
  )
}

export default Home;
