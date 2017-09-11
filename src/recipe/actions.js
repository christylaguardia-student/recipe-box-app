import * as actions from './constants';
import api from '../services/recipe-api';

// SAVE

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

// GET ALL

export function makeGetAllRecipes(api) {
  return function getAllRecipes() {
    return dispatch => {
      return api
        .getAll()
        .then(allRecipes => dispatch({ type: actions.RECIPES_GET_ALL, payload: allRecipes }));
    };
  };
}

export const getAllRecipes = makeGetAllRecipes(api);


// DELETE

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

// GET BY ID

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
