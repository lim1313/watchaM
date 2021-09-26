import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Movie from './movie';

const MovieUL = styled.ul`
  list-style: none;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  padding: 0;

  ${({ title }) =>
    title &&
    css`
      padding: 1rem;
      border: 1.5px solid rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    `}

  i {
    width: ${({ title }) => (title ? '150px' : '200px')};
    margin: 0 1rem;
  }
`;

const MoviePopularList = () => {
  const allMovie = useSelector((state) => state.allMovie);
  const likeMovie = useSelector((state) => state.likeMovie);
  const searchMovie = useSelector((state) => state.searchMovie);

  const { id } = useParams();
  const { pathname } = useLocation();

  return (
    <MovieUL title={pathname === '/movieList/contents'}>
      {pathname === '/movieList/like' ? (
        likeMovie.length === 0 ? (
          <div>찜한 영화가 없습니다</div>
        ) : (
          likeMovie.map((data, i) => (
            <Movie key={uuidv4()} data={data} num={i} likeMV />
          ))
        )
      ) : id ? (
        searchMovie.length === 0 ? (
          allMovie
            .filter((data, i) => data.original_title.includes(id))
            .map((data, i) => {
              let likeMV = false;
              likeMovie.forEach((v) =>
                v.backdrop_path === data.backdrop_path ? (likeMV = true) : null
              );
              return (
                <Movie key={uuidv4()} data={data} num={i} likeMV={likeMV} />
              );
            })
        ) : (
          searchMovie.map((data, i) => {
            let likeMV = false;
            likeMovie.forEach((v) =>
              v.backdrop_path === data.backdrop_path ? (likeMV = true) : null
            );
            return <Movie key={uuidv4()} data={data} num={i} likeMV={likeMV} />;
          })
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
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </MovieUL>
  );
};

export default MoviePopularList;
