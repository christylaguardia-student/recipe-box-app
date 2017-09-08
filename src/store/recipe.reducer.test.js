import reducer from './recipe.reducer';
import * as actions from './recipe.constants';

describe('recipe reducer', () => {

  it('initial state', () => {
    const newState = reducer(undefined, {type: undefined});

    expect(newState).toEqual([]);
  });

  it('saves a recipe', () => {
    const recipe = { title: 'my recipe' };
    const newState = reducer([], { type: actions.RECIPE_ADDED, payload: recipe });
    
    expect(newState).toEqual([recipe]);
    
    const recipe2 = { title: 'my recipe 2' };
    const newState2 = reducer(newState, { type: actions.RECIPE_ADDED, payload: recipe2 });
    
    expect(newState2).toEqual([recipe, recipe2]);
  });

  it('gets  all recipes', () => {
    const newState = reducer([], { type: actions.RECIPES_GET_ALL, payload: [1,2,3] });
    
    expect(newState).toEqual([1,2,3]);
  });

  it('deletes a recipe by id', () => {
    const recipeId = 1;
    const newState = reducer([], { type: actions.RECIPE_REMOVED, payload: recipeId });
    
    expect(newState).toEqual([]);
  });

  it('gets a recipe by id', () => {
    const recipeId = 1;
    const newState = reducer([], { type: actions.RECIPE_GET, payload: recipeId });
    
    expect(newState).toEqual(recipeId); // not sure about this
  });

});