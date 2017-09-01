import React, { Component } from 'react';
// import { fetchRecipe } from './actions';

export default class Recipe extends Component {

  render() {
    let recipe = this.props.recipe;

    return (
      <div>
        <h1>{recipe.title}</h1>
  
        <h2>Instructions</h2>
        <p>{recipe.instructions}</p>
        
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map(item => {
            return <li key={item._id}>{item.amount} {item.unit} {item.name}</li>
          })}
        </ul>
        
        <button onClick={() => {alert("this does nothing")} } >Edit</button>
      </div>
    );
  }
}
