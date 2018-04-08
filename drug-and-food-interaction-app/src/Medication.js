import React, { Component } from 'react';
import './App.css';
class Medication extends Component {
  render() {
    return (
      <div >
        <h1 className="header">{this.props.text}</h1>

      </div>
    )
  }
}

export default Medication;
