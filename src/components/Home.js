import React, { Component } from 'react';
import '../styles/Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  handleOnChange(e) {
    const search = e.target.value;
    this.setState({ search });
  }

  handleOnSubmit() {
    
  }

  render() {
    return (
      <div id="home-container">
        <div id="home">
          <h1>Christy's Recipe Box</h1>
          <form onSubmit={event => {
              event.preventDefault();
              const form = event.target;
              this.handleOnSubmit();
              form.reset();
          }}>
            <input name="search" type="text" onChange={this.handleOnChange} />
            <br/>
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    )
  }
}
