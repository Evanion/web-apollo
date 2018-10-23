import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import RequireAuth from '../Components/RequiresAuth';

const Login = importedComponent(() => import('./Login'));
const ResetPassword = importedComponent(() => import('./ResetPassword'));
const Dashboard = importedComponent(() => import('./Dashboard'));

const Views = (props:{}) => (
    <Switch>
      <RequireAuth>
        <React.Fragment>
          <Route exact path="/" {...Dashboard} />
        </React.Fragment>
      </RequireAuth>
      <Route path="/login" {...Login} />
      <Route path="/reset-password" {...ResetPassword} />
    </Switch>
);

export default Views;
