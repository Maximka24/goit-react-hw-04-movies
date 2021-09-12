import { useEffect, useState, lazy, Suspense } from "react";
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

import * as GetApi from "../../GetApi";
import s from "./MoviesItem.module.css";

// import CastsMovies from "../CastsMovies/CastsMovies";
// import ReviewMovies from "../ReviewMovies/ReviewMovies";

const CastsMovies = lazy(() => import("../CastsMovies/CastsMovies"));
const ReviewMovies = lazy(() => import("../ReviewMovies/ReviewMovies"));

export default function MoviesItem() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const { moviesId } = useParams();
  const [MoviesItem, setMoviesItem] = useState(null);

  useEffect(() => {
    GetApi.GetFullInformationMoviesApi(moviesId).then((movies) =>
      setMoviesItem(movies)
    );
  }, [moviesId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      {MoviesItem && (
        <>
          <div className={s.ContainerMoviesId}>
            <button type="button" className={s.BtnBack} onClick={onGoBack}>
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

          <Suspense fallback={<h1>Loading...</h1>}>
            <Route path={`${url}/cast`}>
              <CastsMovies moviesId={moviesId} />
            </Route>

            <Route path={`${url}/reviews`}>
              <ReviewMovies moviesId={moviesId} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
