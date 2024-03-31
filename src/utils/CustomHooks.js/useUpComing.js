
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../constaint';
import {addUpComing } from '../moviesSlice';


const useUpComing = () => {
       
    const dispatch = useDispatch();
    
  const UpComing = useSelector(
    (store) => store.movies.UpComing
  );

    const getUpComing = async () =>{
     const data = await fetch(
   'https://api.themoviedb.org/3/tv/top_rated',
      API_OPTIONS
     );
 
 
       const json = await data.json();
       console.log(json);
       dispatch(addUpComing(json.results));
    };
 
    useEffect(()=>{
        !UpComing &&  getUpComing();
    }, [] );
};

export default useUpComing;

