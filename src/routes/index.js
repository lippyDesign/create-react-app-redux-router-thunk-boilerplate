import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateOnlyRoute from './PrivateOnlyRoute';
import AdminOnlyRoute from './AdminOnlyRoute';
import PublicOnlyRoute from './PublicOnlyRoute';

import Landing from '../landing/components/Landing';
import SignInContainer from '../auth/components/SignInContainer';
import SignUpContainer from '../auth/components/SignUpContainer';
import SignOutContainer from '../auth/components/SignOutContainer';
import Dashboard from '../dashboard/components/Dashboard';
import AdminDashboard from '../admin-dashboard/components/AdminDashboard';
import NotFound from '../not-found/components/NotFound';

export default () => <div>
  <Switch>
    <PublicOnlyRoute exact path="/signin" component={SignInContainer} />
    <PublicOnlyRoute exact path="/signup" component={SignUpContainer} />
    <AdminOnlyRoute exact path="/admin-dashboard" component={AdminDashboard} />
    <PrivateOnlyRoute exact path="/signout" component={SignOutContainer} />
    <PrivateOnlyRoute exact path="/dashboard" component={Dashboard} />
    <Route exact path="/" component={Landing} />
    <Route component={NotFound} />
  </Switch>
</div>;