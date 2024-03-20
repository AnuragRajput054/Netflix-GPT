
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../constaint';
import { addTopRated } from '../moviesSlice';


const useTopRated = () => {
       
    const dispatch = useDispatch();
    
  const topRated = useSelector(
    (store) => store.movies.topRated
  );

    const getTopRated = async () =>{
     const data = await fetch(
'https://api.themoviedb.org/3/movie/top_rated',
      API_OPTIONS
     );
 
 
       const json = await data.json();
       console.log(json);
       dispatch(addTopRated(json.results));
    };
 
    useEffect(()=>{
        !topRated &&  getTopRated();
    }, [] );
};

export default useTopRated;

