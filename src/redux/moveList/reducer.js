import { INIT_MOVIE } from './type';
import { SEARCH_MOVIE } from './type';

const initial = [];
let allMovieDB = [];

const initMovieReducer = (state = initial, action) => {
  switch (action.type) {
    case INIT_MOVIE:
      if (action.payload) {
        allMovieDB = action.payload;
      }
      return [...allMovieDB];

    case SEARCH_MOVIE:
      let filterMv = state.filter((v) =>
        v.original_title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return [...filterMv];

    default:
      return state;
  }
};

export default initMovieReducer;
