import React from 'react';
import { useSelector } from 'react-redux';

const MovieList = (props) => {
  const allMovie = useSelector((state) => state.allMovie);
  console.log(allMovie);
  return (
    <ul>
      {allMovie.map((data) => (
        <li>
          <img
            src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
          ></img>
          <h3>{data.original_title}</h3>
          <div>{data.release_date}</div>
          <div>VOTE AVERAGE : {data.vote_average}</div>
          <div>{data.overview}</div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
