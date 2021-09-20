import React, { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import addLikeMovie from '../../redux/moveLike/actions';

const MovieLI = styled.li`
  width: 200px;
  margin-bottom: 1.5rem;

  & .data {
    margin-bottom: 0.2rem;
  }

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
      transition: color 0.3s;

      &.filled {
        color: ${({ theme }) => theme.colors.mainPink};
        filter: drop-shadow(0px 0px 3px white);
      }

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.mainPink};
        filter: drop-shadow(0px 0px 5px white);
      }
    }
  }
  & .subData {
    color: ${({ theme }) => theme.colors.darkLight};
    font-size: 0.9rem;
  }
`;

const Movie = ({ data, num, likeMV }) => {
  const [likeMv, setLikeMv] = useState(false);

  const dispatch = useDispatch();

  const heartClick = (data) => {
    dispatch(addLikeMovie(data));
    setLikeMv(!likeMv);
  };

  return (
    <MovieLI>
      <div className='imageWrap'>
        <img
          src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
          alt={data.original_title}
        />
        <span className='num'>{num + 1}</span>
        <span
          className={likeMV ? 'heart filled' : 'heart'}
          onClick={() => heartClick(data)}
        >
          {likeMV ? (
            <FontAwesomeIcon icon={faHeart} />
          ) : (
            <FontAwesomeIcon icon={farHeart} />
          )}
        </span>
      </div>
      <div className='data'>{data.original_title}</div>
      <div className='data subData'>{data.release_date}</div>
      <div className='data subData'>
        <span>Average </span>
        <FontAwesomeIcon icon={faStar} />
        <span> {data.vote_average}</span>
      </div>
      {/* <div>{data.overview}</div> */}
    </MovieLI>
  );
};

export default Movie;
