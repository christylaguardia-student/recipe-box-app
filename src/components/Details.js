import React from 'react';

export default function recipeDetails({ recipe }) {
  let convertedTime;
  const hours = Math.floor(recipe.time / 60);
  const minutes = recipe.time % 60;

  if ((recipe.time / 60) > 1) convertedTime = `${hours} hours and ${minutes} minutes`;
  else convertedTime = `${minutes} minutes`;
  
  return (
    <div>
      <h2>{recipe.title}</h2>

      <p>Serves: {recipe.servings}</p>
      <p>Time: {convertedTime}</p>

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
