import React from 'react';
import { request } from '../services/recipe-box.api';

export default function Details({ recipe }) {

  return (
    <div>
      <p>detail view</p>
      <h2>{recipe.title}</h2>

      <p>Serves: {recipe.servings}</p>
      <p>Time: {convertTime(recipe.time)}</p>
      
      <button onClick={() => {alert("this does nothing")} }> - </button>
      <button onClick={() => {alert("this does nothing")} }> + </button>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map(item => {
          return <li key={item._id}>{item.amount} {item.unit} {item.name}</li>
        })}
      </ul>

      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      
      <button onClick={() => {alert("this does nothing")} }>Edit</button>
    </div>
  )

}

function convertTime(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  if ((time / 60) > 1) return `${hours} hours and ${minutes} minutes`;
  else return `${minutes} minutes`;
}

function scale(ingredients, factor) {

  return ingredients.map(item => {
    const newAmount = item.amount * factor;

    return {
      _id: item._id,
      name: item.name,
      amount: newAmount,
      unit: item.unit
    };

  });

}
