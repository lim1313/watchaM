import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

const MoviePopularList = () => {
  const allMovie = useSelector((state) => state.allMovie);
  const likeMovie = useSelector((state) => state.likeMovie);

  let { like } = useParams();

  return (
    <MovieUL>
      {like ? (
        likeMovie.length === 0 ? (
          <div>찜한 영화가 없습니다</div>
        ) : (
          likeMovie.map((data, i) => (
            <Movie key={uuidv4()} data={data} num={i} likeMV />
          ))
        )
      ) : (
        allMovie.map((data, i) => {
          let likeMV = false;
          likeMovie.forEach((v) =>
            v.backdrop_path === data.backdrop_path ? (likeMV = true) : null
          );
          return <Movie key={uuidv4()} data={data} num={i} likeMV={likeMV} />;
        })
      )}
    </MovieUL>
  );
};

export default MoviePopularList;
