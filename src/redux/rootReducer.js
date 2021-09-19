import initMovieReducer from './moveList/reducer';
import addLikeReducer from './moveLike/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  allMovie: initMovieReducer,
  likeMovie: addLikeReducer,
});

export default rootReducer;
