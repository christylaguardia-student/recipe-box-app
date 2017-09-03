import React, { Component } from 'react';
import { request } from '../services/recipe-box.api.js';

export default class Recipe extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentRecipeId: '59a9133a1734b2f2f2c8fdbb',
      currentRecipe: {
        "title": "Peanut Butter and Jelly Sandwich",
        "instructions": "Spread peanut butter on one slice of bread, and jelly on the other",
        "ingredients": [
          { "name": "Bread", "amount": 2 },
          { "name": "Peanut Butter", "amount": 2, "unit": "tbsp" },
          { "name": "Jelly", "amount": 2, "unit": "tbsp" }
        ]
      }
    }
  }

  componentDidMount() {

    return request.get(this.state.currentRecipeId)
      .then(res => {
        console.log('recipe fetched', res);
        this.setState({ currentRecipe: res });
      })
      .catch(error => console.log('uh-oh! there was an error getting that recipe.'));
  } 

  render() {
    // const selectedId = this.props.location.search.split('/');
    // const selectedId = qs.parse(location.search.slice('=')).id;
    // const selectedId = '59a9133a1734b2f2f2c8fdbb';
    // console.log('', selectedId);

    return (
      <div>
        <h1>{this.state.currentRecipe.title}</h1>
  
        <h2>Instructions</h2>
        <p>{this.state.currentRecipe.instructions}</p>
        
        <h2>Ingredients</h2>
        <ul>
          {this.state.currentRecipe.ingredients.map(item => {
            return <li key={item._id}>{item.amount} {item.unit} {item.name}</li>
          })}
        </ul>
        
        <button onClick={() => {alert("this does nothing")} } >Edit</button>
      </div>
    );
  }
}
