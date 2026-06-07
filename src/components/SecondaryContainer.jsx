import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  return (
    movies && (
      <div className=" bg-black">
        <div className="-mt-60 relative z-20 pl-15 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Trending"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
