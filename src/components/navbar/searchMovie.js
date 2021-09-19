import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  display: relative;
`;

const InputBox = styled.input`
  outline: none;
  width: ${({ focus }) => (focus ? '300px' : '38px')};
  height: 38px;
  margin: 0;
  padding-left: 38px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 2px;
  transition: width 0.4s ease-in;
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
  const [inputValue, setInputValue] = useState();

  const inputRef = useRef(null);

  const iconClick = (e) => {
    setFocus(!focus);
    if (!focus) {
      inputRef.current.focus();
    }
  };

  return (
    <Wrapper>
      <FontIcon icon={faSearch} onClick={iconClick} />
      <InputBox
        type='text'
        placeholder='영화이름을 검색하세요'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
        focus={focus}
        onBlur={iconClick}
      ></InputBox>
    </Wrapper>
  );
};

export default SearchMovie;
