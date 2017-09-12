import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  handleOnChange(e) {
    const search = e.target.value;
    this.setState({ search });
  }

  // handleOnSubmit() {

  // }

  render() {
    return (
      <div id="home-container">
        <div id="home">
          <h1 className="jumbo-text">Recipe Box</h1>
          <h2>Find your recipes. Cook something.</h2>
          <Link className="jumbo-link" to="/recipes">Sign Up</Link>
        </div>
      </div>
    );
  }
}
