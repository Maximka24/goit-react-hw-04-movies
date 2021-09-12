import { Link, useLocation } from "react-router-dom";

import s from "./SearchMoviesListOfName.module.css";

export default function SearchMoviesListOfName({ listMoviesSearch }) {
  const location = useLocation();

  return (
    <ul className={s.ListTrendingMovies}>
      {listMoviesSearch &&
        listMoviesSearch.results.map((movie) => (
          <li key={movie.id}>
            <Link
              className={s.LinkElementMovies}
              to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: location,
                },
              }}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
