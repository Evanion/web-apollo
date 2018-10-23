import * as React from 'react';
import {Switch, Route, RouteComponentProps} from 'react-router-dom';
import RequestReset from './Views/RequestReset';
import ResetWithKey from './Views/ResetWithKey';

const ResetPasswordPage = ({match:{path}}:RouteComponentProps) => (
  <Switch>
    <Route exact path={`${path}`} component={RequestReset}/>
    <Route path={`${path}/:key`} component={ResetWithKey}/>
  </Switch>
);

export default ResetPasswordPage;
