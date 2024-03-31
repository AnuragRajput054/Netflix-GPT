import React, { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGE, User_LOGO } from "../utils/constaint";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/LanguageConstaints";

const Header = () => {
  const dispatch = useDispatch();

  const nevigate = useNavigate();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        nevigate("/error");
      });
  };

  function handleGptSearch() {
    dispatch(toggleGptSearchView());
  }

  function handleLanguageChange(e) {
        dispatch(changeLanguage(e.target.value));
  }

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
  }, []);

  return (
    <div className="absolute  px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="logo" className="w-44"></img>

      {user && (
        <div className="flex p-2 justify-between">


         <select className="p-2 m-2 bg-gray-900 font-serif rounded-lg text-white" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGE.map((lang) => (
            <option key={lang.identifier} value={lang.identifier} name = {lang.name} >
              {lang.name}
            </option>
          ))}
         </select>

          <button
            className="py-2 my-2  mx-4 bg-orange-700 hover:underline font-bold  text-white rounded-lg px-4"
            onClick={handleGptSearch}
          >
            {showGptSearch ? lang[langKey].home : "GPT Search"}
          </button>

          <img
            src={User_LOGO}
            alt="User Logo"
            className="w-12 h-12 rounded-md  mx-6"
          />

          <button
            onClick={handleSignOut}
            className="group flex items-center justify-evenly rounded-lg md:justify-start md:w-11 md:h-11 bg-red-600 md:rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg md:hover:w-32 w-[112px] h-9 hover:rounded-lg active:translate-x-1 active:translate-y-1"
          >
            <div className="flex items-center justify-center md:w-full md:transition-all md:duration-300 md:group-hover:justify-start md:group-hover:px-3">
              <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>
            <div className="md:absolute md:right-5 md:transform md:translate-x-full md:opacity-0 text-white text-lg md:font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
             {lang[langKey].logout}
            </div>
            {/* Sign Out{" "} */}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
