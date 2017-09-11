import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { signup, signin } from './actions';
import Signup from './Signup';
import Login from './Login';

export default function Auth() {
  return (
    <Switch>
      
      <Route path="/signup" component={() => (
        <Signup handleOnSubmit={signup} />
      )} />

      <Route path="/login" component={() => (
        <Login handleOnSubmit={signin} />
      )} />

    </Switch>
  );
}
