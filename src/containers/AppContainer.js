import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import '../styles/App.css';
import Home from '../components/Home';
import CreateContainer from './CreateContainer';
import RecipeContainer from './RecipeContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h1>Recipe Box</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new">Add New</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={CreateContainer} />
            <Route path="/recipes" component={RecipeContainer} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
