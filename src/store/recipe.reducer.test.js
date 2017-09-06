import reducer from './recipe.reducer';
import * as actions from './recipe.constants';

describe('recipe reducer', () => {

  it('initial state', () => {
    const newState = reducer(undefined, {type: undefined});

    expect(newState).toEqual([]);
  });

  it('saves a recipe', () => {
    const recipe = {
      title: 'my recipe'
    }
    const newState = reducer([], {type: actions.SAVED_RECIPE, payload:recipe})
    expect(newState).toEqual([recipe]);
    
    const recipe2 = {
      title: 'my recipe 2'
    }
    const newState2 = reducer(newState, {type: actions.SAVED_RECIPE, payload:recipe2})
    expect(newState2).toEqual([recipe,recipe2]);
  });

  it('fetches  all recipes', () => {
    const newState = reducer([], {type: actions.FETCH_RECIPES, payload: [1,2,3]})
    expect(newState).toEqual([1,2,3])
  });

})