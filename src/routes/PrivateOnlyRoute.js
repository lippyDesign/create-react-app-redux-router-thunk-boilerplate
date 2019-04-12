import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// PrivateOnlyRoute is only available if user is logged in
const PrivateOnlyRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return <Route
    {...rest}
    render={props => isAuthenticated ?
      <Component {...props} /> :
      <Redirect to={{ pathname: '/', state: { from: props.location} }} />}
  />
}

const mapStateToProps = ({ authReducer: { user } }) => {
  return { isAuthenticated: !!user };
}

export default connect(mapStateToProps)(PrivateOnlyRoute);