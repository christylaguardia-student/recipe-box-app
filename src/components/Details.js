import React from 'react';
import { fractions } from '../store/ingredient.constants.js';
import request from '../services/recipe-box.api';
import '../styles/Details.css';

export default function Details({ recipe }) {

  return (
    <div>
      <h1>{recipe.title}</h1>
      <button onClick={() => {alert("this does nothing")} }>Edit</button>
      <button onClick={() => remove(recipe._id) }>Delete</button>

      {recipe.servings ? <p>Serves: {recipe.servings}</p> : null }
      {recipe.time ? <p>Time: {convertTime(recipe.time)}</p> : null }

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, index) => {
          return <li key={item._id}>
            <input type="checkbox" />{convertToFraction(item.amount)} {item.unit} {item.name}
            </li>
        })}
      </ul>

      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  )

}

function remove(id) {
  request.delete(id)
    .then(removed => {
      // TODO: show msg
    })
    .catch((err) => {
      console.log('there was a problem deleing that recipe', err);
    })
}

function convertTime(time) {
  if (!time) return '?';

  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  if ((time / 60) > 1) return `${hours} hours and ${minutes} minutes`;
  else return `${minutes} minutes`;
}

function convertToFraction(amount) {
  const hasFraction = amount.toString().includes('.');

  if (hasFraction) {
    const nums = amount.toString().split('.');
    const whole = parseInt(nums[0], 10);
    const decimal = parseFloat(`.${nums[1]}`);
    const fraction = fractions.find(f => f.decimal === decimal);

    if (whole > 0) amount = `${whole} ${fraction.value}`;
    else amount = fraction.value;
  }

  return amount;
}

// function scale(ingredients, factor) {

//   let scaledIngredients = ingredients.map(item => {
//     const newAmount = item.amount * factor;

//     return {
//       _id: item._id,
//       name: item.name,
//       amount: newAmount,
//       unit: item.unit
//     };

//   });

//   console.log(this.state.ingredients, scaledIngredients);
// }
