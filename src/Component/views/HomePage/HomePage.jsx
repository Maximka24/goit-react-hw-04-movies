import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import * as GetApi from "../../GetApi";

// import s from './HomePage.module.css';

export default function HomePage() {
  const [homePageMovies, setHomePageMovies] = useState();

  useEffect(() => {
    GetApi.GetTrendingWeekMoviesApi().then((movies) =>
      setHomePageMovies(movies)
    );
  }, []);

  return (
    <ul>
      {homePageMovies &&
        homePageMovies.results.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
    </ul>
  );
}
