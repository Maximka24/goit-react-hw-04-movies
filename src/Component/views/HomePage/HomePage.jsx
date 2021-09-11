import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as GetApi from "../../GetApi";

import s from "./HomePage.module.css";

export default function HomePage() {
  const [homePageMovies, setHomePageMovies] = useState();

  useEffect(() => {
    GetApi.GetTrendingWeekMoviesApi().then((movies) =>
      setHomePageMovies(movies)
    );
  }, []);

  return (
    <>
      <h2>Popular movies for the week:</h2>
      <ul className={s.ListTrendingMovies}>
        {homePageMovies &&
          homePageMovies.results.map((movie) => (
            <li key={movie.id}>
              <Link className={s.LinkElementMovies} to={`/movies/${movie.id}`}>
                {movie.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
