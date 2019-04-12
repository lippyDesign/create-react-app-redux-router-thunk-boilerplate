import React from 'react';
import { connect } from 'react-redux';

import { signOut } from '../actions';

class SignOut extends React.Component {
  componentDidMount() {
    this.props.signOut(this.props.history);
  }

  render() {
    return <div>Signing out...</div>
  }
}

export default connect(null, { signOut })(SignOut);