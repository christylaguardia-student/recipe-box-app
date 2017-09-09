import React from 'react';
import { Link } from 'react-router-dom';

export default function Login({ onSubmit }) {
  return (
    <div className="centered-container">
      <form onSubmit = {e => {
        console.log('submitting login form...');
        e.preventDefault();
        const { elements } = e.target;
        const data = Object.keys(elements).reduce((obj, key) => {
          obj[key] = elements[key].value;
          return obj;
        }, {});
        onSubmit(data);
      }}>
        <h1>Signin to your Recipe Box.</h1>
        <h3>Not already a member? <Link to="/auth/signup">Signup here.</Link></h3>
        <label>Email</label>
        <input name="email" type="email" required />
        
        <label>Password</label>
        <input name="password" type="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}