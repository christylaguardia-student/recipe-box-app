import * as actions from './constants';
// import { checkForToken, signup, signin } from './actions';
import { makeSignup } from './actions';

describe('user actions', () => {

  const myToken = 'my token';
  const credentials = {
    email: 'woof@bark.com',
    password: 'ilove2eat'
  };
  const user = {
    firstName: 'Charlie',
    lastName: 'Dog',
    email: 'woof@bark.com',
    password: 'ilove2eat'
  };

  const mockApi = {
    signup(user) { return Promise.resolve(myToken); },
    signin(credentials) { return Promise.resolve(myToken); },
    getUser() { return Promise.resolve(user); }
  };

  it('signup a new user', () => {
    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const signedUpUser = makeSignup(mockApi);
    const dispatchFn = signedUpUser(user);

    dispatchFn(dispatch)
      .then(token => {
        expect(dispatched).toEqual([
          { type: actions.GOT_TOKEN, payload: token },
          { type: actions.FETCHED_USER, payload: user }
        ]);
      });

  });

  it('signin an existing user', () => {
    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const signedInUser = makeSignup(mockApi);
    const dispatchFn = signedInUser(credentials);

    dispatchFn(dispatch)
      .then(token => {
        expect(dispatched).toEqual([
          { type: actions.GOT_TOKEN, payload: token },
          { type: actions.FETCHED_USER, payload: user }
        ]);
      });

  });

});
