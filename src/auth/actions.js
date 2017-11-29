import * as actions from './constants';
import authApi from '../services/auth-api';

export function checkForToken() {
  return dispatch => {
    console.log('checking for token...');
    const token = localStorage.getItem('RECIPE_BOX_TOKEN');

    if (!token) {
      console.log('no token found in localStorage');
      return;
    }
    
    (console.log('got token from localStorage'));
    dispatch ({ type: actions.GOT_TOKEN, payload: token });
  
    return authApi.verify()
      .then(() => authApi.getUser())
      .then(user => {
        console.log('verify successful, fetched user');
        dispatch({ type: actions.FETCHED_USER, payload: user });
      })
      .catch(error => {
        console.log('check for token error');
        dispatch({ type: actions.AUTH_FAILED, payload: error });
      });
  };
}

export function signup(user) {
  return dispatch => {
    authApi.signup(user)
      .then(({ token }) => dispatch({ type: actions.GOT_TOKEN, payload: token }))
      .then(() => authApi.getUser())
      .then(user => {
        console.log('signup successful');
        dispatch({ type: actions.FETCHED_USER, payload: user });
      })
      .catch(error => {
        console.log('signup error');
        dispatch({ type: actions.AUTH_FAILED, payload: error });
      });
  };
}

export function signin(credentials) {
  return dispatch => {
    authApi.signin(credentials)
      .then(({ token }) => dispatch({ type: actions.GOT_TOKEN, payload: token }))
      .then(() => authApi.getUser())
      .then(user => dispatch({ type: actions.FETCHED_USER, payload: user }))
      .catch(error => dispatch({ type: actions.AUTH_FAILED, payload: error }));
  };
}

export function signout() {
  return { type: actions.LOGOUT };
}
