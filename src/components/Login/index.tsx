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
  ButtonLink,
} from '../common';

const LoginComponent = () => (
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
                <form className="pt-3">
                  <InputField
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                  <InputField
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                  />
                  <ButtonLink
                    link="/"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default LoginComponent;
