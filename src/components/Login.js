import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BG_URL } from "../utils/constaint";

const Login = () => {
 
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  // const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!isSignForm) {
    
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
         
          const user = userCredential.user;
          console.log(user);
       

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
     

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
        
          const user = userCredential.user;
        //  console.log(user);
      
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />

      
      <div className=" absolute">
        <img
          className="w-screen"
          src={BG_URL}
          alt="img"
        ></img>
      </div>


      <form
        className="absolute w-3/12 overflow-hidden max-w-screen-sm h-auto my-28 mx-auto bg-opacity-80 rounded-lg right-0 left-0 p-8 bg-black text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4   max-w-screen-sm pb-6 justify-center">
          {isSignForm ? "Sign In " : "Sign Up "}
        </h1>

        {!isSignForm && (
          <input
            // ref={name}
            type="text"
            placeholder="Name"
            required
            className="p-4 my-4 w-full  max-w-screen-sm  bg-gray-800"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          required
          className="p-4 my-4 w-full min-h-2  max-w-screen-sm bg-gray-800"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter Password"
          required
          className="p-4 my-4  max-w-screen-sm w-full bg-gray-800"
        />

        <p className="text-red-500">{errorMessage}</p>

        <button
          className="p-4 my-6 font-bold  max-w-screen-sm bg-red-800 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignForm ? "Sign In " : "Sign Up "}
        </button>

        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignForm
            ? " New To Netflix? Sign Up Now "
            : "Already Registered? Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
