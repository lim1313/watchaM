import { INIT_MOVIE } from './type';

const initial = [];

const initMovieReducer = (state = initial, action) => {
  switch (action.type) {
    case INIT_MOVIE:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default initMovieReducer;
