import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import RecipeDetails from '../../components/RecipeDetails';

describe.skip('<RecipeDetails />', () => {

  const testRecipe = {
    _id: 1,
    title: 'Cookies',
    instructions: 'Mix stuff and put on cookie sheet. Then put in oven. Do not burn.',
    ingredients: [ 
      { _id: 1, name: 'flour', amount: 2, unit: 'cup' },
      { _id: 2, name: 'sugar', amount: 1, unit: 'cup' },
      { _id: 3, name: 'chocolate chips', amount: 2.5, unit: 'cup' }
    ]
  };

  it('renders the Details component', () => {
    const wrapper = toJSON(shallow(<RecipeDetails recipe={testRecipe} />));
    expect(wrapper).toMatchSnapshot();
  });

});
