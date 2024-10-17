import React from "react";
import { keyFeature } from "../api/HeaderData";
console.log(keyFeature);
import FeaturePage from "../page/FeaturePage";
const FeaturesComponent = () => {
  return (
    <div className=" h-[100%]  mt-[2%] sm:mt[100%]">
      <div className=" text-center">
        <span className=" text-white   font-header-font  text-4xl">
          Key-Features
        </span>
      </div>
      <br />

      {/* cards */}
      <div className="grid grid-cols-1 gap-3   mt-32  lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-2 content-center items-center p-4">
        {keyFeature.map((data, id) => (
          <FeaturePage data={data} key={id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesComponent;
