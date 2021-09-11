import { useState } from "react";
import { BiSearch } from "react-icons/bi";

import * as GetApi from "../../GetApi";
import SearchMoviesListOfName from "../../SearchMoviesListOfName/SearchMoviesListOfName";

import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [nameMovies, setNameMovies] = useState("");
  const [listMoviesSearch, setListMoviesSearch] = useState(null);

  const onSubmit = (nameMovies) => {
    GetApi.GetSearchMoviesApi(nameMovies).then((movies) =>
      setListMoviesSearch(movies)
    );
  };

  const handleNameChangeInput = (event) => {
    setNameMovies(event.currentTarget.value.toLowerCase());
  };

  const handelSubmitForm = (event) => {
    event.preventDefault();

    if (nameMovies.trim() === "") {
      return alert("Введите название фильма!");
    }

    onSubmit(nameMovies);
    setNameMovies("");
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

      {listMoviesSearch && (
        <SearchMoviesListOfName listMoviesSearch={listMoviesSearch} />
      )}
    </div>
  );
}
