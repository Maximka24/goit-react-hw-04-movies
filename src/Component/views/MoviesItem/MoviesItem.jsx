import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

import * as GetApi from "../../GetApi";

import s from "./MoviesItem.module.css";

export default function MoviesItem() {
  const { moviesId } = useParams();
  const [MoviesItem, setMoviesItem] = useState(null);

  useEffect(() => {
    GetApi.GetFullInformationMoviesApi(moviesId).then((movies) =>
      setMoviesItem(movies)
    );
  }, [moviesId]);

  console.log(MoviesItem);

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
                alt=""
              />
              <div className={s.InformMoviesCard}>
                <h2>{MoviesItem.title}</h2>
                <p>Popularity: {MoviesItem.popularity}%</p>
                <h3>Overview</h3>
                <p>{MoviesItem.overview}</p>
                <h3>Genres</h3>
                <ul>
                  {MoviesItem.genres.map((movies) => (
                    <li className={s.ElListGenres} key={movies.id}>
                      {movies.name}
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
                <Link>Cast</Link>
              </li>
              <li>
                <Link>Reviews</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
