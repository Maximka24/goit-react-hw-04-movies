import { useState, lazy, Suspense } from "react";

import { useLocation, useHistory } from "react-router-dom";

import { BiSearch } from "react-icons/bi";

// import * as GetApi from "../../GetApi";
// import SearchMoviesListOfName from "../../SearchMoviesListOfName/SearchMoviesListOfName";

import s from "./MoviesPage.module.css";

const SearchMoviesListOfName = lazy(() =>
  import("../../SearchMoviesListOfName/SearchMoviesListOfName")
);

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();

  const [nameMovies, setNameMovies] = useState("");
  const [nameMoviesSubmit, setNameMoviesSubmit] = useState("");

  const handleNameChangeInput = (event) => {
    setNameMovies(event.currentTarget.value.toLowerCase());
  };

  const handelSubmitForm = (event) => {
    event.preventDefault();

    if (nameMovies.trim() === "") {
      return alert("Введите название фильма!");
    }

    setNameMoviesSubmit(nameMovies);
    setNameMovies("");

    history.push({
      ...location,
      search: `query=${nameMovies}`,
    });
  };

  return (
    <div className={s.GetContainer}>
      <div className={s.ContainerForm}>
        <form onSubmit={handelSubmitForm}>
          <input
            type="tel"
            placeholder="Search name movies..."
            name="number"
            value={nameMovies}
            onChange={handleNameChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Наименование изображения может состоять только из букв!!!"
            // required
          />
          <button className={s.BtnForm} type="submit">
            <BiSearch style={{ width: 24, height: 24 }} />
          </button>
        </form>
      </div>

      <Suspense fallback={<h1>Loading...</h1>}>
        {nameMoviesSubmit !== "" && (
          <SearchMoviesListOfName nameMoviesSubmit={nameMoviesSubmit} />
        )}
      </Suspense>
    </div>
  );
}
