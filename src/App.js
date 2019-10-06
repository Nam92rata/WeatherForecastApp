import React from 'react';
import './App.css';
import HomePage from './components/homePage';

function App() {
  return (
    <div className="App">
      <h1>Weather-App</h1>
      <h3>Select City</h3>
      <HomePage />
    </div>
  );
}

export default App;
