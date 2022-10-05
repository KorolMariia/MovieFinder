import './Movies.scss';
import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, fetchGenres, fetchLanguages } from '../../store/reducer/moviesSlice';
import { getPages } from '../../util/pages'
import MovieList from '../../components/MovieList/MovieList';
import SearchLine from '../../components/SearchLine/SearchLine';
import FilterMovies from '../../components/FilterMovies/FilterMovies';
import Pagination from '../../components/Pagination/Pagination';
import Header from '../../components/Header/Header';
import Progress from '../../components/Progress/Progress';

export default function Movies() {
  const { movies, genres, languages, limit, totalResults, loading, startPage } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [page, setPage] = useState(startPage);

  const pages = useMemo(() => getPages(limit, totalResults), [totalResults, limit]);

  function changePage(_, value) {
    setPage(value);
  }

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchLanguages());
  }, [dispatch]);

  if (loading) {
    return <Progress />;
  }

  return (
    <>
      <Header />
      <SearchLine movies={movies} page={page}/>
      <div className="moviespage_wrapper">
        <div className="filter_wrapper">
          <FilterMovies genres={genres} languages={languages} page={page}/>
        </div>
        <div className="movies_wrapper">
          <MovieList movies={movies} />
        </div>
      </div>
      <Pagination count={pages} page={page} changePage={changePage} />
    </>
  );
}
