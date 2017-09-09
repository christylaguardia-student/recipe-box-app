import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup({ submit }) {
  return (
    <div className="centered-container">
      <form onSubmit={e => {
        console.log('submitting signup form...');
        e.preventDefault();
        const { elements } = e.target;
        const data = Object.keys(elements).reduce((obj, key) => {
          obj[key] = elements[key].value;
          return obj;
        }, {});
        submit(data);
      }}>
        <h1>Join Recipe Box.</h1>
        <p>Like your grandma's old recipe box, it's free and you'll love it.</p>
        <p>Already a member? <Link to="/auth/signup">Login here.</Link></p>
        <label>First Name</label>
        <input name="firstName" type="text" required />

        <label>Last Name</label>
        <input name="lastName" type="text" required />
        
        <label>Email</label>
        <input name="email" type="email" required />
        
        <label>Password</label>
        <input name="password" type="password" required />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}