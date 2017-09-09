import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { signup } from './actions';
import Signup from './Signup';
import Login from './Login';

export default function Auth() {
  return (
    <Switch>
      <Route path="/auth/signup" component={() => <Signup submit={signup} /> } />
      <Route path="/auth/login" component={Login} />
    </Switch>
  );
}