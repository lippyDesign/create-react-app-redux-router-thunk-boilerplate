import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateOnlyRoute from './PrivateOnlyRoute';
import AdminOnlyRoute from './AdminOnlyRoute';
import PublicOnlyRoute from './PublicOnlyRoute';

import Landing from '../landing/components/Landing';
import SignIn from '../auth/components/SignIn';
import SignUp from '../auth/components/SignUp';
import SignOutContainer from '../auth/components/SignOutContainer';
import Dashboard from '../dashboard/components/Dashboard';
import AdminDashboard from '../admin-dashboard/components/AdminDashboard';
import NotFound from '../not-found/components/NotFound';
import Settings from '../settings/components/Settings';

export default () => (
  <div>
    <Switch>
      <PublicOnlyRoute exact path="/signin" component={SignIn} />
      <PublicOnlyRoute exact path="/signup" component={SignUp} />
      <AdminOnlyRoute exact path="/admin-dashboard" component={AdminDashboard} />
      <PrivateOnlyRoute exact path="/signout" component={SignOutContainer} />
      <PrivateOnlyRoute exact path="/dashboard" component={Dashboard} />
      <PrivateOnlyRoute exact path="/settings" component={Settings} />
      <Route exact path="/" component={Landing} />
      <Route component={NotFound} />
    </Switch>
  </div>
);
