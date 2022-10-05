import React from 'react';
import './MovieFavoriteList.scss';
import PropTypes from 'prop-types';
import MovieFavotiteItem from './MovieFavoriteItem';

export default function MovieFavoriteList({ favoriteMovies }) {
  return (
    <ul className="favorite_movies-list">
      {favoriteMovies.length > 0
        ? favoriteMovies.map((movie) => (<MovieFavotiteItem movie={movie} key={movie.id} />
        )) : <h3 className="nofavorites">You haven&apos;t added any favorite movies</h3>}
    </ul>
  );
}

MovieFavoriteList.propTypes = {
  favoriteMovies: PropTypes.array,
};
