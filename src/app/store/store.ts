import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';
// import * as movie from './movie';
import * as search from './search';


export interface IAppState {
  // movie?: movie.IMovie;
  search?: search.ISearch;
};

export const rootReducer = combineReducers<IAppState>({
  // movie: movie.movieReducer,
  search: search.searchReducer,
  router: routerReducer,
});

// export function deimmutify(store) {
//   return {
//     counter: store.counter.toJS(),
//     session: store.session.toJS(),
//     router: store.router,
//   };
// }

// export function reimmutify(plain) {
//   return {
//     counter: counter.CounterFactory(plain.counter),
//     session: session.SessionFactory(plain.session),
//     router: plain.router,
//   };
// }
