import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import 'sanitize.css/sanitize.css';

import { configureStore } from 'store/configureStore';
import { history } from 'utils/history';
import { App } from 'containers/App';

import 'styles/vendors/ti-icons/css/themify-icons.css';
import 'styles/vendors/base/vendor.bundle.base.css';
import 'styles/css/style.css';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
  MOUNT_NODE,
);
