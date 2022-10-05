import axios from 'axios';import { ACCESS_KEY } from '../config';

const moviesAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export function getMovies(page) {
  return moviesAxios.get(`/movie/top_rated?api_key=${ACCESS_KEY}&page=${page}`);
}

export function getMovie(id) {
  return moviesAxios.get(`/movie/${id}?api_key=${ACCESS_KEY}`);
}

export function getGenres() {
  return moviesAxios.get(`/genre/movie/list?api_key=${ACCESS_KEY}`);
}

export function getLanguages() {
  return moviesAxios.get(`/configuration/languages?api_key=${ACCESS_KEY}`);
}

export function getFilterMovies(genreId, language, page) {
  return moviesAxios.get(
    `/discover/movie?api_key=${ACCESS_KEY}&with_genres=${genreId}&language=${language}&page=${page}`,
  );
}

export function getSearchMovies(name, page) {
  return moviesAxios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${ACCESS_KEY}&query=${name}&page=${page}`,
  );
}

export function getRecommendationsMovies(id) {
  return moviesAxios.get(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${ACCESS_KEY}`,
  );
}
