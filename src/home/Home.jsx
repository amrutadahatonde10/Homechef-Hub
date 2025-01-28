import React from 'react';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
// import Image from './Image';
import Cards from './Cards';
import Round from './Round';
import Col from './Col';
import Adv from './Adv';

const Home = () => {
  return (
    <div>

    <Navbar1 />
    <Navbar2 />
    {/* <Image /> */}
    <Cards />
    <Round />
    <Col />
    <Adv />
    </div>
  )
}

export default Home;
