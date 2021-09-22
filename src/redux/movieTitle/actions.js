import { MOVIE_TITLE } from './type';

export const allMovieTitle = (movieKey) => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${movieKey}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(movieTitle(data.results));
      });
  };
};

const movieTitle = (data) => {
  return {
    type: MOVIE_TITLE,
    payload: data,
  };
};
