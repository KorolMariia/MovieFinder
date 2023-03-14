import { memo, useEffect, useState, useCallback } from 'react';import { useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import {
  fetchSearchMovies,
  fetchMovies,
} from '../../store/reducer/moviesSlice';
import SearchIcon from '@mui/icons-material/Search';
import './SearchLine.scss';

const SearchLine = memo(() => {
  const [searchName, setSearchName] = useState('');
  const dispatch = useDispatch();

  const delayedSearch = useCallback(
    debounce((searchName) => {
      dispatch(fetchSearchMovies(searchName));
    }, 500),
    [searchName],
  );

  useEffect(() => {
    if (searchName) {
      delayedSearch(searchName);
    }
    return delayedSearch.cancel;
  }, [searchName, delayedSearch, dispatch]);

  const onClick = () => {
    dispatch(fetchSearchMovies(searchName));
    setSearchName('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setSearchName('');
      if (event.key === 'Enter') {
        onClick();
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="search-wrap" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchName(e.target.value)}
          value={searchName}
          className="searchTerm"
          placeholder="What movie are you looking for?"
          onKeyDown={handleKeyDown}
          aria-describedby="search-error"
        />
        <button className="searchButton" onClick={onClick}>
          <SearchIcon />
        </button>
      </form>
    </>
  );
});

export default SearchLine;
