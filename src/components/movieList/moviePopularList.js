import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieUL = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MovieLI = styled.li`
  width: 200px;

  & .imageWrap {
    position: relative;

    & .num {
      position: absolute;
      top: 0;
      left: 0;
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1rem;
      background-color: rgba(0, 0, 0, 0.7);
      margin: 0.5rem;
      text-align: center;
      line-height: 1.5rem;
      border-radius: 4px;
      color: white;
    }

    & img {
      border-radius: 3px;
      width: 200px;
      height: 300px;
    }

    & .heart {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.7);
      margin: 0.5rem;
      transition: color 0.2s;

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.mainPink};
      }
    }
  }

  & h3 {
    margin: 0;
  }
`;

const MoviePopularList = (props) => {
  const allMovie = useSelector((state) => state.allMovie);
  const dispatch = useDispatch();

  const heartClick = (e) => {
    console.log(e);
  };

  return (
    <MovieUL>
      {allMovie.map((data, i) => (
        <MovieLI key={uuidv4()}>
          <div className='imageWrap'>
            <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} />
            <span className='num'>{i + 1}</span>
            <span className='heart' onClick={heartClick}>
              <FontAwesomeIcon icon={farHeart} />
            </span>
          </div>
          <div>{data.original_title}</div>
          <div>{data.release_date}</div>
          <div>VOTE AVERAGE : {data.vote_average}</div>
          {/* <div>{data.overview}</div> */}
        </MovieLI>
      ))}
    </MovieUL>
  );
};

export default MoviePopularList;
