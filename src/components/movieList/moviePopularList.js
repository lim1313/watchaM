import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Movie from './movie';

const MovieUL = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MoviePopularList = ({ like }) => {
  const allMovie = useSelector((state) => state.allMovie);
  const likeMovie = useSelector((state) => state.likeMovie);

  return (
    <MovieUL>
      {like ? (
        likeMovie.length === 0 ? (
          <div>찜한 영화가 없습니다</div>
        ) : (
          likeMovie.map((data, i) => (
            <Movie key={uuidv4()} data={data} num={i} like={like} />
          ))
        )
      ) : (
        allMovie.map((data, i) => <Movie key={uuidv4()} data={data} num={i} />)
      )}
    </MovieUL>
  );
};

export default MoviePopularList;
