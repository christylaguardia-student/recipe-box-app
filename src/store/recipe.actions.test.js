import * as actions from './recipe.constants';
import { makeSaveRecipe, makeGetRecipes } from './recipe.actions';

describe('recipe actions', () => {

  it('save recipe', () => {
    const api = {
      add(recipe) { return Promise.resolve(recipe) }
    };
    const recipe = { title: 'my recipe' };

    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action) };
    const savedRecipe = makeSaveRecipe(api);
    const dispatchFn = savedRecipe(recipe);

    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{type: actions.SAVED_RECIPE, payload:recipe}]);
      })
  });

  it('get all recipes', () => {
    const recipes = [1,2,3];
    const api = {
      getAll() { return Promise.resolve(recipes) }
    };

    const dispatched = [];
    const dispatch = (action) => { dispatched.push(action) };
    const getRecipes = makeGetRecipes(api);
    const dispatchFn = getRecipes();

    dispatchFn(dispatch)
      .then(() => {
        expect(dispatched).toEqual([{ type: actions.FETCH_RECIPES, payload: recipes }]);
      })
  });

});