import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/stylesheets/font.css';
import 'assets/stylesheets/main.css';
import 'assets/stylesheets/dracula.css';
import { GlobalStyle } from 'global/theme';
import { CurrentUserStore } from 'store/currentUser';
import { NotificationStore } from 'store/notification';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserStore>
      <NotificationStore>
        <GlobalStyle />
        <App />
      </NotificationStore>
    </CurrentUserStore>
  </React.StrictMode>,
  document.getElementById('root')
);
