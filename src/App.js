/* eslint-disable react-hooks/exhaustive-deps*/

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import MovieList from './components/movieList/movieList';
import Navbar from './components/navbar/navbar';
import { initAllMovie } from './redux/moveList/actions';

import Emptypage from './components/emptypage';
import MovieContent from './components/movieContent/movieContent';

const Wrapper = styled.div`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function App({ movieService }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAllMovie(movieService));
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
          <Route exact path='/movieList/searchMovie/:id'>
            <MovieList />
          </Route>
          <Route exact path='/movieList/:value'>
            <MovieContent />
          </Route>
          <Route exact path='/movieList/:value'>
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
