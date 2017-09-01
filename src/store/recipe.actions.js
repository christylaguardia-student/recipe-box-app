import { RECIPE_FETCH_ALL } from './recipe.constants';
import { request } from '../services/recipe-box.api';

export function fetchAllRecipes() {
    request
      .getAll()
      .then(fetchedRecipes => {
          console.log('Fetched recipes', fetchedRecipes);

          return { type: RECIPE_FETCH_ALL, payload: fetchedRecipes };
      });

      // TODO:
      // , error => {
      //   dispatch({ type: actions.RECIPE_FETCH_ALL_ERROR, payload: error.error });
      // }
}

// export function fetchRecipe(id) {
//   return function() {
//     return request.get(id);
//   }
// }

// export function createRecipe(value) {
//   return function() {

//   }
// }

// export function updateRecipe(value) {
//   return function() {

//   }
// }

// export function removeRecipe(value) {
//   return function() {

//   }
// }
