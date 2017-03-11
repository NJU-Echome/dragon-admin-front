import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './Header';
import SidebarContainer from './Sidebar';
import FooterContainer from './Footer';

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
      <div className="cp-app">
        <HeaderContainer />
        <SidebarContainer />
        <div className="cp-container">
            {this.props.children}
        </div>
        <FooterContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(AppContainer);