import { ADD_LIKE_MOVIE } from './type';

// export const addLikeAttr = (data) => {
//   return (dispatch) => {
//     dispatch(addLikeMovie(data));
//     dispatch(likeAttr(data));
//   };
// };

const addLikeMovie = (data) => {
  return {
    type: ADD_LIKE_MOVIE,
    payload: data,
  };
};

export default addLikeMovie;
