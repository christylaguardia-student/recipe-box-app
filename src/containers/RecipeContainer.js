import React, { Component } from 'react';
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

export default class RecipeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedRecipe: testRecipe
    }
  }


  render() {
    return (
      <div>
        <Sidebar />
        <Details recipe={this.state.selectedRecipe} />
      </div>
    );
  }
    
}
