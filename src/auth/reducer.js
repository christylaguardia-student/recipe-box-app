import * as actions from './constants';

export function userReducer(state = null, { type, payload }) {
  switch(type) {

    case actions.FETCH_USER:
      return payload;
    
    case actions.LOGOUT:
      return null;
    
    case actions.AUTH_FAILED:
      return null;

    default:
      return state;
  }
}
