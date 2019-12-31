import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { signOut } from '../actions';

const SignOutContainer = (props) => {
  useEffect(() => {
    props.signOut(props.history);
  }, []);

  return <div>Signing out...</div>;
}

export default connect(null, { signOut })(SignOutContainer);