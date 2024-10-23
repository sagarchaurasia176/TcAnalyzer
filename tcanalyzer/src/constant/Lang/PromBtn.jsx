import React, { useContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "react-hot-toast";
import ModalDisplayData from "../content/ModalDisplayData";
import { GlobalContext } from "../../Context/AnalyxerContext";

const API_MODAL = import.meta.env.VITE_Modal_API;

// genertation config of gemini ai

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};
// 👉Not working

const PromBtn = () => {
  const [result, setResult] = useState("");
  const { CodeInput } = useContext(GlobalContext);

  async function ClickToCallModal() {
    try {
      const dismis = toast.loading("Loading...");
      // Initialize the Google Generative AI instance
      const genAI = new GoogleGenerativeAI({
        apiKey: API_MODAL, // Ensure the correct API key usage
      });

      const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
      const prompt =
        "Analyze the time complexity of the following code and provide only time complexity no explain";

      model.startChat({
        generationConfig,

        history:[
          {
            parts : [ ]
          }
        ]
        // error 
      });

      // Call the API with the model and prompt
      const results = await model.generateContent(history);
      const text = await results.text();
      console.log(text);

      // Ensure you access the response correctly
      setResult(text); // Properly access the returned data
      toast.dismiss(dismis);
    } catch (er) {
      console.error(er);
      toast.error("Error in analyzing the code! Please try again.");
    }
  }

  // Reurn apply there so we get !
  return (
    <>
      <ModalDisplayData modalData={ClickToCallModal} result={result} />
    </>
  );
};

export default PromBtn;
