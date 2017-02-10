import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/root-reducers.js';
import createLogger from 'redux-logger';

const logger = createLogger();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(
//   reducer, /* preloadedState, */
//   composeEnhancers(applyMiddleware(logger))
// );

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);


export default store;
