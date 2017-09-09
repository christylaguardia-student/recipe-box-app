import * as actions from './constants';
import { user } from './reducers';

describe('user reducer', () => {

  it('initial state', () => {
    const newState = user(undefined, { type: undefined });

    expect(newState).toEqual(null);
  });

  it('fetches the user', () => {
    const userState =  { email: 'christy@me.com' };
    const newState  = user({}, { type: actions.FETCH_USER, payload: userState });

    expect(newState).toEqual(userState);
  });

  it('clears user on logout', () => {
    expect(user({}, { type: actions.LOGOUT })).toEqual(null);
  });

  it('clears user on auth failed', () => {
    expect(user({}, { type: actions.AUTH_FAILED })).toEqual(null);
  });

});