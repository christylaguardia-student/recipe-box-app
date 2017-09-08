import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import RecipeDetails from '../components/RecipeDetails';
import { getRecipe } from '../store/recipe.actions'; 

function NoRecipe() {
  return (
    <h1>Click on a recipe to view</h1>
  );
}

class RecipeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedId: null,
      selectedRecipe: null
    };
  }

  componentDidUpdate(prevProps) {
    const newSelectedId = this.props.location.pathname.split('/recipes/')[1];

    if (this.state.selectedId !== newSelectedId) {
      this.setState({ 
        selectedId: newSelectedId,
        selectedRecipe: this.props.getRecipe(newSelectedId)
      });
    }
  }

  // getSelectedRecipe(id) {
  //   return request
  //     .get(id)
  //     .then(res => this.setState({ selectedRecipe: res }))
  //     .catch(() => console.log('uh oh, there was an error'));
  // }


  render() {
    return (
      <div>
        <div className="left-side">
          <Sidebar />
        </div>
        <div className="right-side">
          {this.state.selectedId !== null ? <RecipeDetails recipe={this.state.selectedRecipe} /> : <NoRecipe /> }
        </div>
      </div>
    );
  }
    
}

export default connect(null, { getRecipe })(RecipeContainer);