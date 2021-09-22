import { INIT_MOVIE } from './type';
import { SEARCH_MOVIE } from './type';

const initial = [];

//* 전체 데이터를 변수로 저장하는 방법이 아닌, 다른 방법을 찾아보자
let allMovieDB = [];

const initMovieReducer = (state = initial, action) => {
  switch (action.type) {
    case INIT_MOVIE:
      if (action.payload) {
        allMovieDB = action.payload;
      }
      return [...allMovieDB];

    case SEARCH_MOVIE:
      let filterMv = allMovieDB.filter((v) =>
        v.original_title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return [...filterMv];

    default:
      return state;
  }
};

export default initMovieReducer;
