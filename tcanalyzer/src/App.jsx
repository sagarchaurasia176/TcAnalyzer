import React from "react";
import "./App.css";
import HeaderBar from "./components/HeaderBar";
import MainContent from "./components/MainContent";
import { Routes, Route } from "react-router-dom";
import AnalyzerModal from "./constant/AnalyzerModal";

// Appp functions
const App = () => {
  return (
    <div>
      <HeaderBar />
      <div>
        <Routes>
          <Route path="/" element={<MainContent />}></Route>
          <Route path="/analyzer" element={<AnalyzerModal />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
