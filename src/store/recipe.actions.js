import * as actions from './recipe.constants';
import api from '../services/recipe-box.api';

export function makeSaveRecipe(api) {
  return function saveRecipe(recipe) {
    return (dispatch) => {
      return api
        .add(recipe)
        .then(recipe => dispatch({ type: actions.RECIPE_ADDED, payload: recipe }));
    };
  };
}

export const saveRecipe = makeSaveRecipe(api);

export function makeGetRecipes(api) {
  return function getRecipes() {
    return (dispatch) => {
      return api
        .getAll()
        .then(recipes => dispatch({ type: actions.RECIPES_GET_ALL, payload: recipes }));
    };
  };
}

export const getRecipes = makeGetRecipes(api);

export function makeDeleteRecipe(api) {
  return function deleteRecipe(recipeId) {
    return (dispatch) => {
      return api
        .delete(recipeId)
        .then(recipeId => dispatch({ type: actions.RECIPE_REMOVED, payload: recipeId }));
    };
  };
}

export const deleteRecipe = makeDeleteRecipe(api);
