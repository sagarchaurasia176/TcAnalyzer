import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GlobalContext } from "../Context/AnalyxerContext";
import SingupWithGoogle from "../Form/SingupWithGoogle";
import ProfileDataDisplay from "../core/data/ProfileDataDisplay";
import {
  AiFillHome,
  AiOutlineMail,
  AiFillInfoCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

const HeaderBar = () => {
  const [show, setShow] = useState(false);
  const { userData } = useContext(GlobalContext);
  return (
    <div>
      <div
        style={{
          backgroundColor: "#0D1520",
        }}
        className="  p-4 pb-4"
      >
        <header className="text-gray-600 body-font flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="flex title-font font-medium items-center text-gray-900 md:mb-0"
            >
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

          <div className="flex max-0 items-center">
            <nav className="hidden lg:flex lg:justify-around sm:hidden md:hidden transition-all transform text-white space-x-12">
              <Link to="/" className=" flex justify-center items-center  gap-2">
                <AiFillHome className="" />
                Home
              </Link>
              <Link
                to="/contact"
                className=" flex justify-center items-center  gap-2"
              >
                <AiOutlineMail className="" />
                Contact
              </Link>
              <Link
                to="/about"
                className=" flex justify-center items-center  gap-2"
              >
                <AiFillInfoCircle className="" />
                About Me
              </Link>
          
            </nav>
          </div>
          <div className=" flex   space-x-4">
            {userData ? <ProfileDataDisplay /> : <SingupWithGoogle />}

            {/*other data  */}
            <button className="lg:hidden md:block sm:block  items-center border-0 py-1 px-3 focus:outline-none hover:animate-pulse  hover:text-black text-yellow-50 rounded-xl text-base mt-4 md:mt-0">
              <FaBarsStaggered />
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HeaderBar;
