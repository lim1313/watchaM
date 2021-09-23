import { SEARCH_MOVIE } from './type';

export const searchMovie = (name) => {
  return {
    type: SEARCH_MOVIE,
    payload: name,
  };
};
