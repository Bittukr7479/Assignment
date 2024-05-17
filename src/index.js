import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import PlusJakartaSansWoff from './fonts/plus-jakarta-sans.woff';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
          `,
        }}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
