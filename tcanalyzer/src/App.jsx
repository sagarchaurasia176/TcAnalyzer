import React from "react";
import "./App.css";
import HeaderBar from "./components/HeaderBar";
import MainContent from "./components/MainContent";
import { Routes, Route } from "react-router-dom";
import AnalyzerModal from "./constant/AnalyzerModal";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import ContactPage from "./others/ContactPage";
import AboutPage from "./others/AboutPage";
// Appp functions
const App = () => {
  return (
    <div className="">
      <Theme>
        <HeaderBar />
        <div className=" bg-slate-900 text-white ">
          <Routes>
            <Route path="/" element={<MainContent />}></Route>
            <Route path="/analyzer" element={<AnalyzerModal />}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
          </Routes>
        </div>
      </Theme>
    </div>
  );
};

export default App;
