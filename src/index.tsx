import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'App';
import { ScrollToTop } from 'components/ScrollToTop';
import { RootProvider } from 'providers';
import { GlobalStyle } from 'styles';

ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </RootProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
