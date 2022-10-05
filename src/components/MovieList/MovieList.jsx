import React from 'react';
import './MovieList.scss';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

function MovieList({ movies }) {
  
  return (
    <ul className="movies_list">
      {movies.length > 0
        ? movies.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />))
        : <h1 className="movies_list-nofilms">There are no movies that matched your query.</h1>}
    </ul>
  );
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array,
};
