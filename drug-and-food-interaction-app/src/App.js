import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Medication from './Medication';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Medication text ="Medication Diet Suggestion"/>
        
      </div>
    )
  }
}

export default App;
