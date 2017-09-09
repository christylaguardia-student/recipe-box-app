import { recipes } from './reducers';
import * as actions from './constants';

describe('recipe reducer', () => {

  it('initial state', () => {
    const newState = recipes(undefined, { type: undefined });

    expect(newState).toEqual({ all: [], selected: {} });
  });

  it('saves a recipe', () => {
    const recipe1 = { title: 'my recipe1' };
    const newState1 = recipes([], { type: actions.RECIPE_ADDED, payload: recipe1 });
    
    expect(newState1).toEqual({
      all: [recipe1],
      selected: {}
    });
    
    const recipe2 = { title: 'my recipe 2' };
    const newState2 = recipes(newState1, { type: actions.RECIPE_ADDED, payload: recipe2 });
    
    expect(newState2).toEqual({
      all: [recipe1, recipe2],
      selected: {}      
    });
  });

  it('gets  all recipes', () => {
    const newState = recipes([], { type: actions.RECIPES_GET_ALL, payload: [1,2,3] });
    
    expect(newState).toEqual({
      all: [1,2,3]
    });
  });

  it('deletes a recipe by id', () => {
    const recipeId = 1;
    const newState = recipes([], { type: actions.RECIPE_REMOVED, payload: recipeId });
    
    // QUESTION: why does this pass?
    expect(newState).toEqual([]);
  });

  it('gets a recipe by id', () => {
    const recipeId = 1;
    const newState = recipes([], { type: actions.RECIPE_GET, payload: recipeId });
    
    expect(newState).toEqual({ selected: recipeId });
  });

});