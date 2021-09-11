import { useEffect, useState } from "react";

import * as GetApi from "../../GetApi";

import s from "./CastsMovies.module.css";

export default function CastsMovies({ moviesId }) {
  const [CastsMovies, setCastsMovies] = useState(null);

  useEffect(() => {
    GetApi.GetInformationActorMoviesApi(moviesId).then((movies) =>
      setCastsMovies(movies)
    );
  }, [moviesId]);

  return (
    <>
      {CastsMovies && (
        <ul className={s.CastsContainer}>
          {CastsMovies.cast.map((cast) => (
            <li key={cast.id} className={s.CastsItm}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
                height="140px"
                alt={cast.name}
              />
              <h2>{cast.name}</h2>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
