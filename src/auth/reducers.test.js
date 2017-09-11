import * as actions from './constants';
import { user, token, error } from './reducers';

describe('user reducer', () => {

  it('initial state', () => {
    const state = user(undefined, { type: undefined });
    expect(state).toEqual(null);
  });

  it('FETCHED_USER fetches the user', () => {
    const userState =  { email: 'test@user.com' };
    const newState  = user({}, { type: actions.FETCHED_USER, payload: userState });
    expect(newState).toEqual(userState);
  });

  it('LOGOUT clears the user', () => {
    expect(user({}, { type: actions.LOGOUT })).toEqual(null);
  });

  it('AUTH_FAILED clears the user', () => {
    expect(user({}, { type: actions.AUTH_FAILED })).toEqual(null);
  });

});

describe('token reducer', () => {

  it('GOT_TOKEN adds the token', () => {
    const tokenState = { token: 'my token' };
    const newState = token({}, { type: actions.GOT_TOKEN, payload: tokenState });
    expect(newState).toEqual(tokenState);
  });

  it('LOGOUT clears the user', () => {
    expect(token({}, { type: actions.LOGOUT })).toEqual(null);
  });

  it('AUTH_FAILED clears the user', () => {
    expect(token({}, { type: actions.AUTH_FAILED })).toEqual(null);
  });
  
});

describe('error reducer', () => {

  it('AUTH_FAILED adds an error', () => {
    const errorState = { thereWasAnError: true };
    const newState = error({}, { type: actions.AUTH_FAILED, payload: errorState });
    expect(newState).toEqual(errorState);
  });

  it('GOT_TOKEN clears the error', () => {
    expect(error({}, { type: actions.GOT_TOKEN })).toEqual(null);
  });

  it('LOGOUT clears the error', () => {
    expect(error({}, { type: actions.LOGOUT })).toEqual(null);
  });

  it('FETCHED_USER clears the error', () => {
    expect(error({}, { type: actions.FETCHED_USER })).toEqual(null);
  });

});
