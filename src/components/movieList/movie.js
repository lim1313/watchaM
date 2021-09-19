import React, { useState } from 'react';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import addLikeMovie from '../../redux/moveLike/actions';

const MovieLI = styled.li`
  width: 200px;
  margin-bottom: 1rem;

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

      &.filled {
        color: ${({ theme }) => theme.colors.mainPink};
      }

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.mainPink};
      }
    }
  }
`;

const Movie = ({ data, num, like }) => {
  const [likeBtn, setLikeBtn] = useState(like ? true : false);

  const dispatch = useDispatch();

  const heartClick = (e, data) => {
    setLikeBtn(!likeBtn);
    dispatch(addLikeMovie({ ...data }));
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
          className={likeBtn ? 'heart filled' : 'heart'}
          onClick={(e) => heartClick(e, data)}
        >
          {likeBtn ? (
            <FontAwesomeIcon icon={faHeart} />
          ) : (
            <FontAwesomeIcon icon={farHeart} />
          )}
        </span>
      </div>
      <div>{data.original_title}</div>
      <div>{data.release_date}</div>
      <div>VOTE AVERAGE : {data.vote_average}</div>
      {/* <div>{data.overview}</div> */}
    </MovieLI>
  );
};

export default Movie;
