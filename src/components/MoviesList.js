
import { Link } from "react-router-dom";
import MoviesCard from "./MoviesCard";


const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex mb-1">
          {movies?.map((movie) => (
            // <MoviesCard key={movie.id} posterPath={movie.poster_path} />

            <Link to={"/movieinfo/" + movie?.id}>
              <MoviesCard key={movie.id} posterPath={movie.poster_path} />
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;