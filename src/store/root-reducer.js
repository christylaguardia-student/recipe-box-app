import { combineReducers } from 'redux';
import { user } from '../auth/reducers';
import { recipes } from '../recipe/reducers';

export default combineReducers({
  recipes,
  user
});
