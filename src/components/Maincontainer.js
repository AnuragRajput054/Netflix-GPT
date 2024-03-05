import React from 'react'

import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';

const Maincontainer = () => {
  
      const movies = useSelector((store) => store.movies?.nowPlayingMovies);

      if(!movies) return ;
      const mainMovies = movies[17];
      console.log(mainMovies);

      const {original_title , overview, id } = mainMovies;

  return (
    <div>
      < VideoTitle title ={original_title} overview = {overview} />
      <VideoBackground movieId = {id} />
    </div>
  )
}

export default Maincontainer
