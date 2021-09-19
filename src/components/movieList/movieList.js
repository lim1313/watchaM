import React from 'react';
import styled from 'styled-components';
import MoviePopularList from './moviePopularList';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const MovieList = ({ like }) => {
  return (
    <Wrapper>
      <MoviePopularList like={like} />
    </Wrapper>
  );
};

export default MovieList;
