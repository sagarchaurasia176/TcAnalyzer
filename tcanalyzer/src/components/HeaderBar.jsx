import React from "react";
import { Link } from "react-router-dom";
const HeaderBar = () => {
  return (
    <div>
      <div className="  w-full   bg-slate-800   p-3 ">
        <header className="text-gray-600 body-font flex justify-between items-center">
          <div>
            <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <b className="ml-3 text-xl  text-white font-extrabold items-center">
                Tc-Analyzer
              </b>
            </Link>
          </div>
          <div className="flex  max-0 items-center">
            <nav className="  text-white space-x-12">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About us</Link>
              <Link to="/pricing">Pricing</Link>
            </nav>
          </div>

          <button className="inline-flex  items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:animate-pulse  hover:text-black rounded-xl text-base mt-4 md:mt-0">
            Sing in
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
        </header>
      </div>
    </div>
  );
};

export default HeaderBar;
