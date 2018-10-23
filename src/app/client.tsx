import { rehydrateMarks } from 'react-imported-component';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './imported';

import App from './App';

const element = document.getElementById('app');
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// In production, we want to hydrate instead of render
// because of the server-rendering
if (process.env.NODE_ENV === 'production') {
  // rehydrate the bundle marks
  rehydrateMarks().then(() => {
    ReactDOM.hydrate(app, element);
  });
} else {
  ReactDOM.render(app, element);
}

// Hot reload is that easy with Parcel
//@ts-ignore
if (module && module.hot) {
  //@ts-ignore
  module.hot.accept();
}
