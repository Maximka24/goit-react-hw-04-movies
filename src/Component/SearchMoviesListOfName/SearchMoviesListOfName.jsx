import { Link } from "react-router-dom";

import s from "./SearchMoviesListOfName.module.css";

export default function SearchMoviesListOfName({ listMoviesSearch }) {
  return (
    <ul className={s.ListTrendingMovies}>
      {listMoviesSearch &&
        listMoviesSearch.results.map((movie) => (
          <li key={movie.id}>
            <Link className={s.LinkElementMovies} to={`/movies/${movie.id}`}>
              {movie.original_title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
