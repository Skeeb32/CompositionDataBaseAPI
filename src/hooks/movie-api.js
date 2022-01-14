import { reactive, watch } from '@vue/composition-api';
const API_KEY = 'bfac7c34';

export const useMovieApi = () => {
  const state = reactive({
    search: 'Marvel',
    loading: true,
    movies: []
  });

  watch(() => {
    const MOVIE_API_URL = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`;

    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        state.movies = jsonResponse.Search;
        state.loading = false;
      });
  });

  return state;
};