import React from "react";
import lang from "../../utils/LanguageConstaints";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
   
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2  grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].placeholder}
          className="p-3 col-span-9 rounded-l-full outline-none text-center  sm:text-base font-bold text-xl"
        />
        <button className="col-span-3 py-2  px-4 bg-red-700 hover:bg-red-800 text-white rounded-r-full font-bold">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
