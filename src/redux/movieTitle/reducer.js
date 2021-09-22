import { MOVIE_TITLE } from './type';

const initial = [];

const movieTitleReducer = (state = initial, action) => {
  switch (action.type) {
    case MOVIE_TITLE:
      return [...action.payload];
    default:
      return state;
  }
};

export default movieTitleReducer;
