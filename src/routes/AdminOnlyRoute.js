import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// AdminOnlyRoute is only available if user is logged in and is admin
const AdminOnlyRoute = ({ component: Component, isAdmin, ...rest }) => {
  return <Route
    {...rest}
    render={props => isAdmin ?
      <Component {...props} /> :
      <Redirect to={{ pathname: '/', state: { from: props.location} }} />}
  />
}

const mapStateToProps = ({ authReducer: { user } }) => {
  return { isAdmin: user && user.role === 'admin' };
}

export default connect(mapStateToProps)(AdminOnlyRoute);
