import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import genAI from "../utils/genAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../store/slices/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const aiResults = await genAI.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents:
        "Suggest 5 movies similar to " +
        searchText.current.value +
        ". Return only movie names separated by commas.",
    });

    const suggestMovies = aiResults.text.split(", ");
    const promiseArray = suggestMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({
        movieName: suggestMovies,
        movieResults: tmdbResults,
      }),
    );
  };

  return (
    <div className="pt-[12%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4  col-span-9 border outline-none bg-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-4 col-span-3 cursor-pointer bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
