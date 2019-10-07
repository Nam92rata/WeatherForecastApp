import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import WeatherCard from './components/weatherCard';
import ForecastCard from './components/forecastCard';
import AboutUs from './components/aboutUs';

import './App.css';
import Login from './components/login';
import HomePage from './components/homePage';

class App extends Component {
  render() {
    return (
      <Router history={createHistory}>
        <div className="App">
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/HomePage' component={HomePage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;


// import React from 'react';
// import './App.css';
// import HomePage from './components/homePage';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       <h1>Weather-App</h1>
//       <h3>Select City</h3>
//       <HomePage />
//     </div>
//   );
// }

// export default App;
