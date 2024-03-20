
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../constaint';
import { addPopular } from '../moviesSlice';


const usePopular = () => {
       
    const dispatch = useDispatch();
    
  const Popular = useSelector(
    (store) => store.movies.popular
  );

    const getPopular = async () =>{
     const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
     );
 
 
       const json = await data.json();
       console.log(json);
       dispatch(addPopular(json.results));
    };
 
    useEffect(()=>{
        !Popular &&  getPopular();
    }, [] );
};

export default usePopular;

