import React from "react";
import { keyFeature } from "../api/HeaderData";
import FeaturePage from "../page/FeaturePage";

const FeaturesComponent = () => {
  return (
    <div className="w-full p-4">
      <div className="text-center mb-4">
        <span className="text-white font-header-font text-4xl">Key Features</span>
      </div>

      {/* Responsive Cards */}
      <div className="flex flex-wrap gap-4 justify-center">
        {keyFeature.map((data, id) => (
          <div key={id} className="sm:w-[48%] md:w-[30%] lg:w-[50%] p-2">
            <FeaturePage data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesComponent;
