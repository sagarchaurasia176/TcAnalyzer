import React from "react";
import Shapes from "../Dividers/Shapes";
const FeaturePage = ({ data }) => {
  return (
    <section className=" ">
      {/* card */}
      <div 
        className="bg-white w-[100%] cursor-pointer  hover:animate-pulse  hover:rotate-6 hover:scale-110
       hover:bg-slate-100 transition duration-300 ease-in-out   text-center rounded-lg shadow-md p-4"
      >
        <div className="text-black m-auto">
          {/* Icon */}
          <div className="text-center flex justify-center mb-2">
            <data.icons className="text-6xl text-slate-700" />
          </div>

          {/* Title */}
          <span className="font-header-font text-center text-lg text-slate-700 block mb-2">
            {data.head}
          </span>

          {/* Description */}
          <div>
            <p className="text-sm text-slate-500">{data.para}</p>
          </div>
        </div>
      </div>
      <Shapes/>

    </section>
  );
};

export default FeaturePage;
