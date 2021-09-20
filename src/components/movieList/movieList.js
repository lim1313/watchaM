import React from 'react';
import styled from 'styled-components';
import MoviePopularList from './moviePopularList';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const MovieList = () => {
  return (
    <Wrapper>
      <MoviePopularList />
    </Wrapper>
  );
};

export default MovieList;
