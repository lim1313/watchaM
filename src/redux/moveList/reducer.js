import { INIT_MOVIE } from './type';

const initial = [];

export let allMovieDB = [];

const initMovieReducer = (state = initial, action) => {
  switch (action.type) {
    case INIT_MOVIE:
      allMovieDB = [...action.payload];
      return [...action.payload];
    default:
      return state;
  }
};

export default initMovieReducer;
