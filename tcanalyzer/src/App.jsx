import React from "react";
import "./App.css";
import HeaderBar from "./components/HeaderBar";
import MainContent from "./components/MainContent";
import { Routes, Route } from "react-router-dom";


// Appp functions
const App = () => {

  return (
    <div>
      <HeaderBar />
      <div>
        {/* // Routes , Route navigation applied */}
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
