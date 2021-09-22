import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import MovieList from './components/movieList/movieList';
import Navbar from './components/navbar/navbar';
import { initAllMovie } from './redux/moveList/actions';

import dotenv from 'dotenv';
import { allMovieTitle } from './redux/movieTitle/actions';
import Emptypage from './components/emptypage';
import MovieContent from './components/movieContent/movieContent';
dotenv.config();

const Wrapper = styled.div`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAllMovie(process.env.REACT_APP_API_KEY));
    dispatch(allMovieTitle(process.env.REACT_APP_API_KEY));
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
          <Route exact path='/movieList/contents'>
            <MovieContent />
          </Route>
          <Route exact path='/movieList/:like'>
            <MovieList />
          </Route>
          <Route>
            <Emptypage />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
