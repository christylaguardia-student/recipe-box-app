import { RECIPE_FETCH_ALL, RECIPE_FETCH, RECIPES_RECEIVE_ALL } from './recipe.constants';
import { request } from '../services/recipe-box.api';

function requestRecipes(recipes) {
  return {
    type: RECIPE_FETCH_ALL,
    payload: recipes
  }
}

function receiveRecipes(recipesList) {
  return {
    type: RECIPES_RECEIVE_ALL,
    recipesList
  }
}

// function fetchRecipes(recipes) {
//   return dispatch => {
//     dispatch(requestRecipes(recipes))
//     return request.getAll()
//       .then(recipesList => dispatch(receiveRecipes(recipesList)));
//   }
// }

//   return request
//     .getAll()
//     .then(recipes => {
//       console.log(recipes);

//       return {
//         type: RECIPE_FETCH_ALL,
//         payload: recipes
//       }
//     });
// }

// export function fetchAllRecipes() {
//   return function() {
//     return request.getAll();
//   }
// }

// export function fetchRecipe(id) {
//   return function() {
//     return request.get(id);
//   }
// }
