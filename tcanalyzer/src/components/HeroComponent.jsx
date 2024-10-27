import React from "react";
import Typewriter from "typewriter-effect";
import { Headers } from '../api/HeaderData';
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <div className="  ">
      <div
        className="flex justify-center pt-12 p-3 bg-slate-900 
          h-[80vh] md:h-[50vh] lg:h-[90vh]"
      >
        <div className="text-center">
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white">
            Analyze Your Code's
          </h1>
          <span className="text-2xl md:text-4xl lg:text-5xl text-orange-600 font-extrabold">
            <Typewriter
              options={{
                strings: [Headers.title], // Pass options here
                autoStart: true,
                loop: true,
                delay: 120,
              }}
            />
          </span>
          <p className="text-lg md:text-xl lg:text-2xl text-orange-400 animate-pulse mt-4">
            {Headers.para}
          </p>
          <br />
          {/* Buttons */}
          <Link to="/analyzer">
            <button
              className="inline-flex p-3 md:p-4 items-center
               bg-slate-700 rounded-2xl border-0 focus:outline-none hover:animate-pulse
             font-bold animate-bounce shadow-lg text-base md:text-lg lg:text-xl mt-4 md:mt-6"
            >
              Visitor Click Here
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
