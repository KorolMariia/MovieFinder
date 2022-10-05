import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getMovies,
  getMovie,
  getGenres,
  getFilterMovies,
  getLanguages,
  getRecommendationsMovies,
  getSearchMovies,
} from '../../api/api';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (page) => {
    const { data: results, data: total_results } = await getMovies(page);
    return results, total_results;
  },
);

export const fetchMovieById = createAsyncThunk(
  'movies/fetchMovie',
  async (id) => {
    const { data } = await getMovie(id);
    return data;
  },
);

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async () => {
  const { data: genres } = await getGenres();
  return genres;
});

export const fetchLanguages = createAsyncThunk(
  'movies/fetchLanguages',
  async () => {
    const data = await getLanguages();
    return data.data;
  },
);

export const fetchFilterMovies = createAsyncThunk(
  'movies/fetchFilterMovies',
  async ({ genresId, language, page }) => {
    const { data: results, data: total_results } = await getFilterMovies(
      genresId,
      language,
      page,
    );
    return results, total_results;
  },
);

export const fetchSearchMovies = createAsyncThunk(
  'movies/fetchSearchMovies',
  async (name, page) => {
    const { data: results, data: total_results } = await getSearchMovies(
      name,
      page,
    );
    return results, total_results;
  },
);

export const fetchRecommendationsMovies = createAsyncThunk(
  'movies/fetchRecommendationsMovies',
  async (id) => {
    const { data: results } = await getRecommendationsMovies(id);
    return results;
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    selectedMovie: {},
    favoriteMovies: [],
    recommendationsMovies: [],
    genres: [],
    languages: [],
    limit: 20,
    startPage: 1,
    totalResults: 0,
    userName: '',
    loaded: false,
    loading: false,
    errors: null,
    loadedMovie: false,
    loadingMovie: false,
    errorsMovie: null,
    loadedFilterMovies: false,
    loadingFilterMovies: false,
    errorsFilterMovies: null,
    loadedSearchMovies: false,
    loadingSearchMovies: false,
    errorsSearchMovies: null,
    loadedRecommendationsMovies: false,
    loadingRecommendationsMovies: false,
    errorsRecommendationsMovies: null,
    loadedLanguages: false,
    loadingLanguages: false,
    errorsLanguages: null,
    loadedGenres: false,
    loadingGenres: false,
    errorsGenres: null,
  },
  reducers: {
    likeMovie: (state, action) => {
      const moviesId = state.favoriteMovies.map((item) => item.id);
      moviesId.includes(action.payload.id)
        ? state.favoriteMovies
        : state.favoriteMovies.push(action.payload);
    },
    deleteMovie: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== action.payload,
      );
    },
    saveUserName: (state, action) => {
      state.userName = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.loaded = false;
        state.errors = null;
        state.movies = [];
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.totalResults = action.payload.total_results;
        state.loaded = true;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.errors = action.error;
        state.loaded = true;
        state.loading = false;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.loadingMovie = true;
        state.loadedMovie = false;
        state.errorsMovie = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.selectedMovie = action.payload;
        state.loadedMovie = true;
        state.loadingMovie = false;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.errorsMovie = action.error;
        state.loadedMovie = true;
        state.loadingMovie = false;
      })
      .addCase(fetchGenres.pending, (state) => {
        state.loadingGenres = true;
        state.loadedGenres = false;
        state.errorsGenres = null;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload.genres;
        state.loadedGenres = true;
        state.loadingGenres = false;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.errorsGenres = action.error;
        state.loadedGenres = true;
        state.loadingGenres = false;
      })
      .addCase(fetchFilterMovies.pending, (state) => {
        state.loadingFilterMovies = true;
        state.loadedFilterMovies = false;
        state.errorsFilterMovies = null;
      })
      .addCase(fetchFilterMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.totalResults = action.payload.total_results;
        state.loadedFilterMovies = true;
        state.loadingFilterMovies = false;
      })
      .addCase(fetchFilterMovies.rejected, (state, action) => {
        state.errorsFilterMovies = action.error;
        state.loadedFilterMovies = true;
        state.loadingFilterMovies = false;
      })
      .addCase(fetchLanguages.pending, (state) => {
        state.loadingLanguages = true;
        state.loadedLanguages = false;
        state.errorsLanguages = null;
      })
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.languages = action.payload;
        state.loadedLanguages = true;
        state.loadingLanguages = false;
      })
      .addCase(fetchLanguages.rejected, (state, action) => {
        state.errorsLanguages = action.error;
        state.loadedLanguages = true;
        state.loadingLanguages = false;
      })
      .addCase(fetchSearchMovies.pending, (state) => {
        state.loadingSearchMovies = true;
        state.loadedSearchMovies = false;
        state.errorsSearchMovies = null;
      })
      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.totalResults = action.payload.total_results;
        state.loadedSearchMovies = true;
        state.loadingSearchMovies = false;
      })
      .addCase(fetchSearchMovies.rejected, (state, action) => {
        state.errorsSearchMovies = action.error;
        state.loadedSearchMovies = true;
        state.loadingSearchMovies = false;
      })
      .addCase(fetchRecommendationsMovies.pending, (state) => {
        state.loadingRecommendationsMovies = true;
        state.loadedRecommendationsMovies = false;
        state.errorsRecommendationsMovies = null;
      })
      .addCase(fetchRecommendationsMovies.fulfilled, (state, action) => {
        state.recommendationsMovies = action.payload.results;
        state.loadedRecommendationsMovies = true;
        state.loadingRecommendationsMovies = false;
      })
      .addCase(fetchRecommendationsMovies.rejected, (state, action) => {
        state.errorsRecommendationsMovies = action.error;
        state.loadedRecommendationsMovies = true;
        state.loadingRecommendationsMovies = false;
      });
  },
});

export const { likeMovie, deleteMovie, saveUserName } = moviesSlice.actions;

export default moviesSlice.reducer;
