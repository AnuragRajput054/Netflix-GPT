import React from 'react'
import { IMG_CDN_URL } from '../utils/constaint';

const MoviesCard = ({posterPath}) => {
  return (
    <div className="w-36 md:w-48 pr-4 rounded-lg">

        <img alt='movies' src= {IMG_CDN_URL + posterPath} 
         className='cursor-pointer hover:border hover:scale-110 hover:z-50'
        />
      
    </div>
  )
}

export default MoviesCard;
