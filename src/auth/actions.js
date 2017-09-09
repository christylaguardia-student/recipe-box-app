import * as actions from './constants';
import authApi from '../services/auth.api';


// export function signup(user) {
//   return dispatch => {
//     authApi.signup(user)
//       .then(({ token }) => {
//         dispatch({ type: actions.GOT_TOKEN, payload: token });
//       })
//       .then(() => authApi.getUser())
//       .then(user => {
//         dispatch({ type: actions.FETCHED_USER, payload: user });
//       })
//       .catch(error => {
//         dispatch({ type: actions.AUTH_FAILED, payload: error });
//       });
//   };
// }

export function signup(user) {
  console.log('signup action');
  return dispatch => {
    authApi.signup(user)
      .then(({ token }) => {
        dispatch({ type: actions.GOT_TOKEN, payload: token });
      })
      .then(() => authApi.getUser())
      .then(user => {
        dispatch({ type: actions.FETCHED_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: actions.AUTH_FAILED, payload: error });
      });
  };
}
