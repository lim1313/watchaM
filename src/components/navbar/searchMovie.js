import React, { useState } from 'react';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchInputForm from './searchInputForm';

const Wrapper = styled.div`
  position: relative;
`;

const FontIcon = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.2);
  margin: 8px;

  &:hover {
    cursor: pointer;
  }
`;

const SearchMovie = (props) => {
  const [focus, setFocus] = useState(false);

  const iconClick = (value) => {
    if (!focus) {
      setFocus(!focus);
    } else if (value.length === 0) {
      setFocus(!focus);
    }
  };

  return (
    <Wrapper>
      <FontIcon icon={faSearch} onClick={iconClick} />
      <SearchInputForm focus={focus} iconClick={iconClick} />
    </Wrapper>
  );
};

export default SearchMovie;
