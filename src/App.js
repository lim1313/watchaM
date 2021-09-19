import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import MovieLike from './components/movieLike';
import MovieList from './components/movieList/movieList';
import Navbar from './components/navbar/navbar';
import { initAllMovie } from './redux/moveList/actions';

import dotenv from 'dotenv';
dotenv.config();

const Wrapper = styled.div`
  width: 100%;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAllMovie(process.env.REACT_APP_API_KEY));
  }, []);

  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <MovieList />
          </Route>
          <Route exact path='/movieList'>
            <MovieList />
          </Route>
          <Route exact path='/movieLike'>
            <MovieLike />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
