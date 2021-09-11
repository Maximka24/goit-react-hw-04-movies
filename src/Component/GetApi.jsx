// import axios from "axios";

const KEY_API = "c46413d5ada5c46eaf911e4d51704b61";
const MOVIES_Get_API = "https://api.themoviedb.org/3";

async function fetchApiMoviesRender(url = "") {
  const res = await fetch(url);
  return res.json();
}

// Запрос фильмов популярных за неделю
export function GetTrendingWeekMoviesApi() {
  return fetchApiMoviesRender(
    `${MOVIES_Get_API}/trending/movie/week?api_key=${KEY_API}`
  );
}

// Запрос фильмов по названию
export function GetSearchMoviesApi(nameMovies) {
  return fetchApiMoviesRender(
    `${MOVIES_Get_API}/search/movie?api_key=${KEY_API}&language=en-US&query=${nameMovies}&page=1&include_adult=false`
  );
}

// Запрос информации фильма по его id
export function GetFullInformationMoviesApi(movieId) {
  return fetchApiMoviesRender(
    `${MOVIES_Get_API}/movie/${movieId}?api_key=${KEY_API}&language=en-US`
  );
}

// Запрос инф. о актерском составе
export function GetInformationActorMoviesApi(movieId) {
  return fetchApiMoviesRender(
    `${MOVIES_Get_API}/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`
  );
}

// запрос обзоров о фильме
export function GetReviewMoviesApi(movieId) {
  return fetchApiMoviesRender(
    `${MOVIES_Get_API}/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US&page=1`
  );
}
