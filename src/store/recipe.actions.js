import * as actions from './recipe.constants';
import { request } from '../services/recipe-box.api';

export function fetchRecipe(id) {
  return function() {
    return request.get(id);
  }
}

export function createRecipe(value) {
  return function() {

  }
}

export function updateRecipe(value) {
  return function() {

  }
}

export function removeRecipe(value) {
  return function() {

  }
}
