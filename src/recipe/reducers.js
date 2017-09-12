import * as actions from './constants';

export function recipes(state = { all: [], selected: {} }, { type, payload }) {
  switch(type) {
    case actions.RECIPES_GET_ALL:
      return {
        all: payload,
        selected: Object.assign({}, state.selected)
      };
    
    case actions.RECIPE_GET:
      return {
        all: [...state], // does this work?
        selected: payload
      };
    
    case actions.RECIPE_ADDED: {
      return {
        all: [...state, payload], // does this work?
        selected: Object.assign({}, state.selected)
      };
    }

    case actions.RECIPE_REMOVED: {
      const index = state.all.findIndex(x => x === payload); // why does this work? state.all?

      if (index === -1) return state;

      return {
        all: [
          ...state.all.slice(0, index),
          ...state.all.slice(index + 1)
        ],
        selected: Object.assign({}, state.selected)
      };
    }
    
    default:
      return state;
  }
}
 