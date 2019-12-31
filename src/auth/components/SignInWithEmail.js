import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { withFormik, Form, Field } from 'formik';

const SignInWithEmail = ({
  touched,
  errors,
}) => (
  <Form>
    <Field name="email" />
    <p>{touched.email && errors.email}</p>
    <Field name="password" type="password" />
    <p>{touched.password && errors.password}</p>
    <button type="submit">Submit</button>
  </Form>
);

SignInWithEmail.propTypes = {
  touched: PropTypes.shape({
    email: PropTypes.bool,
    password: PropTypes.bool,
  }).isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validationSchema: yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password requirements: minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
      .required(),
  }),
  handleSubmit: ({ email, password }, { props }) => {
    props.signInWithEmail({ email, password });
  },
})(SignInWithEmail);
