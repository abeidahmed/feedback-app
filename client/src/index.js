import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/stylesheets/font.css';
import 'assets/stylesheets/main.css';
import 'assets/stylesheets/dracula.css';
import { CurrentUserStore } from 'store/currentUser';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserStore>
      <App />
    </CurrentUserStore>
  </React.StrictMode>,
  document.getElementById('root')
);
