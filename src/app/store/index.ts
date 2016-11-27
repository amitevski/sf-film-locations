import {IAppState, rootReducer} from './store';
import {ISearch} from './search';

// import { dev } from '../configuration';
// const createLogger = require('redux-logger');
// const persistState = require('redux-localstorage');

export let middleware = [];
export let enhancers = [];

// if (dev) {
//   middleware.push(
//     createLogger({
//     level: 'info',
//     collapsed: true,
//     stateTransformer: deimmutify,
//   }));
// }

export {
  IAppState,
  ISearch,
  rootReducer
};
