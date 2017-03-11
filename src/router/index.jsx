'use strict';

import React from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

import App from '../container/App';

const Dashboard = function() {
  return function(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('../container/Dashboard').default)
    }, 'Dashboard');
  }
}

export default (
  <Router history={createHashHistory()}>
    <Route path='/' component={App}>
      {/*<IndexRoute handler={Dashboard} />*/}
      {/*<Route path='dashboard' handler={Dashboard} />*/}
    </Route>
  </Router>
);
