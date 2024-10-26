import React, { useContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "react-hot-toast";
import ModalDisplayData from "../content/ModalDisplayData";
import { GlobalContext } from "../../Context/AnalyxerContext";

const API_MODAL = import.meta.env.VITE_Modal_API;

const PromBtn = () => {
  const { CodeInput, promptValue, setPromotValue } = useContext(GlobalContext);
  const [loading, setLoad] = useState(false);
  // geminin config
  const genAI = new GoogleGenerativeAI(API_MODAL);
  const Prompts = `Analyze the time complexity of the given code and provide a **short** description in 1 sentences: ${CodeInput}`;

  // PromptHandler
  const ClickToCallModal = async () => {
    try {
      setLoad(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = await Prompts;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      // Split the response into sentences and limit it to the first 2 sentences
      const maxSentences = 2;
      const trimmedText =
        text.split(". ").slice(0, maxSentences).join(". ") + ".";
      setPromotValue(trimmedText);
      setLoad(false);
    } catch (er) {
      console.error(er);
      toast.error("error to analyze your code");
    }
  };

  // api changes
  // Reurn apply there so we get !
  return (
    <>
      {/* this is the analyzer button logic okay  */}
      <ModalDisplayData
        modalData={ClickToCallModal}
        result={promptValue}
        loading={loading}
      />
    </>
  );
};

export default PromBtn;
