import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import { recipes } from '../recipe/reducers';

export default combineReducers({
  auth,
  recipes
});
