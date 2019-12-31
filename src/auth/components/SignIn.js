import React, { useState } from 'react';

import SignInWithEmailContainer from './SignInWithEmailContainer';
import { AUTH_METHOD } from '../constants';

const SignIn = () => {
  const [signInScreen] = useState(AUTH_METHOD.EMAIL_AND_PASSWORD);

  if (signInScreen === AUTH_METHOD.EMAIL_AND_PASSWORD) {
    return <SignInWithEmailContainer />;
  }

  return null;
};

export default SignIn;
