import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../components/devtools';

import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, routerMiddleware(browserHistory)),
      DevTools.instrument()
    ),
    initialState
  );

  return store;
}
