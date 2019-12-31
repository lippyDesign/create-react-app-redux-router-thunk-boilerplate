import React, { useState } from 'react';

import SignUpWithEmailContainer from './SignUpWithEmailContainer';
import { AUTH_METHOD } from '../constants';

const SignUp = () => {
  const [signInScreen] = useState(AUTH_METHOD.EMAIL_AND_PASSWORD);

  if (signInScreen === AUTH_METHOD.EMAIL_AND_PASSWORD) {
    return <SignUpWithEmailContainer />;
  }

  return null;
};

export default SignUp;
