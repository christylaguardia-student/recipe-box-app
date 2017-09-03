import React, { Component} from 'react';
import '../styles/form.css';
import '../styles/table.css';

const units =['tsp', 'tbsp', 'fl oz', 'cup', 'pint', 'quart', 'gallon', 'lb', 'oz', 'in', 'can', 'dash', 'pinch'];
const fractions = ['1/4', '1/3', '1/2', '2/3', '3/4'];

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
      ingredients: [
        { name: 'sugar', amount: '1', unit: 'cup' },
        { name: 'flour', amount: '1 1/2', unit: 'cup' },
      ]
    }

    this.addIngredient = this.addIngredient.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  addIngredient(name, whole, fraction, unit) {
    let amount = `${whole} ${fraction}`;
    const newIngredient = {name, amount, unit};
  
    return (
      this.setState({
        ingredients: [
          ...this.state.ingredients,
          newIngredient
        ]
      })
    );
  }

  saveRecipe() {
    let totalMinutes = this.state.hours ? parseInt(this.state.hours * 60) : 0;
    totalMinutes += this.state.minutes ? parseInt(this.state.minutes)  : 0;

    const recipe = {
      title: this.state.title,
      servings: this.state.servings,
      time: totalMinutes,
      instructions: this.state.instructions,
      ingredients: this.state.ingredients
    };

    console.log('saved recipe', recipe);
  }

  render () {
    return (
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
              </tr>
              {this.state.ingredients.map((item, index) => {
                return (
                  <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.amount} {item.unit}</td>
                  </tr>
                )
              })}

              <tr>
                <td><input name="name" type="text" placeholder="flour" onChange={({target}) => this.setState({ name: target.value })} /></td>
                <td>
                  <input name="whole" type="number" step="1" min="0" placeholder="1" onChange={({target}) => this.setState({ whole: target.value })} />
                  
                  <select name="fraction" onChange={({target}) => this.setState({ fraction: target.value })} >
                    <option></option>
                    { fractions.map((unit, index) => <option key={index}>{unit}</option>) }
                  </select>

                  <select name="unit" onChange={({target}) => this.setState({ unit: target.value })} >
                    <option>none</option>
                    { units.map((unit, index) => <option key={index}>{unit}</option>) }
                  </select>

                  <button onClick={() => this.addIngredient(this.state.name, this.state.whole, this.state.fraction, this.state.unit)}>Add</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button onClick={this.saveRecipe}>Save</button>

      </div>
    );
  }

  
}