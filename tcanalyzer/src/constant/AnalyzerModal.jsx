import React from "react";
import CodeEditors from "./Lang/CodeEditors";
import PromBtn from "./Lang/PromBtn";

const AnalyzerModal = () => {
  return (
    <div className=" bg-slate-800 h-[90vh]  ">
      <CodeEditors />
      <div className=" flex justify-center items-center  mt-2 lg:mt-[12px]  md:mt-[12px] sm:mt-[2px]">
        <PromBtn/>
      </div>
    </div>
  );
};

export default AnalyzerModal;
