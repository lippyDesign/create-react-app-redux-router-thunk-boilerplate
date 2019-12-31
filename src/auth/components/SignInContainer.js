import React from 'react';
import { connect } from 'react-redux';

import SignInWithEmailAndPassword from './SignInWithEmailAndPassword';
import { SIGN_IN_WITH } from '../constants';

const SignInContainer = ({ signInWithScreen }) => {
  console.log('SignInContainer', signInWithScreen);
  if (signInWithScreen === SIGN_IN_WITH.EMAIL_AND_PASSWORD) {
    return <SignInWithEmailAndPassword />;
  }

  return null;
}

const mapStateToProps = state => ({
  signInWithScreen: state.auth.signInWithScreen
});

export default connect(mapStateToProps)(SignInContainer);