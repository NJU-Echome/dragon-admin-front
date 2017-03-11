'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../container/App';

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const ensureComponent = function(componentName) {
  return function(location, callback) {
    require.ensure([], (require) => {
      callback(null, require(`../container/${componentName}`).default)
    }, componentName);
  }
}

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute getComponent={dashboard} />
    <Route path='dashboard' getComponent={genComponent(dashboard)} />
  </Route>
);
