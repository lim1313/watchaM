import { INIT_MOVIE } from './type';

export const initAllMovie = (service) => {
  return (dispatch) => {
    service //
      .getMovies() //
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
