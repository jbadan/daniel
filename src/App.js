import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect
  } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NotFound from './NotFound';
import GreatDivide from './GreatDivide';
import CrossCountry from './CrossCountry';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/greatdivide" component={GreatDivide} />
          <Route exact path="/crosscountry" component={CrossCountry} />
        </Switch>
      </Router>
    );
  }
}

export default App;
