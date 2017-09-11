import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';
import Routes from './Routes';

class App extends Component {

  render() {
    return <Routes />;
  }
}

// TODO: footer

export default connect(
  state => ({ user: state.user }),
  dispatch => ({ 
    checkForToken() { return dispatch(checkForToken()); }  
  })
)(App);
