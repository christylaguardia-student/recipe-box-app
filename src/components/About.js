import React from 'react';
import '../styles/About.css';
const imageSource = require('../images/stock-photo-vintage-metal-recipe-box-with-recipes-inside-isolated-on-white-background-120987220.jpg');

export default function About() {

  return (
    <div id="about-container">
      <h1>About</h1>
      <h3>Just like your grandma's old recipe box...</h3>
      <img src={imageSource} alt="recipe box"/>
      <p>The Recipe Box app is designed to simply store and retrieve your recipes. That's all.</p>
      <h3>How to use it:</h3>
      <ol>
        <li>Sign up for an account.</li>
        <li>Create a recipe.</li>
        <li>Cook something.</li>
      </ol>
    </div>
  );
}