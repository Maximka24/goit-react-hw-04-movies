import { useState, useEffect, lazy, Suspense } from "react";

import { useLocation, useHistory } from "react-router-dom";

import { BiSearch } from "react-icons/bi";

import * as GetApi from "../../GetApi";
// import SearchMoviesListOfName from "../../SearchMoviesListOfName/SearchMoviesListOfName";

import s from "./MoviesPage.module.css";

const SearchMoviesListOfName = lazy(() =>
  import("../../SearchMoviesListOfName/SearchMoviesListOfName")
);

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();

  const [nameMovies, setNameMovies] = useState("");
  const [nameMoviesTarget, setNameMoviesTarget] = useState("");
  const [listMoviesSearch, setListMoviesSearch] = useState(null);

  const focusNameMovie =
    new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (nameMoviesTarget === "") {
      setNameMovies(focusNameMovie);
    }

    if (nameMovies === "") {
      return;
    }

    GetApi.GetSearchMoviesApi(nameMovies).then((movies) =>
      setListMoviesSearch(movies)
    );

    history.push({
      ...location,
      search: `query=${nameMovies}`,
    });

    setNameMoviesTarget("");
  }, [nameMovies]);

  const handleNameChangeInput = (event) => {
    setNameMoviesTarget(event.currentTarget.value.toLowerCase());
  };

  const handelSubmitForm = (event) => {
    event.preventDefault();

    if (nameMoviesTarget.trim() === "") {
      return alert("Введите название фильма!");
    }

    setNameMovies(nameMoviesTarget);
  };

  return (
    <div className={s.GetContainer}>
      <div className={s.ContainerForm}>
        <form onSubmit={handelSubmitForm}>
          <input
            type="tel"
            placeholder="Search name movies..."
            name="number"
            value={nameMoviesTarget}
            onChange={handleNameChangeInput}
            pattern="^[a-zA-Zа-яА-Я,1-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Наименование фильма может состоять только из букв!!!"
            // required
          />
          <button className={s.BtnForm} type="submit">
            <BiSearch style={{ width: 24, height: 24 }} />
          </button>
        </form>
      </div>

      <Suspense fallback={<h1>Loading...</h1>}>
        {listMoviesSearch && (
          <SearchMoviesListOfName listMoviesSearch={listMoviesSearch} />
        )}
      </Suspense>
    </div>
  );
}
