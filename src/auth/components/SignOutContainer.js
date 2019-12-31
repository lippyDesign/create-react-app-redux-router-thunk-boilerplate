import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signOut } from '../actions';

const SignOutContainer = (props) => {
  useEffect(() => {
    props.signOut(props.history.push);
  });

  return <div>Signing out...</div>;
};

SignOutContainer.propTypes = {
  signOut: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, { signOut })(SignOutContainer);
