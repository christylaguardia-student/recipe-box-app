import * as actions from './recipe.constants';

// loading?

// should I have a default ObjectID?
// or placeholder data in case the db is empty?
const defaultRecipe = {
  _id: 1,
  title: 'Peanut Butter and Jelly Sandwich',
  instructions: 'Spread peanut butter on one slice of bread, and jelly on the other',
  ingredients: [
    { _id: 1, name: 'Bread', amount: 2 },
    { _id: 2, name: 'Peanut Butter', amount: 2, unit: 'tbsp' },
    { _id: 3, name: 'Jelly', amount: 2, unit: 'tbsp' }
  ]
};

const tempRecipeList = [
  { _id: 1, title: 'Peanut Butter Sandwich' },
  { _id: 2, title: 'Peanut Butter and Jelly Sandwich' },
  { _id: 3, title: 'Butter Sandwich' }
]

export default function recipe(state = { recipe: defaultRecipe, recipes: tempRecipeList }, action) {
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