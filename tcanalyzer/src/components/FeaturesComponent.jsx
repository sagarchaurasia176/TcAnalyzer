import React from "react";
import { keyFeature } from "../api/HeaderData";
console.log(keyFeature);
import FeaturePage from "../page/FeaturePage";
const FeaturesComponent = () => {
  return (
    <div className=" container max-w-max">
      <div className=" text-center">
        <span className=" text-white  font-header-font  text-4xl">
          Key-Features
        </span>
      </div>
      <br />

      {/* cards */}
      {keyFeature.map((data, id) => (
        <>
          <FeaturePage data={data} key={id} />
        </>
      ))}
    </div>
  );
};

export default FeaturesComponent;
