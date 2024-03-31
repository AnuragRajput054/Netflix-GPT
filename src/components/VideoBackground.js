import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/CustomHooks.js/useMovieTailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer({ movieId });

  return (
    <div className="h-full">
      <iframe
        className="w-full  overflow-hidden -z-20  aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; picture-in-picture;
         web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
