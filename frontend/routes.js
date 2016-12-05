import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import {
  App,
  Home
} from 'root/containers';

export const Routes = ({ store, history })  => {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  )
}
