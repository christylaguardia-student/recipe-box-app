import * as actions from './constants';
import { userReducer } from './reducer';

describe('user reducer', () => {

  it('initial state', () => {
    const newState = userReducer(undefined, { type: undefined });

    expect(newState).toEqual(null);
  });

  it('fetches the user', () => {
    const userState =  { email: 'christy@me.com' };
    const newState  = userReducer({}, { type: actions.FETCH_USER, payload: userState });

    expect(newState).toEqual(userState);
  });

  it('clears user on logout', () => {
    expect(userReducer({}, { type: actions.LOGOUT })).toEqual(null);
  });

  it('clears user on auth failed', () => {
    expect(userReducer({}, { type: actions.AUTH_FAILED })).toEqual(null);
  });

});