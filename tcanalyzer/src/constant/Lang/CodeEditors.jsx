import React, { useContext, useRef } from "react";
import Editor from "@monaco-editor/react";
import { GlobalContext } from "../../Context/AnalyxerContext";

const CodeEditors = () => {
  // context api
  const { CodeInput, setCodeInput} = useContext(GlobalContext);
  console.log("code input");
  console.log(CodeInput);
  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  // for taking the code input
  const ChangeHandler = (e) => {
    e.preventDefault();
    setCodeInput(e.target.value);
  };


  // VITE_Modal_API
  return (
    <div> 
      <div className=" container w-[100%] lg:w-[65%] md:w-[75%] sm:w-[30%]  rounded-lg m-auto bg-slate-800">
        <Editor 
          height="75vh"
          name="CodeInput"
          value={CodeInput}
          onChange={ChangeHandler}
          className=" mt-1  rounded-md  bg-slate-500"
          defaultValue="//Paste your code and analyze time complexity ❤️"
          onMount={handleEditorDidMount}
        />
      </div>
      {/* buttons with the logics */}
    </div>
  );
};

export default CodeEditors;
