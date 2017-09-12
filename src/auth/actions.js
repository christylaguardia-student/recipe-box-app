import * as actions from './constants';
import { getStoredToken } from '../services/request';
import authApi from '../services/auth-api';

export function checkForToken() {
  return dispatch => {
    const token = getStoredToken();
    
    if (!token) return;
    dispatch ({ type: actions.GOT_TOKEN, payload: token });
    
    return authApi.verify()
      .then(() => authApi.getUser())
      .then(user => dispatch({ type: actions.FETCHED_USER, payload: user }))
      .catch(error => dispatch({ type: actions.AUTH_FAILED, payload: error }));
  };
}

export function makeSignup(authApi) {
  return function signup(user) {
    return dispatch => {
      return authApi.signup(user)
        .then(({ token }) => dispatch({ type: actions.GOT_TOKEN, payload: token }))
        .then(() => authApi.getUser())
        .then(user => dispatch({ type: actions.FETCHED_USER, payload: user }))
        .catch(error => dispatch({ type: actions.AUTH_FAILED, payload: error }));
    };
  };
}

export const signup = makeSignup(authApi);

export function makeSignin(authApi) {
  return function signin(credentials) {
    return dispatch => {
      return authApi.signin(credentials)
        .then(({ token }) => dispatch({ type: actions.GOT_TOKEN, payload: token }))
        .then(() => authApi.getUser())
        .then(user => dispatch({ type: actions.FETCHED_USER, payload: user }))
        .catch(error => dispatch({ type: actions.AUTH_FAILED, payload: error }));
    };
  };
}

export const signin = makeSignin(authApi);

export function signout() {
  return { type: actions.LOGOUT };
}
