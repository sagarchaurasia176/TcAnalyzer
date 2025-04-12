import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/AnalyxerContext";
import { FaArrowRight } from "react-icons/fa";
const SingupWithGoogle = () => {
  const { handleGoogleSignUp } = useContext(GlobalContext);
  return (
    <div className="signupContainer ">
      <div className="signupContainer__box__google  ">
    
      </div>
    </div>
  );
};

export default SingupWithGoogle;
