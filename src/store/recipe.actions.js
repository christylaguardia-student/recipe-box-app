import { RECIPES_FETCH } from './recipe.constants';

function requestRecipes(fetchedRecipes) {
  return {
    type: RECIPES_FETCH,
    payload: fetchedRecipes
  }
}
