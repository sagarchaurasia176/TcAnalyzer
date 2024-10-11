import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import HeaderBar from "./components/HeaderBar";

const App = () => {
  return (
    <div>
      <HeaderBar/>
      {/* // Routes , Route navigation applied */}

      <Routes>
        <Route path="/" element={<MainContent/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
