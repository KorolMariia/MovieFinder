import './SearchLine.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { fetchSearchMovies, fetchMovies } from '../../store/reducer/moviesSlice';

export default function SearchLine() {
  const dispatch = useDispatch();

  return (
    <div className="wrap search">
      <input
        type="text"
        onChange={(e) => {e.target.value.length > 0 ? dispatch(fetchSearchMovies(e.target.value)) : dispatch(fetchMovies())}}
        className="searchTerm"
        placeholder="What movie are you looking for?"
      />
      <button type="button" className="searchButton">
        <SearchIcon />
      </button>
    </div>
  );
}
