import React, { Component } from 'react';

export default class CreateForm extends Component {

  handleOnSubmit(title) {
    alert('you typed' + title);
  }

  render () {
    return (
      <div>
        <form onSubmit={event => {
          event.preventDefault();
          const form = event.target;
          const { title } = form.elements;
          handleOnSubmit(title.value);
          form.reset();
        }}>
          <label>
            Recipe Title
            <input name="title" type="text" placeholder="Recipe Title" />
          </label>

          <button type="submit">Save</button>

        </form>
      </div>
    );

  }
}