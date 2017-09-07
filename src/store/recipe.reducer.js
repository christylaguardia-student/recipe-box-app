import * as actions from './recipe.constants';

export default function recipe(state = [], { type, payload}) {
  switch(type) {
    case actions.RECIPES_GET_ALL:
      return payload;
    
    case actions.RECIPE_ADDED:
      return [...state, payload];
    
    case actions.RECIPE_REMOVED: {
      const index = state.findIndex(x => x === payload);
      if (index === -1) return state;
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }
    
    default:
      return state;
  }
}
 