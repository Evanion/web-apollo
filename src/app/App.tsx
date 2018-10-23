import * as React from 'react';
import { Helmet } from 'react-helmet';
import './App.scss';

import Views from './Views';

const App = () => (
    <React.Fragment>
      <Helmet defaultTitle="Zeus">
        <meta charSet="utf-8" />
      </Helmet>
      <Views/>
    </React.Fragment>
  );

  export default App;
