import * as actions from './constants';

export function user(state = {}, { type, payload }) {
  switch(type) {
    case actions.FETCHED_USER:
      return payload;
    
    case actions.LOGOUT:
      return null;
    
    case actions.AUTH_FAILED:
      return null;

    default:
      return state;
  }
}

// TODO: token, error