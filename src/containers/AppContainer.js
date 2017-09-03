import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import '../styles/App.css';
import SidebarContainer from './SidebarContainer';
import RecipeContainer from './RecipeContainer';
import Home from '../components/Home';
import CreateForm from '../components/CreateForm';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new">Add New</Link></li>
          </ul>
          <SidebarContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={CreateForm} />
            <Route path="/recipes?=id" component={RecipeContainer} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
