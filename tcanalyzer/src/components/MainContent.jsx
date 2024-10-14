import React from "react";
import HeroComponent from "./HeroComponent";
import FeaturesComponent from "./FeaturesComponent";
import { motion, useScroll } from "framer-motion";
import TryNow from "../page/TryNow";
import ReadyToOptimize from "../page/ReadyToOptimize";
import FotterPage from "../page/FotterPage";

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
        <br />
      <div>
      <TryNow/>
    </div>
    <br />
    <div>
      <ReadyToOptimize/>
    </div>
    {/* footer */}
    <br />
    <div>
      <FotterPage/>
    </div>
      </div>
    </>
  );
};

export default MainContent;
