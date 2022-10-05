import React from 'react';import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.scss';
import CounterFavoriteFilms from '../CounterFavoriteFilms/CounterFavoriteFilms';

export default function NavBar() {
  return (
    <ul className={classes.menuBar}>
      <li>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Films
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Favorite Films
        </NavLink>
      </li>
      <CounterFavoriteFilms />
    </ul>
  );
}
