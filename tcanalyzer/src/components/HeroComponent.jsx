import React from "react";
import Typewriter from "typewriter-effect";
import {Headers} from '../api/HeaderData'
const HeroComponent = () => {
  return (
    <div className=" m-auto ">
      <div
        className=" flex h-[49vw] w-full items-center justify-center
        p-3 md:bg-gradient-to-r md:from-slate-700 md:via-slate-800
          to-slate-300 bg-slate"
      >
        <div className=" text-center  items-center ">
          <h1 className=" font-extrabold text-5xl text-white">
            Analyze Your Code's
          </h1>
          <span className=" text-4xl p-3  font-extrabold  text-yellow-400 ">
            <Typewriter
              options={{
                strings: [Headers.title], // Pass options here
                autoStart: true,
                loop: true,
                delay: 120,
              }}
            />
          </span>
          <p className=" text-orange-100 font-extrabold animate-pulse">
            {Headers.para}
          </p>
          <br />
          {/* Buttons */}
          <button
            className=" inline-flex p-4  items-center
           bg-green-100 rounded-2xl border-0 focus:outline-none hover:animate-pulse 
            hover:text-black font-bold  shadow-lg text-base mt-4 md:mt-0"
          >
            Try it now
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
