import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from '../components/recipe/Recipe';

const mapStateToProps = (state) => {

  return {
    recipe: state.recipe,
    // id: state.id,
    // title: state.title,
    // instructions: state.instructions,
    // ingredients: state.ingredients,
  };

}

export default connect(mapStateToProps)(Recipe);
