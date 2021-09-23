import { INIT_MOVIE } from './type';

export const initAllMovie = (movieKey) => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movieKey}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(allMovie(data.results));
      });
  };
};

export const allMovie = (data) => {
  return {
    type: INIT_MOVIE,
    payload: data,
  };
};
