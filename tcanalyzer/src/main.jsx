import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextFunction } from "./Context/AnalyxerContext.jsx";
// context

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContextFunction>
        <Toaster />
        <App />
      </GlobalContextFunction>
    </BrowserRouter>
  </StrictMode>
);
