import * as actions from './constants';
import { makeSignup } from './actions';

describe('user actions', () => {

  it('signup a user', () => {
    const api = {
      signup(user) { return Promise.resolve(user); }
    };
    const user = { firstName: 'Charlie', lastName: 'Dog', email: 'woof@bark.com', password: 'ilove2eat' };

    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const savedUser = makeSignup(api);
    const dispatchFn = savedUser(user);

    dispatchFn(dispatch)
      .then(token => {
        expect(dispatched).toEqual([
          { type: actions.GOT_TOKEN, payload: token },
          { type: actions.FETCHED_USER, payload: user }
        ]);
      });
  });

});
