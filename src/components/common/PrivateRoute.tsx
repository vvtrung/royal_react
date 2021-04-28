import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticate } from 'services/LocalStorage';

interface Props {
  component: React.ElementType;
  [key: string]: any;
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticate() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
