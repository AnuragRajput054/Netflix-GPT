import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../constaint";
import { addDiscover } from "../moviesSlice";

const useDiscover = () => {
  const dispatch = useDispatch();

  const Discover = useSelector((store) => store.movies.Discover);

  const getDiscover = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=hi&page=1&region=IN&sort_by=popularity.desc&with_origin_country=IN",
      API_OPTIONS
    );

    const json = await data.json();
   
    dispatch(addDiscover(json.results));
  };

  useEffect(() => {
         getDiscover();
  }, []);
};

export default useDiscover;
