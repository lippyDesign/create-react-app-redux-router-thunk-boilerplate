import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignInWithEmail from './SignInWithEmail';
import { signInWithEmail } from '../actions';

const SignInWithEmailContainer = (props) => <SignInWithEmail {...props} />;

SignInWithEmailContainer.propTypes = {
  signInWithEmail: PropTypes.func.isRequired,
};

export default connect(null, { signInWithEmail })(SignInWithEmailContainer);
