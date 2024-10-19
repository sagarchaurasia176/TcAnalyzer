import React, { useRef } from "react";
import Editor from '@monaco-editor/react';


const CodeEditors = () => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  // VITE_Modal_API
  return (
    <div>
      <div className=" container w-[100%] lg:w-[65%] md:w-[75%] sm:w-[30%]  rounded-lg m-auto bg-slate-800">
        <Editor
          height="75vh"
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
