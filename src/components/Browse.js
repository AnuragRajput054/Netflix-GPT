import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../utils/CustomHooks.js/useNowPlayingMovies';
import Maincontainer from './Maincontainer';


const Browse = () => {

     
    useNowPlayingMovies();

  return (
    <div>
        <Header />
        <Maincontainer />
    </div>
  )
}

export default Browse;
