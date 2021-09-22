import React from 'react';
import styled from 'styled-components';
import MoviePopularList from './moviePopularList';

const Wrapper = styled.div`
  width: ${({ theme }) => theme.wrapper.width};
  margin: ${({ theme }) => theme.wrapper.margin};
`;

const MovieList = () => {
  return (
    <Wrapper>
      <MoviePopularList />
    </Wrapper>
  );
};

export default MovieList;
