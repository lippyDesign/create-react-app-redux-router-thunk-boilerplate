
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ChangePassword from './ChangePassword';
import { changePassword } from '../actions';

const ChangePasswordContainer = (props) => <ChangePassword {...props} />;

ChangePassword.propTypes = {
  changePassword: PropTypes.func.isRequired,
};

export default connect(null, { changePassword })(ChangePasswordContainer);
