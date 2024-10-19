import React from "react";
import { optimize } from "../api/HeaderData";
import SingupWithGoogle from "../Form/SingupWithGoogle";
const ReadyToOptimize = () => {
  return (
    <>
      <section
        className=" h-[80vh]  
      p-3 md:bg-gradient-to-r md:from-inherit md:via-orange-200
          to-orange-400 
    "
      >
        <main className="  relative   top-40 ">
          <header
            className=" 
               text-center text-orange-500 font-header-font text-5xl"
          >
            {optimize.title}
          </header>
          <br />
          <article className=" text-center  text-black font-light capitalize">
            {optimize.para}
          </article>
          <div className=" flex justify-center top-14 relative">
            <SingupWithGoogle />
          </div>
        </main>
      </section>
    </>
  );
};

export default ReadyToOptimize;
