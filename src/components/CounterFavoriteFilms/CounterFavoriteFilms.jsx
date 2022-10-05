import React, { useState } from 'react';
import './CounterFavoriteFilms.scss';
import { useSelector } from 'react-redux';

export default function CounterFavoriteFilms() {
  const { favoriteMovies } = useSelector((state) => state);
  let [counter, setCounter] = useState(favoriteMovies.length);

  function changeCounter() {
    setCounter(favoriteMovies.length);
  }

  return <div className="counter">{counter}</div>;
}
