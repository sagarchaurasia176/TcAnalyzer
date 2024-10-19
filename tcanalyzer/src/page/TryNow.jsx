import React from "react";
import { tryItKnow } from "../api/HeaderData";

// Try now
const TryNow = () => {
  return (
    <>
      <section
        className=" h-[80vh] 
      p-3 md:bg-gradient-to-r md:from-slate-700 md:via-slate-900
          to-slate-100 bg-slate-800
    "
      >
        <header
          className=" 
               text-center text-white font-header-font text-5xl"
        >
          {tryItKnow.title}
        </header>
        <br />
        <div className=" flex flex-col-1 justify-around flex-wrap  flex-row sm:flex-row md:flex-row rounded-lg m-auto ">
          {/* first data */}
          <div className="">
            <br />
            <header
              className="
         text-white font-header-font text-3xl"
            >
              {tryItKnow.heading}
            </header>
            <article className=" text-yellow-500 capitalize">
              {tryItKnow.para}
            </article>
          </div>

          {/* div for video */}
          <div className=" flex items-center">
            <h3 className=" text-black">video soon</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default TryNow;
