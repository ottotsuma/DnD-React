import React from 'react';
import './App.css';
import Monster from './fetch.js';
// import Posts from './monsters.js'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import currentMonster from './stack.js'
import Nav from './Nav.js'

function App () {
  return (
    <Router>
  <div className="App">
    <Nav />
    <Switch>
      <Route path="/" exact component={Monster} />
      <Route path="/:id" component={currentMonster} />
    </Switch>
  </div>
  </Router>
  );
}

export default App;

