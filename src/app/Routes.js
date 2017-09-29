import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from '../auth/Auth';
import { signout } from '../auth/actions';
import Home from './Home';
import About from './About';
import RecipeContainer from '../recipe/Container';
import CreateRecipe from '../recipe/Create';
import '../styles/App.css';


export function Routes({ user, signout }) {
  return (
    <Router>
      <div id="main">
        <div id="top-nav">
          {
            user
              ? <LoggedInOptions logout={signout}/>
              : <LoggedOutOptions />
          }
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/recipes" component={RecipeContainer} />
          <Route path="/new" component={CreateRecipe} />
          <Route path="/login" component={Auth} />
          <Route path="/signup" component={Auth} />
        </Switch>
      </div>
    </Router>
  );
}

function LoggedInOptions({ logout }) {
  return (
    <div>
      <p>Welcome {this.props.user.username}!</p>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/new">New</Link></li>
        <li className="right-nav"><Link to="/" onClick={logout}>Logout</Link></li>
      </ul>
    </div>
  );
}

function LoggedOutOptions() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li className="right-nav"><Link to="/login">Login</Link></li>
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => {
      dispatch(signout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
