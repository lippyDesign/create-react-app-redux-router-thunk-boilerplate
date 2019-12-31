import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignUpWithEmail from './SignUpWithEmail';
import { signUpWithEmail } from '../actions';

const SignUpWithEmailContainer = (props) => <SignUpWithEmail {...props} />;

SignUpWithEmailContainer.propTypes = {
  signUpWithEmail: PropTypes.func.isRequired,
};

export default connect(null, { signUpWithEmail })(SignUpWithEmailContainer);
