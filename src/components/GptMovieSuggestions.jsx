import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return;
  return (
    <div className="p-4 m-4 bg-black/50 text-white">
      {movieName.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
