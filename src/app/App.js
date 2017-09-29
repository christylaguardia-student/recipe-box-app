import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';
import Routes from './Routes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: true
    };
  }

  componentDidMount() {
    this.props
      .checkForToken();
      // .then(() => this.setState({ ready: true }));
  }

  render() {
    return (
      <div>
        {this.state.ready && <Routes />}
        <Footer />
      </div>
    );
  }
}

function Footer(props) {
  return (
    <footer>
      Christy La Guardia &copy; 2017
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
