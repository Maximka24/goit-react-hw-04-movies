import { useEffect, useState } from "react";

import * as GetApi from "../../GetApi";

import ReviewRender from "./ReviewRender/ReviewRender";

import s from "./ReviewMovies.module.css";

export default function ReviewMovies({ moviesId }) {
  const [ReviewMovies, setReviewMovies] = useState(null);

  useEffect(() => {
    GetApi.GetReviewMoviesApi(moviesId).then((movies) =>
      setReviewMovies(movies)
    );
  }, [moviesId]);

  return (
    <div className={s.ReviewContainer}>
      {ReviewMovies && <ReviewRender ReviewMovies={ReviewMovies} />}
    </div>
  );
}
