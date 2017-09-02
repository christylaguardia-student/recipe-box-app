import { RECIPE_FETCH_ALL, RECIPES_RECEIVE_ALL, RECIPE_FETCH } from './recipe.constants';

export default function recipe(state = { recipe: null, recipesList: []}, { type, payload }) {

  console.log('Payload', payload);

  switch(type) {
    case RECIPES_RECEIVE_ALL:
      return { recipe: payload[0], recipesList: payload }; // not sure if index=0 will work?
    
    case RECIPE_FETCH:
      return { recipe: payload, recipesList: state.recipesList }
    

    // case RECIPE_CREATE:
    //   return payload;
    // case RECIPE_UPDATE:
    //   return payload
    // case RECIPE_DESTROY:
    //   return payload

    default:
      return state;
  }
};