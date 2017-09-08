import * as actions from './recipe.constants';
import api from '../services/recipe-box.api';

export function makeSaveRecipe(api) {
  return function saveRecipe(recipe) {
    return dispatch => {
      return api
        .add(recipe)
        .then(recipe => dispatch({ type: actions.RECIPE_ADDED, payload: recipe }));
    };
  };
}

export const saveRecipe = makeSaveRecipe(api);

export function makeGetRecipes(api) {
  return function getRecipes() {
    return dispatch => {
      return api
        .getAll()
        .then(recipes => dispatch({ type: actions.RECIPES_GET_ALL, payload: recipes }));
    };
  };
}

export const getRecipes = makeGetRecipes(api);

export function makeDeleteRecipe(api) {
  return function deleteRecipe(id) {
    return dispatch => {
      return api
        .delete(id)
        .then(id => dispatch({ type: actions.RECIPE_REMOVED, payload: id }));
    };
  };
}

export const deleteRecipe = makeDeleteRecipe(api);

export function makeGetRecipeById(api) {
  return function getRecipe(id) {
    return dispatch => {
      return api
        .get(id)
        .then(recipe => dispatch({ type: actions.RECIPE_GET, payload: recipe }));
    };
  };
}

export const getRecipe = makeGetRecipeById(api);