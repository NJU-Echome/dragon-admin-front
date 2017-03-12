'use strict';

import React from 'react';
import { Router, Route } from 'react-router';

import Bundle from '../component/Bundle';
import loadDashboard from 'bundle-loader?lazy!../container/Dashboard';
import loadServiceCategory from 'bundle-loader?lazy!../container/ServiceCategory';

const Dashboard = () => (
  <Bundle load={loadDashboard}>
    {(Comp) => Comp ? <Comp/> : <span>Loading...</span>}
  </Bundle>
)
const ServiceCategory = () => (
  <Bundle load={loadServiceCategory}>
    {(Comp) => Comp ? <Comp/> : <span>Loading...</span>}
  </Bundle>
)

export default (
  <article>
    <Route exact path='/' component={Dashboard} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/service_category' component={ServiceCategory} />
  </article>
);
