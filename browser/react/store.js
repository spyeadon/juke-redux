import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import lyricsReducer from './reducers/lyrics-reducer.js';
import playerReducer from './reducers/player-reducer.js';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

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
  applyMiddleware(logger, thunkMiddleware)
);
const store = createStore(combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
}), enhancer);


export default store;
