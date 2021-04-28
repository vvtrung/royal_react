import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';

import LoginComponent from 'components/Login';
import loginValidation from './validation';
import { login } from './actions';

interface Props {
  submitForm: () => Promise<void>;
  [key: string]: any;
}

const LoginContainer = ({ submitForm, ...rest }: Props) => (
  <LoginComponent {...rest} submitForm={submitForm} />
);

export default compose(
  connect(null, { login }),
  withFormik({
    displayName: 'Login Form',
    mapPropsToValues: () => ({ username: '', password: '' }),
    validationSchema: loginValidation,
    handleSubmit: (values, { props, setErrors }) => {
      (props as any).login({
        values,
        meta: { setErrors },
      });
    },
  }),
)(LoginContainer);
