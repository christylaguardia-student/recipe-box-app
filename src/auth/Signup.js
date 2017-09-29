import React from 'react';
import { Link } from 'react-router-dom';

export default ({ handleOnSubmit }) => (
  <div className="centered">
    <form
      onSubmit={event => {
        event.preventDefault();
        const form = event.target;
        const { username, email, password } = form.elements;
        const data = {
          username: username.value,
          email: email.value,
          password: password.value
        };
        handleOnSubmit(data);
        form.reset();
      }}>
      <h1>Join Recipe Box.</h1>
      <h3>Like your grandma's old recipe box, it's free and you'll love it.</h3>
      <h3>Already a member? <Link to="/login">Login here.</Link></h3>
      <label>
        Username:
        <input name="username" required />
      </label>
      <label>
        Email:
        <input name="email" type="email" required />
      </label>
      <label>
        Password:
        <input name="password" type="password" required />
      </label>
      <button>Signup</button>
    </form>
  </div>
);
