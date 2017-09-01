import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { request } from '../services/recipe-box.api.js';

import '../styles/Sidebar.scss';

export default class SideBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: this.props.recipes
    }
  }

  componentDidMount() {
    request.getAll()
      .then(res => {
        console.log(res);
        this.setState({ recipes: res });
      });
  }

  render() {

    return (
      <Router>
        <div>
          <h1>Recipes</h1>
          <button onClick={() => {alert("this does nothing")} }>New</button>
          <ul>
            {this.state.recipes.map(item => {
              return <li key={item._id}><Link to={`/recipe/${item._id}`}>{item.title}</Link></li>
            })}
          </ul>
        </div>
      </Router>
    );
  }
}
