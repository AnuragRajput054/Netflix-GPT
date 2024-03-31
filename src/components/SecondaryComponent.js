import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryComponent = () => {
  const movies = useSelector((store)=> store.movies);
  return (
    <div className='bg-black w-full'>
      <div className='-mt-56  relative z-20'>
      <MoviesList title = {"Now Playing"} movies = {movies.nowPlayingMovies} />
      <MoviesList title = {"All Time Favorite "} movies = {movies.AllTimeFav} />
      <MoviesList title = {"Discover "} movies = {movies.Discover} />
      <MoviesList title = {"Popular Movies"} movies = {movies.Popular} />
      <MoviesList title = {"Top Rated"} movies = {movies.TopRated} />
      <MoviesList title = {"Upcoming Movies"} movies = {movies.UpComing} />
   
      </div>
    </div>
  )
}

export default SecondaryComponent
