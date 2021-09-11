import { useEffect, useState } from "react";
import { useParams, NavLink, useRouteMatch, Route } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

import * as GetApi from "../../GetApi";

import CastsMovies from "../CastsMovies/CastsMovies";

import s from "./MoviesItem.module.css";

export default function MoviesItem() {
  const { url } = useRouteMatch();
  const { moviesId } = useParams();
  const [MoviesItem, setMoviesItem] = useState(null);

  useEffect(() => {
    GetApi.GetFullInformationMoviesApi(moviesId).then((movies) =>
      setMoviesItem(movies)
    );
  }, [moviesId]);

  return (
    <>
      {MoviesItem && (
        <>
          <div className={s.ContainerMoviesId}>
            <button className={s.BtnBack}>
              <BiArrowBack />
              Go back!
            </button>

            <div className={s.InformMovies}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${MoviesItem.poster_path}`}
                alt={MoviesItem.title}
              />
              <div className={s.InformMoviesCard}>
                <h2>{MoviesItem.title}</h2>
                <p>Popularity: {MoviesItem.popularity}%</p>
                <h3>Overview</h3>
                <p>{MoviesItem.overview}</p>
                <h3>Genres</h3>
                <ul>
                  {MoviesItem.genres.map((movie) => (
                    <li className={s.ElListGenres} key={movie.id}>
                      {movie.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={s.AdditionalInfo}>
            <h3>Additional information</h3>
            <ul>
              <li>
                <NavLink to={`${url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>

          <Route path={`${url}/cast`}>
            <CastsMovies moviesId={moviesId} />
          </Route>
          {/* <Route path={`${url}/reviews`}></Route> */}
        </>
      )}
    </>
  );
}
