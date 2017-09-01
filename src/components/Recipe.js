import React, { Component } from 'react';
import { request } from '../services/recipe-box.api.js';
// import { fetchRecipe } from './actions';

export default class Recipe extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     recipeId: this.props.recipeId,
  //     recipe: this.props.recipe
  //   }
  // }

  componentDidMount() {
    // request.get(recipeId)
    //   .then(res => {
    //     console.log(res);
    //     this.setState({ recipe: res });
    //   });
  }

  render() {

    return (
      <div>
        <h1>{this.state.recipe.title}</h1>
  
        <h2>Instructions</h2>
        <p>{this.state.recipe.instructions}</p>
        
        <h2>Ingredients</h2>
        <ul>
          {this.state.recipe.ingredients.map(item => {
            return <li key={item._id}>{item.amount} {item.unit} {item.name}</li>
          })}
        </ul>
        
        <button onClick={() => {alert("this does nothing")} } >Edit</button>
      </div>
    );
  }
}
