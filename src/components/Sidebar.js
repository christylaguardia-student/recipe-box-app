import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/Sidebar.css';
import { getRecipes } from '../store/recipe.actions';

class SideBar extends Component {

  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    return (
      <div id="side-nav">
        <ul>
          {this.props.recipes.map(item => {
            return <li key={item._id}><NavLink to={`/recipes/${item._id}`}>{item.title}</NavLink></li>
          })}
        </ul>
      </div>
    );
  }
}

export default connect((state) =>{
  return { recipes: state.recipes };
}, { getRecipes })(SideBar);
