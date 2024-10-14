import React from "react";
import { optimize } from "../api/HeaderData";
const ReadyToOptimize = () => {
  return (
    <>
      <section
        className=" w-full h-[80vh] 
      p-3 md:bg-gradient-to-r md:from-inherit md:via-orange-200
          to-orange-400 
    "
      >
        <main className="  relative   top-40 ">
          <header
            className=" 
               text-center text-white font-header-font text-5xl"
          >
            {optimize.title}
          </header>
          <br />
          <article className=" text-center  text-white  font-light capitalize">
            {optimize.para}
          </article>
          <div className=" flex justify-center top-14 relative">
          <button
            className=" bg-slate-100  hover:animate-pulse
             p-4 rounded-lg"
          >
            {optimize.btn}
          </button>
          </div>
        
        </main>
      </section>
    </>
  );
};

export default ReadyToOptimize;
