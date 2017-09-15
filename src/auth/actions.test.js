import * as actions from './constants';
import { signup, signin } from './actions';

describe('user actions', () => {

  const myToken = 'my token';
  const credentials = {
    email: 'woof@bark.com',
    password: 'ilove2eat'
  };
  
  const user = {
    username: 'Charlie The Dog',
    email: 'woof@bark.com',
    password: 'ilove2eat'
  };

  const api = {
    signup(user) { return Promise.resolve(myToken); },
    signin(credentials) { return Promise.resolve(myToken); },
    getUser() { return Promise.resolve(user); }
  };

  it.skip('signup a new user', () => {
    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const signedUpUser = signup(api);
    const dispatchFn = signedUpUser(user);

    dispatchFn(dispatch)
      .then(token => {
        expect(dispatched).toEqual([
          { type: actions.GOT_TOKEN, payload: token },
          { type: actions.FETCHED_USER, payload: user }
        ]);
      });

  });

  it.skip('signin an existing user', () => {
    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const signedInUser = signin(api);
    const dispatchFn = signedInUser(credentials);

    dispatchFn(dispatch)
      .then(res => {
        expect(dispatched).toEqual([
          { type: actions.GOT_TOKEN, payload: res },
          { type: actions.FETCHED_USER, payload: user }
        ]);
      });

  });

});
