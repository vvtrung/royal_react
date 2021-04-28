import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, Router } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { history } from 'utils/history';
import MainLayout from 'components/Layout/MainLayout';

import { LoginContainer } from '../Login/Loadable';
import { NotFoundPage } from '../NotFoundPage/Loadable';
import { UserListContainer } from '../UserList/Loadable';

export const App = () => (
  <Router history={history}>
    <Helmet titleTemplate="%s - Royal React" defaultTitle="Royal React">
      <meta name="description" content="Royal React application" />
    </Helmet>

    <Switch>
      <Route exact path="/login" component={LoginContainer} />
      <Route>
        <MainLayout>
          <Route path="/users" component={UserListContainer} />
        </MainLayout>
      </Route>
      <Route component={NotFoundPage} />
    </Switch>
    <GlobalStyle />
  </Router>
);
