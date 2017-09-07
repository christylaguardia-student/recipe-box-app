import * as actions from './constants';
import api from '../services/auth.api';

export function makeSignup(user) {
  return dispatch => {
    return api
      .signup(user)
      .then(({ token }) => {
        dispatch({ type: actions.GOT_TOKEN, payload: token });
      })
      .then(() => api.getUser())
      .then(user => {
        dispatch({ type: actions.FETCHED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: actions.AUTH_FAILED, payload: error });
      });
  };
}
