import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { request } from '../services/recipe-box.api';

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

export default class Recipe extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentRecipeId: '59a921c81734b2f2f2c90235',
      currentRecipe: testRecipe
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
    return (<div>this is the recipe container</div>)
  }
}

    //   return (
    //     <Router>
    //       <div>
    //         <h1>Recipe View</h1>
    //         <Switch>
    //           <Route path="/recipes" component={() => recipeDetails(testRecipe)}></Route>
    //         </Switch>
    //       </div>
    //     </Router>
    //   );
    // }

function recipeDetails(recipeToShow) {
  let convertedTime;

  if ((recipeToShow.time / 60) > 1) convertedTime = `${Math.floor(recipeToShow.time / 60)} hours and ${recipeToShow.time % 60} minutes`;
  else convertedTime = `${recipeToShow.time % 60} minutes`;
  
  return (
    <div>
      <p>this is the details component</p>
      <h2>{recipeToShow.title}</h2>

      <p>Serves: {recipeToShow.servings}</p>
      <p>Time: {convertedTime}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipeToShow.ingredients.map(item => {
          return <li key={item._id}>{item.amount} {item.unit} {item.name}</li>
        })}
      </ul>
      
      <h3>Instructions</h3>
      <p>{recipeToShow.instructions}</p>
      
      <button onClick={() => {alert("this does nothing")} }>Edit</button>
    </div>
  )
}
