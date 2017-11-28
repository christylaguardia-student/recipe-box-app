import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, signin } from './actions';
import Signup from './Signup';
import Login from './Login';

export function Auth({ user, signup, signin, error }) {

  return (
    <div className="centered-container">
      {error ? <Error /> : null}
      {user ? <div>Signed In as {user.email}</div>: <div><Link to="/signup">Signup</Link></div>}
      <Switch>
        <Route path="/signup" component={() => (
          <Signup handleOnSubmit={signup} />
        )} />
        <Route path="/login" component={() => (
          <Login handleOnSubmit={signin} />
        )} />
      </Switch>
    </div>
  );
}

function Error() {
  return (
    <div className="error">
      <h3>Whoops! That didn't work.</h3>
      <h3>Give it another try.</h3>
    </div>
  );
}

export default connect(
  ({ auth }) => ({ 
    error: auth.error,
    user: auth.user
  }),
  dispatch => ({ 
    signup(user) { dispatch(signup(user)); },
    signin(credentials) { dispatch(signin(credentials)); } 
  })
)(Auth);
