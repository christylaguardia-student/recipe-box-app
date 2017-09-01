import * as actions from './constants';

// should I have a default ObjectID?
// or placeholder data in case the db is empty?
const defaultRecipe = {
  title: 'Peanut Butter Sandwich',
  instructions: 'Spread peanut butter on one slice of bread, and jelly on the other',
  ingredients: [
    { name: 'Bread', amount: 2 },
    { name: 'Peanut Butter', amount: 2, unit: 'tbsp' },
    { name: 'Jelly', amount: 2, unit: 'tbsp' }
  ]
};

export default function recipe(state = { recipe: defaultRecipe }, action) {
  switch(action.type) {
    case actions.RECIPE_FETCH:
      return action.payload;
    case actions.RECIPE_CREATE:
      return action.payload;
    case actions.RECIPE_UPDATE:
      return action.payload
    case actions.RECIPE_DESTROY:
      return action.payload
    default:
      return state;
  }
};