import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import HomePage from './components/homePage';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/HomePage' component={HomePage}></Route>
        </div>
      </HashRouter>
    );
  }
}

export default App;

