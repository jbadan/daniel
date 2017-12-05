import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect
  } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
