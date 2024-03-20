import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../utils/CustomHooks.js/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import SecondaryComponent from './SecondaryComponent';
import usePopular from '../utils/CustomHooks.js/usePopular';
import useTopRated from '../utils/CustomHooks.js/useTopRated';
import useUpComing from '../utils/CustomHooks.js/useUpComing';


const Browse = () => {

     
    useNowPlayingMovies();
    usePopular();
    useTopRated();
    useUpComing(); 
     
    return (
    <div>
        <Header />
        <Maincontainer />
        <SecondaryComponent/>
    </div>
  )
}

export default Browse;
