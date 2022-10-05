import React from 'react';
import './MovieFavoriteItem.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import HeartBrokenSharpIcon from '@mui/icons-material/HeartBrokenSharp';
import { deleteMovie } from '../../store/reducer/moviesSlice';

export default function MovieFavoriteItem({ movie }) {
  const emptyImage = '/backgroundimage/logo.png';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function navigateToMovieInfo(movieId) {
    navigate(`/movies/${movieId}`, { replace: true });
  }

  return (
    <li
      className="favorite_movie"
    >
      <div className="favorite_movie_pic">
        <img
          role="presentation"
          onClick={() => navigateToMovieInfo(movie.id)}
          className="favorite_movie_pic-img"
          src={movie.poster_path === null ? emptyImage : `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.name}
        />
      </div>
      <div className="favorite_movie_description">
        <h2 
          className="favorite_movie_description-title" 
          role="presentation" 
          onClick={() => navigateToMovieInfo(movie.id)}
        >
          {movie.title}
        </h2>
        <h3 className="favorite_movie_description-release">
          Release date:
          {' '}
          {movie.release_date}
        </h3>
        <p className="favorite_movie_description-overview" role="presentation" onClick={() => navigateToMovieInfo(movie.id)}>
          {movie.overview}
          {' '}
        </p>
        <h2 className="favorite_movie_description-average">
          <StarIcon className="star" />
          {movie.vote_average}
          <HeartBrokenSharpIcon className="remove" onClick={() => dispatch(deleteMovie(movie.id))} />
          Remove film
        </h2>
      </div>
    </li>
  );
}

MovieFavoriteItem.propTypes = {
  movie: PropTypes.object,
};
