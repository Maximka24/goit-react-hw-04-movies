import { lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";

import Navigation from "./Navigation/Navigation";

// import HomePage from "./views/HomePage/HomePage";
// import MoviesPage from "./views/MoviesPage/MoviesPage";
// import MoviesItem from "./views/MoviesItem/MoviesItem";
// import NotFoundViews from "./views/NotFoundViews";

const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage/MoviesPage"));
const MoviesItem = lazy(() => import("./views/MoviesItem/MoviesItem"));
const NotFoundViews = lazy(() => import("./views/NotFoundViews"));

function App() {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:moviesId">
            <MoviesItem />
          </Route>

          <Route>
            <NotFoundViews />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
