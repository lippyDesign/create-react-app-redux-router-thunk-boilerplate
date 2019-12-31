import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { withFormik, Form, Field } from 'formik';

const ChangePassword = ({
  touched,
  errors,
}) => (
  <Form>
    <Field name="oldPassword" type="password" />
    <p>{touched.oldPassword && errors.oldPassword}</p>
    <Field name="newPassword" type="password" />
    <p>{touched.newPassword && errors.newPassword}</p>
    <Field name="confirmNewPassword" type="password" />
    <p>{touched.confirmNewPassword && errors.confirmNewPassword}</p>
    <button type="submit">Submit</button>
  </Form>
);

ChangePassword.propTypes = {
  touched: PropTypes.shape({
    oldPassword: PropTypes.bool,
    newPassword: PropTypes.bool,
    confirmNewPassword: PropTypes.bool,
  }).isRequired,
  errors: PropTypes.shape({
    oldPassword: PropTypes.string,
    newPassword: PropTypes.string,
    confirmNewPassword: PropTypes.string,
  }).isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validationSchema: yup.object().shape({
    oldPassword: yup.string().required('old password is a required field'),
    newPassword: yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password requirements: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
      .required('new password is a required field'),
    confirmNewPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match').required("'confirm password' is a required field"),
  }),
  handleSubmit: ({ newPpassword }, { props }) => {
    props.changePassword(newPpassword);
  },
})(ChangePassword);
