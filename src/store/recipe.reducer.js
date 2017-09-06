import * as actions from './recipe.constants';

export default function recipe(state = [], {type, payload}) {
  switch(type) {
    case actions.FETCH_RECIPES:
      return payload;
    case actions.SAVED_RECIPE:
      return [...state, payload];
    default:
      return state;
  }
}