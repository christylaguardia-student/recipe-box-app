import React, { Component} from 'react';
import { connect } from 'react-redux';
import { units } from '../store/ingredient.constants.js';
import { saveRecipe } from '../store/recipe.actions'; 
import Sidebar from './Sidebar';
import '../styles/form.css';

class CreateRecipe extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      servings: 0,
      time: null,
      name: '',
      amount: 0,
      unit: '',
      ingredients: [],
      instructions: '',
      recipeSaveError: false,
      recipeSaved: false
    };

    this.addIngredient = this.addIngredient.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  componentDidUpdate() {

  }

  addIngredient(name, amount, unit) {
    const newIngredient = {name, amount, unit};
  
    if (newIngredient.name && newIngredient.amount) {
      this.setState({
        ingredients: [
          ...this.state.ingredients,
          newIngredient
        ]});
        
      this.resetIngredientForm();
    }
  }

  removeIngredient(key) {
    const { ingredients } = this.state;
    const newList = [
      ...ingredients.slice(0, key),
      ...ingredients.slice(key + 1)
    ];
    
    this.setState({ ingredients: newList });
  }

  resetForm() {
    this.recipeFormRef.reset();
    this.recipeInstructionsFormRef.reset();
  }

  resetIngredientForm() {
    this.ingredientNameRef.value = '';
    this.ingredientAmountRef.value = '';
    this.ingredientUnitRef.value = 'none';
  }

  saveRecipe() {
    // create object to save
    const recipe = {
      title: this.state.title,
      servings: parseInt(this.state.servings, 10),
      time: parseInt(this.state.time, 10),
      instructions: this.state.instructions,
      ingredients: this.state.ingredients
    };

    // check if required fields are populated
    if (recipe.title !== '' || recipe.instructions !== '' || recipe.ingredients.length > 0 ) {
      // save the recipe
      this.props.saveRecipe(recipe)
        .then(saved => {
          this.setState({ recipeSaveError: false, recipeSaved: true });
        })
        .then(() => this.resetForm())
        .catch((err) => {
          this.setState({ recipeSaveError: true, recipeSaved: false });
        });
    } else {
      // show error message
      this.setState({ recipeSaveError: true, recipeSaved: false });
    }
  }

  render () {
    return (
      <div>
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">
          
          <h1>Add a New Recipe</h1>

          {this.state.recipeSaveError ? <ErrorMsg /> : null }
          {this.state.recipeSaved ? <SuccessMsg /> : null }
          
          <form ref={(el) => this.recipeFormRef = el}>
            <label>Recipe Title*</label>
            <input name="title" type="text" placeholder="Recipe Title" onChange={({target}) => this.setState({ title: target.value })} />
            
            <label>Servings</label>
            <input name="servings" type="number" step="1" min="1" placeholder="4" onChange={({target}) => this.setState({ servings: target.value })} />
            
            <label>Time (minutes)</label>
            <input name="time" type="number" step="5" min="1" placeholder="30" onChange={({target}) => this.setState({ time: target.value })} />
          </form>

          <div>
            <table>
              <tbody>
                <tr>
                  <th>Ingredient*</th>
                  <th>Amount*</th>
                  <th>Unit</th>
                  <th>Options</th>
                </tr>

                {this.state.ingredients.map((item, index) => {
                  return (
                    <tr key={index} className="dataRow">
                      <td>{item.name}</td>
                      <td>{item.amount}</td>
                      <td>{item.unit}</td>
                      <td>
                        <button onClick={() => this.removeIngredient(index)}>Remove</button>
                      </td>
                    </tr>
                  );
                })}

                <tr className="input-row">
                  <td><input ref={(el) => this.ingredientNameRef = el} name="name" type="text" placeholder="example: flour" onChange={({target}) => this.setState({ name: target.value })} /></td>
                  <td>
                    <input ref={(el) => this.ingredientAmountRef = el} name="amount" type="number" step="1" min="0" placeholder="1" onChange={({target}) => this.setState({ amount: target.value })} />
                  </td>
                  <td>
                    <select  ref={(el) => this.ingredientUnitRef = el} name="unit" onChange={({target}) => this.setState({ unit: target.value })} >
                      <option>none</option>
                      { units.map((unit, index) => <option key={index}>{unit}</option>) }
                    </select>
                  </td>
                  <td>
                    <button onClick={() => this.addIngredient(this.state.name, this.state.amount, this.state.unit)}>Add</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <form ref={(el) => this.recipeInstructionsFormRef = el}>
            <label>Instructions*</label>
            <textarea name="instructions" required onChange={({target}) => this.setState({ instructions: target.value })} />
          </form>

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
  );
}

function SuccessMsg() {
  return (
    <div className="success">
      <p>Your recipe was saved!</p>
    </div>
  );
}

export default connect(null, { saveRecipe })(CreateRecipe);
