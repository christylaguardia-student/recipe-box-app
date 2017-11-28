import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';
import Routes from './Routes';

class App extends Component {

  componentWillMount() {
    this.props.checkForToken();
  }

  render() {
    return (
      <div>
        <Routes user={this.props.user} />
        <Footer />
      </div>
    );
  }
}

function Footer(props) {
  return (
    <footer>
      <a rel="noopener noreferrer" href="http://www.laguardia.io" target="_blank">Christy La Guardia</a> &copy; 2017
    </footer>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkForToken: () => {
      dispatch(checkForToken());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
