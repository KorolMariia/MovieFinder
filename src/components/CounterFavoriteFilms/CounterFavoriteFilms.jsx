import React from 'react';
import './CounterFavoriteFilms.scss';
import { useSelector } from 'react-redux';

export default function CounterFavoriteFilms() {
  const { favoriteMovies } = useSelector((state) => state);
  return <div className="counter">{favoriteMovies.length}</div>;
}
