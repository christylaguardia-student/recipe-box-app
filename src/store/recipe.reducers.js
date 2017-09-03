import { RECIPES_FETCH } from './recipe.constants';

export default function recipe(state = { recipe: null, recipesList: []}, { type, payload }) {

  
  switch(type) {
    case RECIPES_FETCH:
      console.log('Payload', payload);
      return { recipe: payload, recipesList: state.recipesList }
    
    default:
      return state;
  }
};