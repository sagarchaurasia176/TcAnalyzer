import React from "react";
import { optimize } from "../api/HeaderData";
import SingupWithGoogle from "../Form/SingupWithGoogle";
// import Shapes from "../Dividers/Shapes";
const ReadyToOptimize = () => {
  return (
    <>
      <section
        className=" h-[70vh] bg-slate-900">
        <main className=" relative top-32 ">
          <header
            className=" 
               text-center text-orange-500 font-header-font text-7xl"
          >
            {optimize.title}
          </header>
          <br />

          <div className="flex animate-bounce items-center justify-center">
            <SingupWithGoogle  />
          </div>
        </main>
      </section>
    </>
  );
};

export default ReadyToOptimize;
