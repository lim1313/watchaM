import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MoviePopularList from './moviePopularList';

const MovieList = (props) => {
  const allMovie = useSelector((state) => state.allMovie);

  const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
  `;

  return (
    <Wrapper>
      <MoviePopularList />
    </Wrapper>
  );
};

export default MovieList;
