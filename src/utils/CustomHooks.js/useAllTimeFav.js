
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../constaint';
import {addAllTimeFav } from '../moviesSlice';


const useAllTimeFav = () => {
       
    const dispatch = useDispatch();
    
  const AllTimeFav = useSelector(
    (store) => store.movies.AllTimeFav
  );

    const getAllTimeFav = async () =>{
     const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&region=IN&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=hi" ,
      API_OPTIONS
     );
 
 
       const json = await data.json();
    
       dispatch(addAllTimeFav(json.results));
    };
 
    useEffect(()=>{
           getAllTimeFav();
    }, [] );
};

export default useAllTimeFav;

