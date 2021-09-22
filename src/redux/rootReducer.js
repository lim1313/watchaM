import initMovieReducer from './moveList/reducer';
import addLikeReducer from './moveLike/reducer';
import { combineReducers } from 'redux';
import movieTitleReducer from './movieTitle/reducer';

const rootReducer = combineReducers({
  allMovie: initMovieReducer,
  likeMovie: addLikeReducer,
  movieTitle: movieTitleReducer,
});

export default rootReducer;
