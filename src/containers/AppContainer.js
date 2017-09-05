import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import Home from '../components/Home';
import Create from '../components/Create';
import RecipeContainer from './RecipeContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <div id="main">
          <div id="top-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new">New</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
            </ul>
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/new" component={Create} />
              <Route path="/recipes" component={RecipeContainer} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
