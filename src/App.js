import React, { Component } from 'react';
import './styles/App.css';
import SidebarContainer from './containers/SidebarContainer';
import RecipeContainer from './containers/RecipeContainer';

class App extends Component {
  render() {
    return (
      <div>
        <SidebarContainer />
        <RecipeContainer />
      </div>
    );
  }
}

export default App;
