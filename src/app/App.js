import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import Auth from '../auth/Auth';
import Home from './Home';
import About from './About';
import RecipeContainer from '../recipe/Container';
import CreateRecipe from '../recipe/Create';

class App extends Component {

  render() {
    return (
      <Router>
        <div id="main">
          <div id="top-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><Link to="/new">New</Link></li>
              <li className="right-nav"><Link to="/auth/login">Login</Link></li>
            </ul>
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/recipes" component={RecipeContainer} />
              <Route path="/new" component={CreateRecipe} />
              <Route path="/auth" component={Auth} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
