import React from "react";
import "./App.css";
import HeaderBar from "./components/HeaderBar";
import MainContent from "./components/MainContent";
import { Routes, Route } from "react-router-dom";
import AnalyzerModal from "./constant/AnalyzerModal";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
// Appp functions
const App = () => {
  return (
    <div>
      <Theme>
        <HeaderBar />
        <div>
          <Routes>
            <Route path="/" element={<MainContent />}></Route>
            <Route path="/analyzer" element={<AnalyzerModal />}></Route>
          </Routes>
        </div>
      </Theme>
    </div>
  );
};

export default App;
