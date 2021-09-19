import initMovieReducer from './moveList/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ allMovie: initMovieReducer });

export default rootReducer;
