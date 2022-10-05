import React from 'react';
import './MovieItem.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { likeMovie } from '../../store/reducer/moviesSlice';

export default function MovieItem({ movie }) {
  const emptyImage = '/backgroundimage/logo.png';
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function navigateToMovieInfo(movieId) {
    navigate(`/movies/${movieId}`, { replace: true });
  }

  return (
    <li
      className="movie"
      key={movie.id}
    >
      <div className="movie_pic">
        <img
          role="presentation"
          onClick={() => navigateToMovieInfo(movie.id)}
          className="movie_pic-img"
          src={movie.poster_path === null ? emptyImage : `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.name}
        />
        <FavoriteIcon
          className="movie_pic-heart"
          onClick={() => {dispatch(likeMovie(movie))}}
        />
      </div>
      <div
        role="presentation"
        className="movie_description"
        onClick={() => navigateToMovieInfo(movie.id)}
      >
        <h2 className="movie_description-title">{movie.title}</h2>
        <h2 className="movie_description-average">
          <StarIcon />
          {' '}
          {movie.vote_average}
          {' '}

        </h2>
      </div>
    </li>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object,
};
