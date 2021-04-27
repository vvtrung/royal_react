import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { LoginContainer } from '../Login/Loadable';
import { NotFoundPage } from '../NotFoundPage/Loadable';

export const App = () => (
  <BrowserRouter>
    <Helmet titleTemplate="%s - Royal React" defaultTitle="Royal React">
      <meta name="description" content="Royal React application" />
    </Helmet>

    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <Route component={NotFoundPage} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);
