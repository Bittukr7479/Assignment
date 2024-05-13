import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlusJakartaSansWoff from './fonts/plus-jakarta-sans.woff';
import PlusJakartaSansWoff2 from './fonts/plus-jakarta-sans.woff2';

ReactDOM.render(
  <React.StrictMode>
    <style>
      {`
        @font-face {
          font-family: 'Plus Jakarta Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Plus Jakarta Sans'), local('PlusJakartaSans-Regular'),
               url(${PlusJakartaSansWoff2}) format('woff2'),
               url(${PlusJakartaSansWoff}) format('woff');
        }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}
    </style>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
