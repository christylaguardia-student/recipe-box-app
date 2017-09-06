import * as actions from './recipe.constants';
import api from '../services/recipe-box.api';

export function makeSaveRecipe(api) {
  return function saveRecipe(recipe) {
    return (dispatch) => {
      return api
        .add(recipe)
        .then(recipe => dispatch({ type: actions.SAVED_RECIPE, payload: recipe }))
    }
  }
}

export const saveRecipe = makeSaveRecipe(api);

export function makeGetRecipes(api) {
  return function getRecipes() {
    return (dispatch) => {
      return api
        .getAll()
        .then(recipes => dispatch({ type: actions.FETCH_RECIPES, payload: recipes }))
    }
  }
}

export const getRecipes = makeGetRecipes(api);
