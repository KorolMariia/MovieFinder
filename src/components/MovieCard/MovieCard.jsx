import './MovieCard.scss';
import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import InfoIcon from '@mui/icons-material/Info';
import { likeMovie } from '../../store/reducer/moviesSlice';

export default function MovieCard({ movie }) {
  const emptyImage = '/backgroundimage/logo.png';
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="movie_info-title">
        {' '}
        About Film
        {' '}
        <InfoIcon />
      </h2>
      <div className="movie_info" key={movie.id}>
        <div className="movie_info_pic">
          <img
            className="movie_info_pic-img"
            src={movie.poster_path === null ? emptyImage : `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.name}
          />
        </div>
        <div className="movie_info_description">
          <h2 className="movie_info_description-title">{movie.title}</h2>
          <h3 className="movie_info_description-release">
            Release date:
            {' '}
            {movie.release_date}
          </h3>
          <h4 className="movie_info_description-original_title">
            Original title:
            {' '}
            {movie.original_title}
          </h4>
          <h4 className="movie_info_description-title-overview">Overview</h4>
          <p className="movie_info_description-overview">
            {movie.overview}
            {' '}
          </p>
          <h2 className="movie_info_description-average">
            <StarIcon className="star" />
            {movie.vote_average}
            <FavoriteIcon className="remove" onClick={() => dispatch(likeMovie(movie))} />
            Add to favorite
          </h2>
        </div>
      </div>

    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
};
