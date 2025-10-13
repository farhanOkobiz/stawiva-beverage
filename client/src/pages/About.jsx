// import React from 'react'

import AboutIntroduction from "../components/about/AboutIntroduction";
import AboutValues from "../components/about/AboutValues";
import Chooseus from "../components/about/Chooseus";
import OurJourney from "../components/about/OurJourney";
import WhatWeDo from "../components/about/WhatWeDo";
import Partner from "../components/home/Partner";
import BradCumbs from "../components/shared/BradCumbs";
import SubBanner from "../components/shared/subBanner/SubBanner";
import AboutUs from "./AboutUs";

const About = () => {
  return (
    <div className="font-robo lg:px-0">
      <div className=" bg-[#f5f5f5] "></div>
      {/* <BradCumbs title="Know About Stamina Plus " brad="About"></BradCumbs> */}
      {/* <SubBanner/> */}
       <AboutUs/>
      {/* <AboutIntroduction></AboutIntroduction>
      <AboutValues></AboutValues>
      <WhatWeDo></WhatWeDo> */}
      {/* <OurTeam></OurTeam> */}
      {/* <OurJourney></OurJourney> */}
      {/* <Chooseus></Chooseus>
      <Partner></Partner> */}
    </div>
  );
};

export default About;
