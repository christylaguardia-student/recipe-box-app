import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Details from '../components/Details';

const testRecipe = {
  title: 'Peanut Butter and Jelly Sandwich with Honey',
  servings: 1,
  time: 83,
  instructions: 'Spread peanut butter on one slice of bread, and jelly and honey on the other',
  ingredients: [
    { _id: 1, name: 'Bread', amount: 2, unit: 'none' },
    { _id: 2, name:'Peanut Butter', amount: 2, unit: 'tbsp' },
    { _id: 3, name: 'Jelly', amount: 2, unit: 'tbsp' },
    { _id: 4, name: 'Honey', amount: 1, unit: 'tsp' }
  ]
}

function RecipeContainer() {
  return (
    <div>
      <Sidebar />
      <Details recipe={testRecipe}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { recipe: state.recipe };
}

export default connect(mapStateToProps)(RecipeContainer);
