import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';
import SidebarContainer from './SidebarContainer';
// import RecipeContainer from './RecipeContainer';
import Home from '../components/Home';

class App extends Component {

  render() {
    return (
      <div>
        <SidebarContainer />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/recipe/:id" render={() => <RecipeContainer recipe={this.props.recipe} />} /> */}
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
