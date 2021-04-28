import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootSagas from './sagas';
import rootReducer from './reducers';

export const configureStore = (initialState = {}, history) => {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        {},
      );
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store: any = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(rootSagas);
  return store;
};
