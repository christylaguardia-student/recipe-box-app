import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class SideBar extends Component {

  render() {

    const recipes = this.props.recipes;

    return (
      <Router>
        <div>
          <h1>Recipes</h1>
          <ul>
            {recipes.map(item => {
              return <li key={item._id}><Link to={`/recipe/${item._id}`}>{item.title}</Link></li>
            })}
          </ul>
        </div>
      </Router>
    );
  }
}
