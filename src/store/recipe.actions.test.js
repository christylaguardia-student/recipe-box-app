import * as actions from './recipe.constants';
import {
  makeSaveRecipe,
  makeGetRecipes,
  makeDeleteRecipe,
  makeGetRecipeById
} from './recipe.actions';

describe('recipe actions', () => {

  it('save recipe', () => {
    const api = {
      add(recipe) { return Promise.resolve(recipe); }
    };
    const recipe = { id: 1, title: 'my recipe' };

    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const savedRecipe = makeSaveRecipe(api);
    const dispatchFn = savedRecipe(recipe);

    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.RECIPE_ADDED, payload: recipe }]);
      });
  });

  it('get all recipes', () => {
    const recipes = [1,2,3];
    const api = {
      getAll() { return Promise.resolve(recipes); }
    };

    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const getRecipes = makeGetRecipes(api);
    const dispatchFn = getRecipes();

    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.RECIPES_GET_ALL, payload: recipes }]);
      });
  });

  it('deletes a recipe', () => {
    const api = {
      delete(recipeId) { return Promise.resolve(recipeId); }
    };
    const recipeId = 1;

    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const deletedRecipe = makeDeleteRecipe(api);
    const dispatchFn = deletedRecipe(recipeId);

    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.RECIPE_REMOVED, payload: recipeId }]);
      });
  });

  it('get a recipes', () => {
    const recipeId = 1;
    const api = {
      get(recipeId) { return Promise.resolve(recipeId); }
    };

    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action); };
    const getRecipeById = makeGetRecipeById(api);
    const dispatchFn = getRecipeById(recipeId);

    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.RECIPE_GET, payload: recipeId }]);
      });
  });

});