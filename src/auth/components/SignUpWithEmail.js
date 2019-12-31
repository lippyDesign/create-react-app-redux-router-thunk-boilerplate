import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { withFormik, Form, Field } from 'formik';

const SignUpWithEmail = ({
  touched,
  errors,
}) => (
  <Form>
    <Field name="email" />
    <p>{touched.email && errors.email}</p>
    <Field name="password" type="password" />
    <p>{touched.password && errors.password}</p>
    <Field name="confirmPassword" type="password" />
    <p>{touched.confirmPassword && errors.confirmPassword}</p>
    <button type="submit">Submit</button>
  </Form>
);

SignUpWithEmail.propTypes = {
  touched: PropTypes.shape({
    email: PropTypes.bool,
    password: PropTypes.bool,
    confirmPassword: PropTypes.bool,
  }).isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
  }).isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', confirmPassword: '' }),
  validationSchema: yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password requirements: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
      .required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("'confirm password' is a required field"),
  }),
  handleSubmit: ({ email, password, confirmPassword }, { props }) => {
    props.signUpWithEmail({ email, password, confirmPassword });
  },
})(SignUpWithEmail);
