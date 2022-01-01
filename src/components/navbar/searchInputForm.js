import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { searchMovie } from '../../redux/searchMovie/actions';

const InputBox = styled.input`
  outline: none;
  width: ${({ focusInput }) => (focusInput ? '300px' : '38px')};
  height: 38px;
  margin: 0;
  padding: 0;
  padding-left: 38px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 2px;
  transition: width 0.4s ease-in;
`;

const Auto = styled.ul`
  position: absolute;
  top: 42px;
  z-index: 999;
  width: 100%;
  margin: 0;
  padding: 0.4rem 0;
  border-radius: 2px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: white;
`;

const MovieTitle = styled.li`
  list-style: none;
  padding: 0.5rem;

  ${({ topWord }) =>
    topWord &&
    css`
      color: ${({ theme }) => theme.colors.mainPink};
      font-size: 0.9rem;
    `}
  &:not(:first-of-type):hover {
    background-color: rgba(100, 100, 100, 0.1);
    cursor: pointer;
  }
  &.selected {
    background-color: rgba(100, 100, 100, 0.1);
  }
`;

const SearchInputForm = ({ focus, iconClick }) => {
  const [inputValue, setInputValue] = useState();
  const [dropBox, setDropBox] = useState([]);
  const [drop, setdrop] = useState(false);

  const inputRef = useRef(null);
  const hitory = useHistory();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.allMovie);
  const movieName = state.map((v) => v.original_title);

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  }, [focus]);

  const submitMovie = (data, e) => {
    if (e) e.preventDefault();
    dispatch(searchMovie(data));
    // TODO: input으로 경로를 바꾸고 싶다면 history 사용! 하지만 url link가 안된다.
    // hitory.push(`/movieList/searchMovie?input=${data}`);
    hitory.push(`/movieList/searchMovie/${data}`);
    setInputValue('');
    setdrop(false);
  };

  const inputChange = (e) => {
    setInputValue(e.target.value);
    let dropTitle = movieName.filter((title) =>
      title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setdrop(true);
    setDropBox(dropTitle);
  };

  const keyDown = (e) => {
    let idx = dropBox.indexOf(inputValue);
    if (e.key === 'ArrowDown' && idx < dropBox.length - 1) {
      idx++;
      setInputValue(dropBox[idx]);
    } else if (e.key === 'ArrowUp' && idx > 0) {
      idx--;
      setInputValue(dropBox[idx]);
    }
  };

  const inputBoxBlur = (e) => {
    iconClick(inputRef.current.value);
    setdrop(false);
  };

  return (
    <form onSubmit={(e) => submitMovie(inputRef.current.value, e)}>
      <InputBox
        type='text'
        placeholder='영화이름을 검색하세요'
        value={inputValue}
        onChange={inputChange}
        ref={inputRef}
        focusInput={focus}
        onBlur={(e) => inputBoxBlur(e)}
        onKeyDown={keyDown}
      ></InputBox>
      {inputValue && drop ? (
        <Auto>
          <MovieTitle topWord={true}>연관검색어</MovieTitle>
          {dropBox.map((title) => (
            <MovieTitle
              key={uuidv4()}
              className={inputValue === title ? 'selected' : null}
              //! onClick일 경우 onBlur와 ordering issue가 있다. 그래서 onMouseDown으로 처리해준다.
              onMouseDown={(e) => submitMovie(title, e)}
            >
              {title}
            </MovieTitle>
          ))}
        </Auto>
      ) : null}
    </form>
  );
};
export default SearchInputForm;
