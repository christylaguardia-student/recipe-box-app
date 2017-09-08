import * as actions from './recipe.constants';

export default function recipes(state = { selected: { name: 'my recipe' }, all: [] }, { type, payload }) {
  switch(type) {
    case actions.RECIPES_GET_ALL:
      return {
        all: payload,
        selected: state.selected
      };
    
    case actions.RECIPE_GET:
      return {
        all: [...state.all],
        selected: Object.assign({}, payload)
      };
    
    case actions.RECIPE_ADDED:
      return {
        all: [...state, payload],
        selected: state.selected
      };
    
    case actions.RECIPE_REMOVED: {
      const index = state.findIndex(x => x === payload);
      if (index === -1) return state;
      return {
        all: [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ],
        selected: state.selected
      };
    }
    
    default:
      return state;
  }
}
 