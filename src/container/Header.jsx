import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
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
      <header>
        
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(HeaderContainer);