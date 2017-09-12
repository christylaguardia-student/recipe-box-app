import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, signin } from './actions';
import Signup from './Signup';
import Login from './Login';

export function Auth({ user, signup, signin, error }) {

  return (
    <Switch>
      {error ? <Error /> : null}

      <Route path="/signup" component={() => (
        <Signup handleOnSubmit={signup} />
      )} />

      <Route path="/login" component={() => (
        <Login handleOnSubmit={signin} />
      )} />

    </Switch>
  );
}

function Error() {
  return (
    <div className="error">
      <h3>Authorization failed.</h3>
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
