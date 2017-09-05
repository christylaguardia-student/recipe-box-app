import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { request } from '../services/recipe-box.api';
import '../styles/Sidebar.css';

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

  render() {
    return (
      <div id="side-nav">
        <ul>
          {this.state.sidebarRecipeList.map(item => {
            return <li key={item._id}><Link to={`/recipes/${item._id}`}>{item.title}</Link></li>
          })}
        </ul>
      </div>
    );
  }
}
