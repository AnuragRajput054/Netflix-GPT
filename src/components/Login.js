import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignForm , setIsSignForm] = useState(true);
    
     const toggleSignInForm = () => { 
            setIsSignForm(!isSignForm);
     }
     

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"
          alt="img"
        ></img>
      </div>
      <form className="absolute w-3/12 my-28 mx-auto bg-opacity-80 rounded-lg right-0 left-0 p-8 bg-black text-white">

        <h1 className="font-bold text-3xl py-4  pb-6 justify-center">{isSignForm ? "Sign In " : "Sign Up "}</h1>


      {!isSignForm && 
            <input
            type="text"
            placeholder="Name"
            required
            className="p-4 my-4 w-full  bg-gray-800"
          />
      }

        <input
          type="text"
          placeholder="Email Address"
          required
          className="p-4 my-4 w-full  bg-gray-800"
        />
       
        <input
          type="password"
          placeholder="Enter Password"
          required
          className="p-4 my-4 w-full bg-gray-800"
        />
      
        <button className="p-4 my-6 font-bold bg-red-800 w-full rounded-lg">{isSignForm ? "Sign In " : "Sign Up "}</button>

        <p className="p-4 cursor-pointer" onClick={toggleSignInForm} >
        {isSignForm ? " New To Netflix? Sign Up Now " : "Already Registered? Sign In Now "}
           </p>
      </form>
    </div>
  );
};

export default Login;
