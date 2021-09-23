import initMovieReducer from './moveList/reducer';
import addLikeReducer from './moveLike/reducer';
import { combineReducers } from 'redux';
import searchReducer from './searchMovie/reducer';

const rootReducer = combineReducers({
  allMovie: initMovieReducer,
  likeMovie: addLikeReducer,
  searchMovie: searchReducer,
});

export default rootReducer;
