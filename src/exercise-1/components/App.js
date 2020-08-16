import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router,Redirect, NavLink, Switch, Route} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Profile from './Profile'
import Products from './Products'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
        <header>
          <nav><NavLink to="/" exact activeClassName="active">Home</NavLink></nav>
          <nav><NavLink to="/products" activeClassName="active">Products</NavLink></nav>
          <nav><NavLink to="/my-profile" activeClassName="active">My Profile</NavLink></nav>
          <nav><NavLink to="/about-us" activeClassName="active">About us</NavLink></nav>
        </header>
        <main>
        <Switch>
          <Route exact path="/my-profile" component={Profile} />
          <Route path="/products"  component={Products} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/" component={Home} />
          <Redirect from="/goods" to="/products" />
          <Redirect to="/" />
        </Switch>
          
        </main>
        </Router>
      </div>
    );
  }
}

export default App;
