import s from "./ReviewRender.module.css";

export default function ReviewRender({ ReviewMovies }) {
  const { results } = ReviewMovies;

  return (
    <ul className={s.ListReviews}>
      {results.length !== 0 ? (
        results.map((result) => {
          const { id, content, author } = result;

          return (
            <li key={id} className={s.ReviewElement}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })
      ) : (
        <h2>We don't have any reviews for this movies</h2>
      )}
    </ul>
  );
}
