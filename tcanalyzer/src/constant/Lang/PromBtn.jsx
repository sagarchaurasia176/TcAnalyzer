import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "react-hot-toast";
import ModalDisplayData from "../content/ModalDisplayData";

const API_MODAL = import.meta.env.VITE_Modal_API;
console.log("API works fine", API_MODAL);

// 👉Not working

const PromBtn = () => {
  const [result, setResult] = useState("");

  async function ClickToCallModal() {
    try {
      const dismis = toast.loading("Loading...");

      // Initialize the Google Generative AI instance
      const genAI = new GoogleGenerativeAI({
        apiKey: import.meta.env.VITE_Modal_API, // Ensure the correct API key usage
      });

      const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const prompt =
        "Analyze the time complexity of the following code and provide only time complexity no explain";

      // Call the API with the model and prompt
      const results = await model.generateContent({
        prompt,
      });

      const text = await results.text();
      // Ensure you access the response correctly
      setResult(text || "error to dispay output"); // Properly access the returned data

      toast.dismiss(dismis);
    } catch (er) {
      console.error(er);
      toast.error("Error in analyzing the code! Please try again.");
    }
  }

  return (
    <>
      <ModalDisplayData modalData={ClickToCallModal} result={result} />
    </>
  );
};

export default PromBtn;
