import React, { useEffect } from "react";
import { LOGO, User_LOGO } from "../utils/constaint";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        nevigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribes = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );

        nevigate("/browse");
      } else {
        dispatch(removeUser());
        nevigate("/");
      }
    });

    return () => unsubscribes();

    
  }, [] );

  return (
    <div className="absolute  px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="logo" className="w-44"></img>

      {user && (
        <div className="flex p-2 justify-between">
          <img
            src={User_LOGO}
            alt="User Logo"
            className="w-12 h-12 rounded-md mt-6 mx-6"
          />
          <button
            className="font-bold text-xl  text-white cursor-pointer "
            onClick={handleSignOut}
          >
            Sign Out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
