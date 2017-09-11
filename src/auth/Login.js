import React from 'react';
import { Link } from 'react-router-dom';

export default function Login({ handleOnSubmit }) {
  return (
    <form
      className="centered-form"
      onSubmit={event => {
        event.preventDefault();
        const form = event.target;
        const { email, password } = form.elements;
        const data = {
          email: email.value,
          password: password.value
        };
        handleOnSubmit(data);
        form.reset();
      }}>
  
      <h1>Login to your Recipe Box.</h1>
      <h3>Not already a member? <Link to="/signup">Signup here.</Link></h3>
      <label>Email: <input name="email" type="email" required /></label>
      <label>Password: <input name="password" type="password" required /></label>
      <button type="submit">Login</button>
    </form>
  );
}