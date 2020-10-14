import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/stylesheets/font.css';
import 'assets/stylesheets/main.css';
import 'assets/stylesheets/dracula.css';
import { GlobalStyle } from 'global/theme';
import { CurrentUserStore } from 'store/currentUser';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserStore>
      <GlobalStyle />
      <App />
    </CurrentUserStore>
  </React.StrictMode>,
  document.getElementById('root')
);
