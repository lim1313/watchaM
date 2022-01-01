import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import GlobalStyle from './styled/globalStyled';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled/theme';
import HttpClient from './network/http';
import MovieService from './service/movieService';

const baseURL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const httpClient = new HttpClient(baseURL, apiKey);
const movieService = new MovieService(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App movieService={movieService} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
