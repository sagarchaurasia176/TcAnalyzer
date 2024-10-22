import React, { createContext, useEffect, useState } from "react";
export const GlobalContext = createContext();
import { auth } from "../firebase/GoogelAuth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
} from "@firebase/auth";
import { json, NavLink, useNavigate } from "react-router-dom";

// function which used in the context
export const GlobalContextFunction = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const [googleErrorMessage, setGoogleErrorMessage] = useState("");
  const [locallyStoredData, setLocalData] = useState("");
  // main state for model purpose 
  const[CodeInput , setCodeInput] = useState('')
  const[promptValue,setPromotValue] = useState([]);




  const navigate = useNavigate();
  // move to analyzer page
  const moveToAnalyzer = () => {
    navigate("/analyzer");
  };
  const auth = getAuth();

  // on-Auth chaged logic
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          name: user.displayName,
          profilePicture: user.photoURL, // This is the user's profile image URL
        };
        setUserData(userData);
        //create this into the localstorage
        moveToAnalyzer();

        //userData stored to the local storage
        localStorage.setItem("userProfile", JSON.stringify(user));
      } else {
        setUserData(null);
      }
    });
  }, [auth]);



  
  // Handle user sign up with google
  const handleGoogleSignUp = async (e) => {
    e.preventDefault();

    // Instantiate a GoogleAuthProvider object
    const provider = new GoogleAuthProvider();
    try {
      // Sign in with a pop-up window
      const result = await signInWithPopup(auth, provider);
      // Pull signed-in user credential.
      const user = result.user;
      // Extract user details including profile image
      const userData = {
        name: user.displayName,
        profilePicture: user.photoURL, // This is the user's profile image URL
      };
      //userData stored to the local storage
      let storaedDataIntoLocalStor = await localStorage.setItem(
        "userProfile",
        localStorage.setItem(userData)
      );
      setLocalData(storaedDataIntoLocalStor);
      console.log("stored data into local");
      // convert into string
      setUserData(userData);
    } catch (err) {
      // Handle errors here.
      const errorMessage = err.message;
      const errorCode = err.code;
      // if (!locallyStoredData) {
      //   alert("you'r data not stored locally");
      // }
      setError(true);

      switch (errorCode) {
        case "auth/operation-not-allowed":
          setGoogleErrorMessage("Email/password accounts are not enabled.");
          break;
        case "auth/operation-not-supported-in-this-environment":
          setGoogleErrorMessage(
            "HTTP protocol is not supported. Please use HTTPS."
          );
          break;
        case "auth/popup-blocked":
          setGoogleErrorMessage(
            "Popup has been blocked by the browser. Please allow popups for this website."
          );
          break;
        case "auth/popup-closed-by-user":
          setGoogleErrorMessage(
            "Popup has been closed by the user before finalizing the operation. Please try again."
          );
          break;
        default:
          setGoogleErrorMessage(errorMessage);
          break;
      }
    }
  };
  // logout
  const moveToLogPage = useNavigate();
  const LoogedOut = () => {
    localStorage.removeItem("userProfile");
    setUserData(null);
    moveToLogPage("/");
  };

  // geminManagement





  // states
  const values = {
    CodeInput,
    setCodeInput,
    promptValue,
    setPromotValue,
    loading,
    setLoad,
    error,
    userData,
    setUserData,
    setError,
    LoogedOut,
    googleErrorMessage,
    handleGoogleSignUp,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
