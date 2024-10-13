import React from "react";

const FeaturePage = ({ data }) => {
  return (
    <section className="p-3 flex justify-center">
      {/* card */}
      <div className="bg-white lg:h-[30vw] md:h-[45vh] sm:h-[45vh] cursor-pointer hover:animate-pulse
       hover:bg-slate-100 transition duration-300 ease-in-out items-center flex text-center rounded-lg shadow-md p-4">
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
    </section>
  );
};

export default FeaturePage;
