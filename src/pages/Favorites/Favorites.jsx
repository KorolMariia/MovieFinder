import React from 'react';
import './Favorites.scss';
import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Header from '../../components/Header/Header';
import MovieFavoriteList from '../../components/MovieFavorite/MovieFavoriteList';

function Favorites() {
  const { favoriteMovies } = useSelector((state) => state);

  return (
    <>
      <Header />
      <h2 className="favorites_title">
        My Favorites
        <FavoriteIcon />
      </h2>
      <MovieFavoriteList favoriteMovies={favoriteMovies} />
    </>
  );
}

export default Favorites;
