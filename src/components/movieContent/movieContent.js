import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import MovieList from '../movieList/movieList';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  background-color: black;
`;

const InnerContainer = styled.div`
  width: 85%;
  height: 350px;
  margin: 0 auto;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
    ${({ back }) => `url(https://image.tmdb.org/t/p/w500/${back})`};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const DetailWrap = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;

  & img {
    transform: translateY(-50px);
    box-shadow: 0px 0px 0px 3px white;
    border-radius: 1px;
  }

  & li {
    list-style: none;
    margin-bottom: 0.5rem;
  }
`;

const MovieContent = (props) => {
  const { search } = useLocation();
  const { title, bId } = queryString.parse(search);
  const allMovie = useSelector((state) => state.allMovie);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [search]);

  return (
    <>
      {allMovie
        .filter((v) => v.backdrop_path === bId)
        .map((data) => (
          <Wrapper>
            <Container>
              <InnerContainer back={data.backdrop_path}></InnerContainer>
            </Container>
            <DetailWrap>
              <img
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                alt={data.original_title}
              ></img>
              <ul>
                <li>
                  <h2 className='data'>{title}</h2>
                </li>
                <li className='data subData'>{data.release_date}</li>
                <li className='data subData'>
                  <span>Average </span>
                  <FontAwesomeIcon icon={faStar} />
                  <span> {data.vote_average}</span>
                </li>
                <li>{data.overview}</li>
              </ul>
            </DetailWrap>
          </Wrapper>
        ))}
      <MovieList />
    </>
  );
};

export default MovieContent;
