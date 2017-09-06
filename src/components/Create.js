import React, { Component} from 'react';
import { request } from '../services/recipe-box.api';
import Sidebar from './Sidebar';
import '../styles/_form.css';
import { units, fractions } from '../store/ingredient.constants.js';
import { saveRecipe } from '../store/recipe.actions';
import { connect } from 'react-redux';

class CreateForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      servings: 0,
      hours: 0,
      minutes: 0,
      name: '',
      whole: 0,
      fraction: '',
      unit: '',
      ingredients: [],
      instructions: '',
      recipeSaveError: false,
      recipeSaved: false
      // recipeComplete: false,
    }

    this.addIngredient = this.addIngredient.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  addIngredient(name, whole, fraction, unit) {
    let amount;

    if (whole > 0 && fraction !== '') amount = `${whole} ${fraction}`;
    else if (whole > 0 && fraction === '') amount = whole;
    else if (whole === 0 && fraction !== '') amount = fraction;
    else if (whole ===0 && fraction === '') amount = 0;

    const newIngredient = {name, amount, unit};
    console.log('newIngredient', newIngredient);
  
    if (newIngredient.name && newIngredient.amount) {
      // return (
        this.setState({
          ingredients: [
            ...this.state.ingredients,
            newIngredient
          ]})
        
          this.resetIngredientForm();
      // );
    }
  }

  removeIngredient(id) {
    let index = this.state.ingredients.indexOf(id);
    console.log('index found', index);

    const { ingredients } = this.state;
    const newList = [...ingredients.slice(0, index)].concat([...ingredients.slice(++index)]);
    console.log('newList',newList);
    
    this.setState({ ingredients: newList })

    //TODO: remove from table
  }

  convertFractionToDecimal(amount) {
    // number includes fraction, like "1 1/2"
    if (amount.includes('/') && amount.includes(' ')) {
      const amountStrings = amount.split(' ');
      const fraction = fractions.find(f => f.value === amountStrings[1]);
      return parseInt(amountStrings[0], 10) + fraction.decimal;
    }
    // number is a fraction, like "1/2"
    else if (amount.includes('/') && !!amount.includes(' ')) {
      const fraction = fractions.find(f => f.value === amount);
      return fraction.decimal;
    }
    // number is a whole, like "1"
    else {
      return parseInt(amount, 10);
    }
  }

  resetForm() {
    this.recipeFormRef.reset();
  }

  resetIngredientForm() {
    // TODO
    // this.ingredientNameRef.reset();
    // this.ingredientWholeNumRef.reset();
    // this.ingredientFractionRef.reset();
    // this.ingredientUnitRef.reset();
  }

  saveRecipe() {
    // create object to save
    const recipe = {
      title: this.state.title,
      servings: parseInt(this.state.servings, 10),
      instructions: this.state.instructions,
      ingredients: this.state.ingredients
    };

    // check if required fields are populated
    if (recipe.title !== '' || recipe.instructions !== '' || recipe.ingredients.length > 0 ) {

      if (this.state.minutes > 0) {
        // convert time to minutes
        let totalMinutes = this.state.hours ? parseInt(this.state.hours * 60, 10) : 0;
        totalMinutes += this.state.minutes ? parseInt(this.state.minutes, 10)  : 0;
        
        recipe.time = totalMinutes;
      }

      // convert amount to decimal, if contains a fraction
      let ingredientsConverted = this.state.ingredients.map(item => {
        let amountNum = this.convertFractionToDecimal(item.amount.toString());
        return { name: item.name, amount: amountNum, unit: item.unit };
      });

      recipe.ingredients = ingredientsConverted;

      // save the recipe
      
      // request.add(recipe)
      this.props.saveRecipe(recipe)
        .then(saved => {
          this.setState({
            recipeSaveError: false,
            recipeSaved: true
          });
        })
        .then(() => {
          // TODO: update sidebar
          this.resetForm();
        })
        .catch((err) => {
          console.log('uh-oh, there was an error during the save', err);
          this.setState({
            recipeSaveError: true,
            recipeSaved: false
          });
        });
    } else {
      // show error message
      this.setState({
        recipeSaveError: true,
        recipeSaved: false
      });
    };
  }

  render () {
    return (
      <div>
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">

          {this.state.recipeSaveError ? <ErrorMsg /> : null }
          {this.state.recipeSaved ? <SuccessMsg /> : null }
          
          <h1>Create Recipe</h1>
          <form ref={(el) => this.recipeFormRef = el}>
            <label>
              Title* 
              <input name="title" type="text" placeholder="Recipe Title" onChange={({target}) => this.setState({ title: target.value })} />
            </label>
            <br />
            <label>
              Servings 
              <input name="servings" type="number" step="1" min="1" placeholder="4" onChange={({target}) => this.setState({ servings: target.value })} />
            </label>
            <label>
              Time (HH:MM) 
              <input name="timeHr" type="number" step="1" min="0" placeholder="1" onChange={({target}) => this.setState({ hours: target.value })} />
              :
              <input name="timeMin" type="number" step="5" min="0" max="55" placeholder="15" onChange={({target}) => this.setState({ minutes: target.value })} />
            </label>
            <br />
            <label>Instructions*</label>
            <textarea name="instructions" required onChange={({target}) => this.setState({ instructions: target.value })} />
          </form>

          <div>
            <table>
              <tbody>
                <tr>
                  <th>Ingredient*</th>
                  <th>Amount*</th>
                  <th>Options</th>
                </tr>
                {this.state.ingredients.map(item => {
                  return (
                    <tr key={item._id} className="dataRow">
                        <td>{item.name}</td>
                        <td>{item.amount} {item.unit}</td>
                        <td>
                          <button onClick={() => this.removeIngredient(item._id)}>Remove</button>
                        </td>
                    </tr>
                  )
                })}

                <tr>
                  <td><input ref={(el) => this.ingredientNameRef = el} name="name" type="text" placeholder="example: flour" onChange={({target}) => this.setState({ name: target.value })} /></td>
                  <td>
                    <input ref={(el) => this.ingredientWholeNumRef = el} name="whole" type="number" step="1" min="0" placeholder="1" onChange={({target}) => this.setState({ whole: target.value })} />
                    
                    <select ref={(el) => this.ingredientFractionRef = el} name="fraction" onChange={({target}) => this.setState({ fraction: target.value })} >
                      <option></option>
                      { fractions.map((unit, index) => <option key={index}>{unit.value}</option>) }
                    </select>

                    <select  ref={(el) => this.ingredientUnitRef = el} name="unit" onChange={({target}) => this.setState({ unit: target.value })} >
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


function ErrorMsg() {
  return (
    <div className="error">
      <p>Uh-Oh! Your recipe could not be saved.</p>
    </div>
  )
}

function SuccessMsg() {
  return (
    <div className="success">
      <p>Your recipe was saved!</p>
    </div>
  )

}

export default connect(null, { saveRecipe })(CreateForm);