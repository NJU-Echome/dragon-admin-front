import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './Header';
import SidebarContainer from './Sidebar';
import FooterContainer from './Footer';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';
import routes from '../route/index';

const Dashboard = function() {
  return function(location, callback) {
    require.ensure([], (require) => {
      callback(null, require('../container/Dashboard').default)
    }, 'Dashboard');
  }
}

class AppContainer extends Component {
  constructor (props) {
    super(props);
  }

  state = {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProprs) {
  }

  render() {
    return (
      <Router history={createHashHistory()}>
        <div>
          <HeaderContainer />
          <SidebarContainer />
          {routes}
          <FooterContainer />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(AppContainer);