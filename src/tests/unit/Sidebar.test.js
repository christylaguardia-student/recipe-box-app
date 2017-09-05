import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Sidebar from '../../components/Sidebar';

describe('<Sidebar />', () => {

  const testRecipes = [
    {
      "_id": 1,
      "title": "Chocolate Chip Cookies",
      "instructions": "Mix stuff and put on cookie sheet. Then put in oven. Do not burn.",
      "ingredients": [ 
        { "_id": 1, "name": "flour", "amount": 2, "unit": "cup" },
        { "_id": 2, "name": "sugar", "amount": 1, "unit": "cup" },
        { "_id": 3, "name": "chocolate chips", "amount": 2.5, "unit": "cup" }
      ]
    },{
      "_id": 2,
      "title": "White Chocolate Chip Cookies",
      "instructions": "Mix stuff and put on cookie sheet. Then put in oven. Do not burn.",
      "ingredients": [ 
        { "_id": 1, "name": "flour", "amount": 2, "unit": "cup" },
        { "_id": 2, "name": "sugar", "amount": 1, "unit": "cup" },
        { "_id": 3, "name": "white chocolate chips", "amount": 2.5, "unit": "cup" }
      ]
    }
  ]

  it('renders the Sidebar component', () => {
    const wrapper = toJSON(shallow(<Sidebar sidebarRecipeList={testRecipes} />));
    expect(wrapper).toMatchSnapshot();
  });

})