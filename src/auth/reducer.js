import * as actions from './constants';

// import { combineReducers } from 'redux';
// export default (state = {}, action) => combineReducers({ user })(state, action);

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