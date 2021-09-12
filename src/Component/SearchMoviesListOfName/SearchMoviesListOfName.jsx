import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import * as GetApi from "../GetApi";

import s from "./SearchMoviesListOfName.module.css";

export default function SearchMoviesListOfName({ nameMoviesSubmit }) {
  const location = useLocation();

  const [listMoviesSearch, setListMoviesSearch] = useState(null);

  useEffect(() => {
    GetApi.GetSearchMoviesApi(nameMoviesSubmit).then((movies) =>
      setListMoviesSearch(movies)
    );
  }, []);

  return (
    <ul className={s.ListTrendingMovies}>
      {listMoviesSearch !== null &&
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
