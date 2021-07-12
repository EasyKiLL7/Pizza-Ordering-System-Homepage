import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn } from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
             <HeroItems>
               <HeroH1>Pizza's Online Ordering</HeroH1>
               <HeroP>Yummy pizza's delivered fast & fresh</HeroP>
               <HeroBtn>Place Order</HeroBtn>
             </HeroItems>
            </HeroContent>

        </HeroContainer>
         
    )
}

export default Hero;
