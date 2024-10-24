import React from "react";
import { optimize } from "../api/HeaderData";
import SingupWithGoogle from "../Form/SingupWithGoogle";
const ReadyToOptimize = () => {
  return (
    <>
      <section
        className="
      p-3  
    "
      >
        <main className="  relative   top-12 ">
          <header
            className=" 
               text-center text-orange-500 font-header-font text-5xl"
          >
            {optimize.title}
          </header>
          <br />

          <div className=" flex  justify-center  left-10  center relative">
            <SingupWithGoogle />
          </div>
        </main>
      </section>
    </>
  );
};

export default ReadyToOptimize;
