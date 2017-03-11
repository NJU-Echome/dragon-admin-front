import React, { Component } from 'react';
import { connect } from 'react-redux';
import Test from '../component/Test';

class DashboardContainer extends Component {
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
        <Test />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(DashboardContainer);