import React from "react";
import { Link } from "react-router-dom";
const FotterPage = () => {
  return (
    <fotter>
      <footer class="bg-white dark:bg-gray-900">
        <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <p class="text-sm text-gray-600 dark:text-gray-300">
            © Copyright 2021. All Rights Reserved.
          </p>  
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
         
        </div>
      </footer>
    </fotter>
  );
};

export default FotterPage;
