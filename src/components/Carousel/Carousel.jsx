import React from 'react';import Carousel from 'better-react-carousel';
import PropTypes from 'prop-types';
import './Carousel.scss';
import RecommendIcon from '@mui/icons-material/Recommend';
import { useNavigate } from 'react-router-dom';

export default function CarouselSlider({ recommendationsMovies }) {
  const emptyImage = '/backgroundimage/logo.webp';
  const navigate = useNavigate();
  function navigateToMovieInfo(movieId) {
    navigate(`/movies/${movieId}`, { replace: true });
  }

  return (
    <>
      <h2 className="movie_recommendations-title">
        Recommendations for you
        <RecommendIcon />
      </h2>
      <div className="carousel">
        {recommendationsMovies.length > 0 ? (
          <Carousel cols={7} rows={1} gap={30} loop>
            {recommendationsMovies.map((movie) => (
              <Carousel.Item key={movie.id}>
                <img
                  role="presentation"
                  alt={movie.title}
                  width="200"
                  height={300}
                  className="img"
                  src={
                    movie.poster_path === null
                      ? emptyImage
                      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  }
                  onClick={() => navigateToMovieInfo(movie.id)}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h1 className="movie_recommendations-nofilms">
            We don&apos;t have enough data to suggest any movies based on this
            film
          </h1>
        )}
      </div>
    </>
  );
}

CarouselSlider.propTypes = {
  recommendationsMovies: PropTypes.array,
};
