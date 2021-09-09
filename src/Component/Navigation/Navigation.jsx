import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={s.Navigation}>
      <NavLink
        exact
        activeClassName={s.ActiveNavLink}
        className={s.NavLink}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName={s.ActiveNavLink}
        className={s.NavLink}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}
