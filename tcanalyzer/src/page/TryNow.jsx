import React from "react";
import { tryItKnow } from "../api/HeaderData";
import complexity from "../assets/complexity.webm";

const TryNow = () => {
  return (
    <>
      <section className=" h-[100%]   bg-slate-900 mt-[20%] p-12">
        {/* Title */}
        <header className="text-center text-white font-header-font text-3xl md:text-4xl lg:text-5xl">
          {tryItKnow.title}
        </header>

        <br />

        <div className="flex flex-col sm:flex-row justify-around flex-wrap rounded-lg m-auto">
          {/* First data block */}
          <div className="text-center sm:text-left">
            <header className="text-white font-header-font text-2xl md:text-3xl lg:text-4xl">
              {tryItKnow.heading}
            </header>
            <article className="text-yellow-500 capitalize mt-2">
              {tryItKnow.para}
            </article>
          </div>
        </div>

        <br />

        {/* Video Section */}
        <div className=" bg-slate-800">
          <div className="flex items-center justify-center  ">
            <div className="w-[100%] md:w-[80%]  lg:w-[70%] m-auto">
              <video className="" autoPlay muted loop src={complexity} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TryNow;
