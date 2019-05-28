import React, {useState} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import CalculatorBody from './components/DisplayComponents/CalculatorBody'


export default class App extends React.Component {
  state = {
    result: 0,
  }
  render() {
    return (
      <div className="app">
      <CalculatorDisplay value={this.state.result} />
      <CalculatorBody />
    </div>
    )
  }
}
