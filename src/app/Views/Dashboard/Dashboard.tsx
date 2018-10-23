import * as React from 'react';
import {Link} from 'react-router-dom';

const DashboardPage = () => (
  <div>
    <h1>Dashboard page</h1>
    <Link to={'/login'}>Login</Link>
    <Link to={'/reset-password'}>Reset password</Link>
  </div>
);

export default DashboardPage;
