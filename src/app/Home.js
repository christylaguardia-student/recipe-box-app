import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div id="home-container">
      <div id="home">
        <h1 className="jumbo-text">Recipe Box</h1>
        <h2>Save your recipes. Get cooking.</h2>
        <Link className="jumbo-link" to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
