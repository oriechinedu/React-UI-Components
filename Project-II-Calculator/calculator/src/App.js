import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import CalculatorBody from './components/DisplayComponents/CalculatorBody'

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay value="9" />
      <CalculatorBody />
    </div>
  );
};

export default App;
