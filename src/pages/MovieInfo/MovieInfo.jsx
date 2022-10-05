import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieById, fetchRecommendationsMovies } from '../../store/reducer/moviesSlice';
import MovieCard from '../../components/MovieCard/MovieCard';
import Header from '../../components/Header/Header';
import Progress from '../../components/Progress/Progress';
import Error from '../../components/Error/Error';
import ButtonBack from '../../components/Buttons/ButtonBack/ButtonBack';
import Carousel from '../../components/Carousel/Carousel';

function MovieInfo() {
  const { id } = useParams();
  const {
    selectedMovie: movie,
    recommendationsMovies,
    loadingMovie,
    loadedMovie,
    errorsMovie
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendationsMovies(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (Object.keys(movie)) {
      dispatch(fetchMovieById(id));
    }
  }, [dispatch, id]);

  if (loadingMovie) {
    return <Progress />;
  }

  if (loadedMovie && errorsMovie) {
    return <Error errors={errorsMovie.message} />;
  }

  return (
    <>
      <Header />
      <MovieCard movie={movie} />
      <Carousel recommendationsMovies={recommendationsMovies} />
      <ButtonBack />
    </>
  );
}

export default MovieInfo;
