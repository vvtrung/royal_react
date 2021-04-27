import React from 'react';
import { Helmet } from 'react-helmet-async';

import {
  BrandLogo,
  CheckBox,
  Link,
  H4,
  H6,
  ButtonIcon,
  InputField,
  ButtonForm,
} from '../common';

interface Props {
  submitForm: () => Promise<void>;
}

const LoginComponent = ({ submitForm }: Props) => (
  <>
    <Helmet>
      <title>Login</title>
      <meta name="description" content="Login" />
    </Helmet>
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <BrandLogo />
                <H4>Hello! let's get started</H4>
                <H6 className="font-weight-light">Sign in to continue.</H6>
                <div className="pt-3">
                  <InputField
                    name="username"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                  <InputField
                    name="password"
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                  />
                  <ButtonForm
                    onClick={submitForm}
                    title="SIGN IN"
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                  />
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <CheckBox label="Keep me signed in" />
                    <Link href="/forgot">Forgot password?</Link>
                  </div>
                  <ButtonIcon
                    icon="ti-facebook"
                    title="Connect using facebook"
                  />
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link href="/register">Create</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default React.memo(LoginComponent);
