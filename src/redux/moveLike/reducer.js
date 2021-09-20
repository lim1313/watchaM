import { ADD_LIKE_MOVIE } from './type';

const initialState = [];

const addLikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE_MOVIE:
      for (let obj of state) {
        if (obj.backdrop_path === action.payload.backdrop_path) {
          let idx = state.indexOf(obj);

          return [...state.slice(0, idx), ...state.slice(idx + 1)];
        }
      }
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};

export default addLikeReducer;
