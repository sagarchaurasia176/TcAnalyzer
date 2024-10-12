import React from "react";
import HeroComponent from "./HeroComponent";
import FeaturesComponent from "./FeaturesComponent";
import { motion, useScroll } from "framer-motion";

const MainContent = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <div className="">
        <div>
          <HeroComponent />
        </div>
        {/* feture component */}

        <div className=" p-2">
          <FeaturesComponent />
        </div>
        {/* <h2  className=" text-white">hie</h2> */}

        {/* Navbar */}
      </div>
    </>
  );
};

export default MainContent;
