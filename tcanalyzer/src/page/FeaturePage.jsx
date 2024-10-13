import React from "react";

const FeaturePage = ({ data }) => {
  return (
    <section className=" p-3  flex float-left ml-1 space-x-4  bg-red-300">
        {/* card */}
      <div className=" bg-white p-3  h-[32vh] m-auto w-[100vw]  md:w-[20vw] sm:w-[12vw] rounded-lg ">
        <div className=" text-black m-auto">
          <span className=" font-header-font text-center ">{data.head}</span>
          <div>
            {data.icons}
          </div>
          <div>
            <p>{data.para}</p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default FeaturePage;
