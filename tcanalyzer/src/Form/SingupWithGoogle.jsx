import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/AnalyxerContext";
import { FaArrowRight } from "react-icons/fa";
const SingupWithGoogle = () => {
  const { handleGoogleSignUp } = useContext(GlobalContext);
  return (
    <div className="signupContainer">
      <div className="signupContainer__box__google ">
        <button
          className=" flex items-center gap-2 bg-red-300 mr-12 p-2 rounded-md text-black  "
          onClick={handleGoogleSignUp}
        >
          Sign Up
          <span className=" text-black-400">
            {/* <img src={googleLogo} alt="Google Logo" /> */}
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SingupWithGoogle;
