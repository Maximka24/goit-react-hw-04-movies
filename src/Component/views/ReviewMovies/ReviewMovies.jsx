import { useEffect, useState } from "react";

import * as GetApi from "../../GetApi";

import s from "./ReviewMovies.module.css";

export default function ReviewMovies({ moviesId }) {
  const [ReviewMovies, setReviewMovies] = useState(null);

  useEffect(() => {
    GetApi.GetReviewMoviesApi(moviesId).then((movies) =>
      setReviewMovies(movies)
    );
  }, []);

  // console.log(ReviewMovies.results)

  return (
    <>
      {ReviewMovies &&
        (ReviewMovies.results === [] ? (
          <p>We dont have any reviews for this movies</p>
        ) : (
          <ul className={s.ReviewContainer}>
            {ReviewMovies.results.map((movie) => (
              <li key={movie.id} className={s.ReviewElement}>
                <h2>{movie.author}</h2>
                <p>{movie.content}</p>
              </li>
            ))}
          </ul>
        ))}
    </>
  );
}
