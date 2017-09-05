import React, { Component} from 'react';
import { request } from '../services/recipe-box.api';
import Sidebar from './Sidebar';
import '../styles/form.css';
import '../styles/table.css';
import { units, fractions } from '../store/ingredient.constants.js';

export default class CreateForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      servings: null,
      hours: null,
      minutes: null,
      name: '',
      whole: null,
      fraction: '',
      unit: '',
      ingredients: []
      // recipeComplete: false,
      // recipeSaved: false
    }

    this.addIngredient = this.addIngredient.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  addIngredient(name, whole, fraction, unit) {
    const amount = `${whole} ${fraction}`;
    const newIngredient = {name, amount, unit};
  
    if (newIngredient.name && newIngredient.amount) {
      return (
        this.setState({
          ingredients: [
            ...this.state.ingredients,
            newIngredient
          ]})
      );
    }
  }

  saveRecipe() {
    // convert time to minutes
    let totalMinutes = this.state.hours ? parseInt(this.state.hours * 60, 10) : 0;
    totalMinutes += this.state.minutes ? parseInt(this.state.minutes, 10)  : 0;

    // convert amount to decimal, if contains a fraction
    let ingredientsConverted = this.state.ingredients.map(item => {
      let amountNum = item.amount.toString();

      if (amountNum.includes(' ')) {
        const amountStrings = item.amount.split(' ');
        const fraction = fractions.find(f => f.value === amountStrings[1]);
        amountNum = parseInt(amountStrings[0], 10) + fraction.decimal;
      } else {
        amountNum = parseInt(amountNum, 10);
      }

      return { name: item.name, amount: amountNum, unit: item.unit };
    });

    // create object to save
    const recipe = {
      title: this.state.title,
      servings: this.state.servings,
      time: totalMinutes,
      instructions: this.state.instructions,
      ingredients: ingredientsConverted
    };

    // check if required fields are populated
    if (recipe.title !== null || recipe.title !== '' || recipe.ingredients.length > 0 ) {
      request.add(recipe)
        .then(saved => console.log('recipe saved', saved))
        .catch(() => console.log('uh-oh, there was an error during the save'));
    } else alert('Can not save recipe');
  }

  render () {
    return (
      <div>
        <Sidebar />
        <div>
          <h1>Create Recipe</h1>
          <form id="recipe-form">
            <label>
              Title 
              <input name="title" type="text" placeholder="Recipe Title" onChange={({target}) => this.setState({ title: target.value })} />
            </label>
            <br />
            <label>
              Servings 
              <input name="servings" type="number" step="1" min="1" placeholder="4" onChange={({target}) => this.setState({ servings: target.value })} />
            </label>
            <label>
              Time
              <input name="timeHr" type="number" step="1" min="0" placeholder="1" onChange={({target}) => this.setState({ hours: target.value })} />
              :
              <input name="timeMin" type="number" step="5" min="0" max="55" placeholder="15" onChange={({target}) => this.setState({ minutes: target.value })} />
            </label>
            <br />
            <label>Instructions</label>
            <textarea name="instructions" required onChange={({target}) => this.setState({ instructions: target.value })} />
          </form>

          <div>
            <table>
              <tbody>
                <tr>
                  <th>Ingredient</th>
                  <th>Amount</th>
                  <th>Options</th>
                </tr>
                {this.state.ingredients.map((item, index) => {
                  return (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.amount} {item.unit}</td>
                        <td>
                          <button>Edit</button>
                          <button>Remove</button>
                        </td>
                    </tr>
                  )
                })}

                <tr>
                  <td><input name="name" type="text" placeholder="example: flour" onChange={({target}) => this.setState({ name: target.value })} /></td>
                  <td>
                    <input name="whole" type="number" step="1" min="0" placeholder="1" onChange={({target}) => this.setState({ whole: target.value })} />
                    
                    <select name="fraction" onChange={({target}) => this.setState({ fraction: target.value })} >
                      <option></option>
                      { fractions.map((unit, index) => <option key={index}>{unit.value}</option>) }
                    </select>

                    <select name="unit" onChange={({target}) => this.setState({ unit: target.value })} >
                      <option>none</option>
                      { units.map((unit, index) => <option key={index}>{unit}</option>) }
                    </select>
                  </td>
                  <td>
                    <button onClick={() => this.addIngredient(this.state.name, this.state.whole, this.state.fraction, this.state.unit)}>Add</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button onClick={this.saveRecipe}>Save</button>

        </div>
      </div>
    );
  }

}
  