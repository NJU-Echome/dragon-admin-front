'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import store from './store';
import { routes } from './router';

const rootElem = document.body.appendChild(document.createElement('div'));

(function run() {
  render(
    <Provider store={ store }>
      <Router history={ browserHistory } routes={ routes }></Router>
    </Provider>,
    rootElem
  )
})();