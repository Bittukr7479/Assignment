import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import PlusJakartaSansWoff from './fonts/plus-jakarta-sans.woff';
// import PlusJakartaSansWoff2 from './fonts/plus-jakarta-sans.woff2';

// Create a root using createRoot
const root = createRoot(document.getElementById('root'));

// Render your app inside the root
root.render(
  <React.StrictMode>
    <style>
      {`
        @font-face {
          font-family: 'Plus Jakarta Sans';
          font-style: normal;
          font-weight: 400;
          src: local('Plus Jakarta Sans'), local('PlusJakartaSans-Regular'),
               url(${PlusJakartaSansWoff}) format('woff');
        }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          margin: 0px;
        }
      `}
    </style>
    <App />
  </React.StrictMode>
);
