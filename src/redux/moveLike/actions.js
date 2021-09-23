import { ADD_LIKE_MOVIE } from './type';

const addLikeMovie = (data) => {
  return {
    type: ADD_LIKE_MOVIE,
    payload: data,
  };
};

export default addLikeMovie;
