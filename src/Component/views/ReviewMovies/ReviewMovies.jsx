import { useEffect, useState, lazy, Suspense } from "react";

import * as GetApi from "../../GetApi";
import s from "./ReviewMovies.module.css";

// import ReviewRender from "./ReviewRender/ReviewRender";
const ReviewRender = lazy(() => import("./ReviewRender/ReviewRender"));

export default function ReviewMovies({ moviesId }) {
  const [ReviewMovies, setReviewMovies] = useState(null);

  useEffect(() => {
    GetApi.GetReviewMoviesApi(moviesId).then((movies) =>
      setReviewMovies(movies)
    );
  }, [moviesId]);

  return (
    <div className={s.ReviewContainer}>
      <Suspense fallback={<h1>Loading...</h1>}>
        {ReviewMovies && <ReviewRender ReviewMovies={ReviewMovies} />}
      </Suspense>
    </div>
  );
}
