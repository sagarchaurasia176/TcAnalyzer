import React, { useContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "react-hot-toast";
import ModalDisplayData from "../content/ModalDisplayData";
import { GlobalContext } from "../../Context/AnalyxerContext";
import axios from "axios";

const API_MODAL = import.meta.env.VITE_Modal_API;
console.log("your api from modal");
console.log(API_MODAL);
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
  const { CodeInput, promptValue, setPromotValue } = useContext(GlobalContext);

  async function ClickToCallModal() {
    try {
      const dismis = toast.loading("Loading...");

      // const model = await genAI.getGenerativeModel({
      //   model: "gemini-1.5-flash",
      // });

      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_MODAL}`,
        {
          body: JSON.stringify({
            prompt: `Analyze the following code for time complexity only not give me the descriptions:\n${CodeInput}`,
          }),
        }
      );

      setPromotValue(res);

      // const result = await model.generateContent(CodeInput);
      // const response = await result.response;
      // const texts = await response.text();
      // setPromotValue([
      //   ...promptValue,
      //   texts
      // ])

      // model.startChat({
      //   generationConfig,

      //   history:[
      //     {
      //       role:"user",
      //       parts:[
      //         {text:CodeInput}
      //       ]
      //     },
      //     {
      //       role:"model",
      //       parts:"Analyze the time complexity of the following code and provide only time complexity no explain"
      //     }

      //   ]
      //   // error
      // });

      // // Call the API with the model and prompt
      // const results = await model.generateContent(history);
      // const text = await results.text();
      // console.log(text);

      // // Ensure you access the response correctly
      // setResult(text); // Properly access the returned data
      toast.dismiss(dismis);
    } catch (er) {
      console.error(er);
      toast.error("Error in analyzing the code! Please try again.");
    }
  }

  // Reurn apply there so we get !
  return (
    <>
      {/* this is the analyzer button logic okay  */}
      <ModalDisplayData modalData={ClickToCallModal} result={promptValue} />
    </>
  );
};

export default PromBtn;
