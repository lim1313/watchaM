import { SEARCH_MOVIE } from './type';
import { allMovieDB } from '../moveList/reducer';

const initial = [];

const searchReducer = (state = initial, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      let filterMv = allMovieDB.filter((v) =>
        v.original_title.toLowerCase().includes(action.payload.toLowerCase())
      );
      console.log('all', allMovieDB, filterMv);
      return [...filterMv];

    default:
      return state;
  }
};

export default searchReducer;
