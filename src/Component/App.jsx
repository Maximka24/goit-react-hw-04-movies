import { Switch, Route } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import HomePage from "./views/HomePage/HomePage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import MoviesItem from "./views/MoviesItem/MoviesItem";
import NotFoundViews from "./views/NotFoundViews";

function App() {
  return (
    <div>
      <Navigation />

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
    </div>
  );
}

export default App;
