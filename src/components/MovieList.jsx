import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  6;
  return (
    <div className="">
      <h1 className="text-2xl py-5 text-white">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar ">
        <div className="flex gap-2 ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
