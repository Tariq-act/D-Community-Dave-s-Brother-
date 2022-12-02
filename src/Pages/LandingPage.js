import React from 'react';
import Index from '../Components/LandingPage/Carousal';
import Carousal from '../Components/LandingPage/Carousal';

import Hero from '../Components/LandingPage/Hero';
import OurTechnologies from '../Components/LandingPage/OurTechnologies';
import Services from '../Components/LandingPage/Services';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Carousal />
      {/* <Index /> */}
      <Services />
      <OurTechnologies />
    </>
  );
};

export default LandingPage;
