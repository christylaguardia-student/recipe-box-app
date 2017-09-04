import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { request } from '../services/recipe-box.api';

export default class SideBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sidebarRecipeList: []
    }
  }

  componentDidMount() {
    return request.getAll()
      .then(recipes => {
        this.setState({ sidebarRecipeList: recipes });
      })
      .catch(error => console.log('uh-oh! there was an error getting all the recipes.'));
  }

  // getSelectedRecipe() {
  //   const selectedId = this.props.match.params.id; //this.props.location.pathname;
  
  //   return request
  //     .get(selectedId)
  //     .then(res => this.setState({ selectedRecipe: res }))
  //     .catch(() => console.log('uh oh, there was an error'));
  // }

  render() {
    return (
      <div>
        <h2>Recipes</h2>
        <ul>
          {this.state.sidebarRecipeList.map(item => {
            return <li key={item._id}><Link to={`/recipes/${item._id}`}>{item.title}</Link></li>
          })}
        </ul>
      </div>
    );
  }
}
