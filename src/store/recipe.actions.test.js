import * as actions from './recipe.constants';
import { makeSaveRecipe, makeGetRecipes, makeDeleteRecipe } from './recipe.actions';

describe('recipe actions', () => {

  it('save recipe', () => {
    const api = {
      add(recipe) { return Promise.resolve(recipe); }
    };
    const recipe = { title: 'my recipe' };

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

});