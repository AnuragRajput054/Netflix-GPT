import React from "react";
import { LOGO } from "../utils/constaint";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const nevigate = useNavigate();
  const handleSignOut =  () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
         nevigate("/");
    }).catch((error) => {
      // An error happened.
      nevigate("/error");
    });
  }
  return (
    <div className="absolute  px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="logo" className="w-44"></img>

      <div className="flex p-2 justify-between">
        <img
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg" alt="User Logo"
          className="w-12 h-12 rounded-md mt-6 mx-6"
        />
        <button className="font-bold text-xl  text-white cursor-pointer " onClick={handleSignOut}>Sign Out </button>
      </div>
    </div>
  );
};

export default Header;
