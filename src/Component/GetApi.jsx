// import axios from "axios";

// const KEY_API = 'c46413d5ada5c46eaf911e4d51704b61';
// const MOVIES_Get_API = 'https://api.themoviedb.org/3';

// async function fetchApiMoviesRender (url='') {
//   const res = await axios.get(url);
//   return res.data.hits;
// }

// export default function GetTrendingWeekMoviesApi() {
//   return fetchApiMoviesRender(`${MOVIES_Get_API}/trending/movie/week?api_key=${KEY_API}`);
// }

// export default function GetSearchMoviesApi() {
//   return fetchApiMoviesRender(`${MOVIES_Get_API}/3/movie/{movie_id}?api_key=${KEY_API}&language=en-US`);
// }

// export default function GetFullInformationMoviesApi(movieId) {
//   return fetchApiMoviesRender(`${MOVIES_Get_API}/movie/${movieId}?api_key=${KEY_API}&language=en-US`);
// }

// export default function GetInformationActorMoviesApi(movieId) {
//   return fetchApiMoviesRender(`${MOVIES_Get_API}/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`);
// }

// export default function GetReviewMoviesApi(movieId) {
//   return fetchApiMoviesRender(`${MOVIES_Get_API}/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US&page=1`);
// }

// //  const renderMainGetRequest = () => {
// //     setStatus("load");

// //     const option = { nameImg, pageImg };

// //     Api.fetchApi(option)
// //       .then((img) => setImgList(img))
// //       .catch((error) => setError(error))
// //       .finally(() => setStatus("resolved"));
// //   };