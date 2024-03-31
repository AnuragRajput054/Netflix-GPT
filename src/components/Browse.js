import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/CustomHooks.js/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryComponent from "./SecondaryComponent";
import usePopular from "../utils/CustomHooks.js/usePopular";
import useTopRated from "../utils/CustomHooks.js/useTopRated";
import useUpComing from "../utils/CustomHooks.js/useUpComing";
import useAllTimeFav from "../utils/CustomHooks.js/useAllTimeFav";
import useDiscover from "../utils/CustomHooks.js/useDiscover";
import { useSelector } from "react-redux";
import GptSearch from "./GPT Section/GptSearch";


const Browse = () => {
  useNowPlayingMovies();
  useAllTimeFav();
  useDiscover();
  usePopular();
  useTopRated();
  useUpComing();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch/>
      ) : (
        <>
          <Maincontainer />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;
