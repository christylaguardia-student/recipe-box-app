import * as actions from './constants';
import { signup as signupAction,

} from './actions';

describe.only('user actions', () => {

  it('signup a user', () => {
    const user = { firstName: 'Charlie', lastName: 'Dog', email: 'woof@bark.com', password: 'ilove2eat' };

    const api = {
      signup(user) { return Promise.resolve(user); }
    };

    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const savedUser = signupAction(api);
    console.log('savedUser', savedUser);
    const dispatchFn = savedUser(user);
    console.log('dispatchFn', dispatchFn);

    dispatchFn(dispatch)
      .then(token => {
        expect(dispatched).toEqual([
          { type: actions.GOT_TOKEN, payload: token },
          { type: actions.FETCHED_USER, payload: user }
        ]);
      });
  });

});
